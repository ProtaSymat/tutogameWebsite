import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { Type, Film, Camera, Code } from 'react-feather';
import { v4 as uuidv4 } from 'uuid';

const AddTutoriels = () => {
  const [blocs, setBlocs] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [tutorielId, setTutorielId] = useState(null);
  const [tutoriels, setTutoriels] = useState(null);

  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [chapitreId, setChapitreId] = useState('');
  const [chapitres, setChapitres] = useState([]);

  useEffect(() => {
    fetchChapitres();
  }, []);
  
  useEffect(() => {
    if (chapitres.length > 0) {
      setChapitreId(chapitres[0].chapitre_id);
    }
  }, [chapitres]);

  const fetchChapitres = async () => {
    const url = "https://tutogame.alwaysdata.net/tutogameAPI/api/chapitres";
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      let data = await response.json();
      setChapitres(data.chapitres);
    } catch (error) {
      setError(error.toString());
      console.error('Error:', error);
    }
  };

  const saveTutoriel = async () => {
    const urlGetLastOrder = 'https://tutogame.alwaysdata.net/tutogameAPI/api/tutoriels';
    const urlAddTutoriel = 'https://tutogame.alwaysdata.net/tutogameAPI/api/add-tutoriel/';
    try {
        const responseGetLastOrder = await fetch(urlGetLastOrder, {
            headers: {
                'Accept': 'application/json',
            },
        });
        const data = await responseGetLastOrder.json();
        const tutoriels = data.tutoriels || [];
        const lastOrder = tutoriels.reduce((max, tutoriel) => Math.max(max, tutoriel.ordre), 0);
        const newOrder = lastOrder + 1;
        const now = new Date();
        const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);        
        const responseAddTutoriel = await fetch(urlAddTutoriel, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `titre=${encodeURIComponent(titre)}&description=${encodeURIComponent(description)}&chapitre_id=${encodeURIComponent(chapitreId)}&date_publication=${encodeURIComponent(formattedDate)}&ordre=${encodeURIComponent(newOrder)}`,
        });
        const dataAdd = await responseAddTutoriel.json();
        if (dataAdd.tutoriel_id) {
            localStorage.setItem('lastTutorielId', dataAdd.tutoriel_id.toString());
            setSuccess(true);
        } else {
            setError('Erreur lors de la récupération de l\'ID du tutoriel.');
        }
      } catch (error) {
        setError('Erreur lors de la création du tutoriel.');
        console.error('Erreur:', error);
    }
};


const saveAllBlocs = async () => {
  const urlAddBloc = 'https://tutogame.alwaysdata.net/tutogameAPI/api/add-bloc/';
  const tutorielId = localStorage.getItem('lastTutorielId');
  if (!tutorielId) {
    console.error('Erreur: Aucun tutoriel ID trouvé dans le localStorage.');
    return;
  }

  let contentToSend = blocs.map(bloc => {
    switch (bloc.type) {
      case 'text':
        return `<p className="helvetica">${bloc.content}</p>`;
      case 'photo':
        return `<img className="object-fit-cover w-100" src="${bloc.content}" alt="Image" />`;
      case 'video':
        return `<div className="video-container"><iframe style={{ width: "100%", height: "500px" }} src="${bloc.content}"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
      case 'code':
        return `<pre><code>${bloc.content}</code></pre>`;
      default:
        return bloc.content;
    }
  }).join('');

  try {
    await fetch(urlAddBloc, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `tutoriel_id=${encodeURIComponent(tutorielId)}&contenue=${encodeURIComponent(contentToSend)}&ordre=${encodeURIComponent(1)}`,
    });
    localStorage.removeItem('lastTutorielId');
  } catch (error) {
    console.error('Erreur:', error);
  }
};


  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(blocs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setBlocs(items);
  };

  const addBloc = (type) => {
    const newBloc = { id: uuidv4(), type, content: '', ordre: '' };
    setBlocs([...blocs, newBloc]);
  };

  const updateBlocContent = (id, content) => {
    const updatedBlocs = blocs.map(bloc => bloc.id === id ? {...bloc, content} : bloc);
    setBlocs(updatedBlocs);
  };

  
  const renderBlocInput = (bloc) => {
    const handleContentChange = (event) => updateBlocContent(bloc.id, event.target.value);
    switch (bloc.type) {
      case 'text':
        return <textarea className="form-control border border-primary ps-5" placeholder="Écrivez votre texte ici" value={bloc.content} onChange={handleContentChange}></textarea>;
      case 'photo':
        return <input type="text" className="form-control border border-primary ps-5" placeholder="Entrez l'URL de votre image" value={bloc.content} onChange={handleContentChange} />;
      case 'video':
        return <input type="text" className="form-control border border-primary ps-5" placeholder="Entrez l'URL de votre vidéo" value={bloc.content} onChange={handleContentChange} />;
      case 'code':
        return <textarea className="form-control border border-primary ps-5" placeholder="Écrivez votre code ici" value={bloc.content} onChange={handleContentChange}></textarea>;
      default:
        return null;
    }
  };

  const popover = (
    <Popover id="popover-basic" className="d-flex flex-row">
    <Popover.Body>
    <Button variant="outline-secondary" size="sm" onClick={() => addBloc('text')}><Type/></Button>{' '}
    <Button variant="outline-secondary" size="sm" onClick={() => addBloc('video')}><Film/></Button>{' '}
    <Button variant="outline-secondary" size="sm" onClick={() => addBloc('photo')}><Camera/></Button>{' '}
    <Button variant="outline-secondary" size="sm" onClick={() => addBloc('code')}><Code/></Button>
  </Popover.Body>
    </Popover>
  );

  return (
    <div className="container mt-5">
      <h3 className="mb-5">Ajout du tutoriel :</h3>
      <input className="form-control border border-primary mb-3" type="text" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre du tutoriel" />
      <textarea className="form-control border border-primary mb-3" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description du tutoriel"></textarea>
      <select className="form-control border border-primary" value={chapitreId} onChange={(e) => setChapitreId(e.target.value)}>
  {chapitres.map((chapitre) => (
    <option key={chapitre.chapitre_id} value={chapitre.chapitre_id}>{chapitre.titre}</option>
  ))}
</select>
<Button className="mt-3" variant="primary" onClick={saveTutoriel}>Enregistrer le tutoriel</Button>
      {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
      {success && <div className="alert alert-success mt-3" role="alert">Le tutoriel a été enregistré avec succès!</div>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="blocs">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="blocs-container">
              {blocs.map((bloc, index) => (
                <Draggable key={bloc.id} draggableId={bloc.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="bloc-wrapper border border-primary my-2"
                    >
                      <div {...provided.dragHandleProps} className="drag-handle text-white bg-primary d-inline-flex align-items-center justify-content-center" style={{cursor: 'grab'}}>
                        : : :
                      </div>
                      {renderBlocInput(bloc)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="border-dotted border-primary p-5">
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="outline-primary" className="fs-1">+</Button>
        </OverlayTrigger>
      </div>
      <Button className="mt-3" variant="success" onClick={saveAllBlocs}>Enregistrer les blocs</Button>
      </div>
  );
};

export default AddTutoriels;