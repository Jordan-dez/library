import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/actions/actionFetchBooks'
import moment from 'moment';
import { addBook } from '../../redux/actions/actionAddBooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure();

const SearchBooks = () => {

    const [title, setTitle] = useState('')

    const state = useSelector(state => state.search);
    const dispatch = useDispatch();

    console.log(state);
    const notify = () => toast("Wow so easy !");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        dispatch(fetchBooks(title))
        
    }

    const handleSave =(title,author)=>{
        const bookToSave= {
             title,
            author
        }
        dispatch(addBook(bookToSave))
        // toast.info("livré enregistré",{position:toast.POSITION.TOP_LEFT})
        notify();
    }

    const displayFetcedBooks = state.isLoadind ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading</span>
            </div>
        </div>
    ) : state.error !== '' ? (
        <p>{state.error}</p>
    ) : (
        state.fetchedBooks.map(data => {
            return (
                <div className="card mb-2" key={data.id}>
                    <div className="card-header">
                        <h5 className='mb-0'>
                            <button className="btn btn-link collaspe" data-target={`#${data.id}`}
                                aria-expanded="false"
                            >
                                {data.volumeInfo.title}
                            </button>
                        </h5>
                    </div>
                    <div className="collaspe" data-parent="accordion" id={data.id}>
                        <div className="card-body">
                            {data.volumeInfo.hasOwnProperty('imageLinks') && <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} />}
                            
                            <br />
                            <h4 className="card-title">{data.volumeInfo.title}</h4>
                            <h5 className='card-title'>Auteurs: {data.volumeInfo.authors}</h5>
                            <p className="card-text">{data.volumeInfo.description}</p>
                            <p className="text-muted">publié le {moment(data.volumeInfo.publishedDate).format('L')} publié par : {data.volumeInfo.publisher}</p>
                            <a
                                href={data.volumeInfo.previewLink}
                                className="btn btn-outline-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                plus d'infos
                            </a>
                            <button className="btn btn-outline-secondary ml-3" onClick={()=>handleSave(data.volumeInfo.title, data.volumeInfo.authors)}>Enregistrer</button>
                        </div>
                    </div>
                </div>
            )
        })

    )
    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">BOOKS</h1>
                    <p>indiquez le sujet du livre à rechercher sur google</p>
                    <form onSubmit={handleSubmit} className="form-inline d-flex justify-content-center">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder='Que cherchez-vous ?'
                                className="form-control mr-3"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className='btn btn-outline-secondary ml-3'>Rechercher</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container" style={{ minHeight: '200px' }}>
                <div id="accordion">
                    {displayFetcedBooks}
                </div>
            </div>
        </main>
    )
}

export default SearchBooks