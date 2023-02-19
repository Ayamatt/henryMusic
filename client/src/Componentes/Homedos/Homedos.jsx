import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllAlbums, getPlayer, isPlaying, Landing } from ".././../Actions/actions.js";
import styled from "styled-components";
import { getAllArtists, filtroGenero} from ".././../Actions/actions.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import registre from '../Homedos/registre.jpg'


=======
import play from './play.png'
>>>>>>> 41cbd0bd34a1de6faeb5e23eef38c244a9d5065f

const Homedos = () => {


  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const infoMusic = useSelector((state) => state.artists);
  const infoAlbum = useSelector((state) => state.albums);
  const infoPlayer = useSelector(state => state.player)



  function handleGenero(genero) {
    genero.preventDefault();
    dispatch(filtroGenero(genero.target.value));
  }

  const [data, setData] = useState({album: []})

  function handleClick(e) {
      setData({...data, i: e})
      dispatch(getPlayer({tracks: data.album[e].tracks, i: 0}))
      dispatch(isPlaying())
      
  }

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllArtists(200));
      dispatch(getAllAlbums(50));
    }
    dispatch(Landing());
  }, [isAuthenticated]);

  useEffect(() => {
    setData({album: infoAlbum.albums, i: 0})
  }, [infoAlbum])


  console.log(infoPlayer)

  return (
    isAuthenticated ? (

<<<<<<< HEAD
      <Container>
        <div className="contenedor  d-flex justify-content-center container-fluid">
          <div className="container-fluid w-100 p-0 m-0">
            <h1 className="h1 ms-3">
              Bienvenido{" "}
              <span className="pit">{user?.nickname.toUpperCase()}</span>
            </h1>
            <h2 className=" d-flex justify-content-center mt-4 mb-3  h1 text-white">
              Top artistas
            </h2>

            <div className="container-fluid d-flex justify-content-center">
              <div className="row container-sm">
                {infoAlbum.albums ? (
                  infoAlbum.albums?.slice(30, 36).map((c) => {
                    return (
                      <div className="col-md-4">
                        <Hardcode
                          key={c.id}
                          id={c.id}
                          name={c.name}
                          image={c.images[0]?.url}
                          tracks={c.tracks}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="uwu w-100 container-fluid">
                    <div className="loaderRectangle d-flex justify-content-center">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
=======
    <Container1>
      <div className="contenedor  d-flex justify-content-center container-fluid">
        <div className="container-fluid w-100 p-0 m-0">
          <h1 className="h1 ms-3">
            Bienvenido{" "}
            <span className="pit">{user?.nickname.toUpperCase()}</span>
          </h1>
          <h2 className=" d-flex justify-content-center mt-4 mb-3  h1 text-white">
            Top artistas
          </h2>

          <div className="container-fluid d-flex justify-content-center">
            <div className="row container-sm">
              {infoAlbum.albums ? (
                infoAlbum.albums?.slice(30, 36).map((c) => {
                  return (
                    <Container container-fluid>
                    <div className="generos w-100 ">
                        <div className="cards">
                            <div className='cards-info'>
                                <div ><img className="card_imagen" key={c.id} src={c.images[0]?.url} alt={c.name} /></div>
                                <div className="card_text container">
                                    <p className='d-flex justify-content-start w-100'>{c.name}</p>
                                    <a className='d-flex ms-3 p-0' onClick={() => handleClick(infoAlbum.albums.indexOf(c))}><img src={play} alt="" /></a>
                                </div>               
                            </div>
                        </div>
                        {console.log('DATA', data)}
                    </div>
        
        
                </Container>
                  );
                })
              ) : (
                <div className="uwu w-100 container-fluid">
                  <div className="loaderRectangle d-flex justify-content-center">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
>>>>>>> 41cbd0bd34a1de6faeb5e23eef38c244a9d5065f
                  </div>
                )}

              </div>
            </div>

            <div className="btn-wrapper mt-0 mb-3 container-fluid">
              <select onChange={(e) => handleGenero(e)} className="btn">
                <option value="All">All Generos</option>
                <option value="Pop">Pop</option>
                <option value="Trap">Trap</option>
                <option value="Latin">Latin </option>
                <option value="Rock">Rock </option>
                <option value="hip hop">hip hop</option>
              </select>
            </div>

            {/* Aqui comienzan los carruseles */}

            <h2 className="d-flex justify-content-start h1 ms-3">Lo mas escuchado </h2>
            {/* carrusel */}

            <div className="swiffy-slider">
              <ul className="slider-container d-flex justify-content-center">
                {infoMusic.artists ? (
                  infoMusic?.artists.map((c) => {
                    return (
                      <li className="d-flex">
                        <Link to={"/detail/" + c.id}>
                          <Card
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            image={c.images[0]?.url}
                            genre={c.genres.map((el) => (
                              <span> {el.name} </span>
                            ))}
                          />
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <div className="uwu w-100 container-fluid">
                    <div className="loaderRectangle d-flex justify-content-center">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                )}
              </ul>
              <button type="button" className="slider-nav"></button>
              <button
                type="button"
                className="slider-nav slider-nav-next"
              ></button>
            </div>

            <h2 className="d-flex justify-content-start h1 ms-3">
              Temas para {user?.name}
            </h2>
            {/* carrusel */}
            <div className="swiffy-slider">
              <ul className="slider-container d-flex justify-content-end">
                {infoMusic.artists ? (
                  infoMusic?.artists.map((c) => {
                    return (
                      <li className="d-flex">
                        <Link to={"/detail/" + c.id}>
                          <Card
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            image={c.images[0]?.url}
                            genre={c.genres.map((el) => (
                              <span> {el.name} </span>
                            ))}
                          />
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <div className="uwu mw-100 container-fluid">
                    <div className="loaderRectangle d-flex justify-content-center">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                )}
              </ul>
              <button type="button" className="slider-nav"></button>
              <button
                type="button"
                className="slider-nav slider-nav-next"
              ></button>
            </div>

            <h2 className="d-flex justify-content-start h1 ms-3">

              Canciones creadas por la Comunidad
            </h2>
            {/* carrusel */}

            <div className="swiffy-slider">
              <ul className="slider-container d-flex">
                {infoMusic.artists ? (
                  infoMusic?.artists.map((c) => {
                    return (
                      <li className="d-flex">
                        <Link to={"/detail/" + c.id}>
                          <Card
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            image={c.images[0]?.url}
                            genre={c.genres.map((el) => (
                              <span> {el.name} </span>
                            ))}
                          />
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <div className="uwu mw-100 container-fluid">
                    <div className="loaderRectangle d-flex justify-content-center">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                )}
              </ul>
              <button type="button" className="slider-nav"></button>
              <button
                type="button"
                className="slider-nav slider-nav-next"
              ></button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </Container>
=======
      </div>
      <div className='card_imagen bg-transparent fixed-bottom'>
      </div>
    </Container1>
>>>>>>> 41cbd0bd34a1de6faeb5e23eef38c244a9d5065f

    ) :
      <Verificado className='container-fluid'>
        <div className='contenedor'>
          <h1 className=' w-100 d-flex justify-content-center bg-dark text-light'>Acceso solo para usuarios Registrados</h1> <img className='contenedor img-fluid wx-100 mt-0' src={registre} alt="nofount" />
        </div>
      </Verificado>
  );
};

export default Homedos;

const Container1 = styled.div`
  * {
    text-decoration: none;
    color: #ffffff;
  }

  .pikachu {
    font-size: 13px;
    color: #ffff01;
  }

  li {
    list-style: none;
    text-decoration: none;
  }

  .pit {
    text-decoration: underline #ffff01;
  }

  .h1 {
   font-weight: 600; 
  }

  .contenedor {
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    /* background: rgb(0, 0, 0);
    background: linear-gradient(
      124deg,
      rgba(0, 0, 0, 1) 5%,
      rgba(53, 24, 74, 1) 100%,
      rgba(63, 28, 87, 1) 100%,
      rgba(91, 40, 125, 1) 100%,
      rgba(131, 58, 180, 1) 100%
    ); */

    background: rgb(0,0,0);
    background: linear-gradient(138deg, rgba(0,0,0,1) 8%, rgba(0,1,24,1) 100%, rgba(0,1,27,1) 100%, rgba(0,1,54,1) 100%, rgba(0,3,122,1) 100%);
    margin-left: 230px;
    color: white;
    @media screen and (max-width: 960px) {
      margin-left: auto;
    }
  }



  .btn-wrapper {
    border-radius: 10px;
    margin-top: 20px;
    width: 220px;
    height: 50px;
    position: relative;
    z-index: 1;
    background: linear-gradient(270deg, #ffff01, white, #000000, #000000);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.363);
    background-size: 800% 800%;
    animation: animateBorder 8s ease infinite;
  }

  .btn {
    width: 95%;
    height: 90%;
    position: absolute;
    padding: 0px;
    border: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #131313;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 4.5px;
    color: white;
    font-weight: bold;
  }

  @keyframes animateBorder {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .uwu {
    animation-name: uwu;
    animation-duration: 6s;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes uwu {
    0% {
      opacity: 1;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  .loaderRectangle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 0 3px;
  }

  .loaderRectangle div {
    width: 10px;
    height: 16px;
    animation: 0.9s ease-in-out infinite;
    background: linear-gradient(270deg, yellow, white, orange, red);
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }

  .loaderRectangle div:nth-child(1) {
    animation-name: rectangleOneAnim;
    animation-delay: 1s;
  }

  @keyframes rectangleOneAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 30px;
    }

    100% {
      height: 15px;
    }
  }

  .loaderRectangle div:nth-child(2) {
    animation-name: rectangleTwoAnim;
    animation-delay: 1.1s;
  }

  @keyframes rectangleTwoAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 40px;
    }

    100% {
      height: 15px;
    }
  }

  .loaderRectangle div:nth-child(3) {
    animation-name: rectangleThreeAnim;
    animation-delay: 1.2s;
  }

  @keyframes rectangleThreeAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 50px;
    }

    100% {
      height: 15px;
    }
  }

  .loaderRectangle div:nth-child(4) {
    animation-name: rectangleFourAnim;
    animation-delay: 1.3s;
  }

  @keyframes rectangleFourAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 40px;
    }

    100% {
      height: 15px;
    }
  }

  .loaderRectangle div:nth-child(5) {
    animation-name: rectangleFiveAnim;
    animation-delay: 1.4s;
  }

  @keyframes rectangleFiveAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 30px;
    }

    100% {
      height: 15px;
    }
  }
`;

const Container = styled.div`

img{
    width: 40px;
}

.generos{
    flex-wrap: wrap;
    width: 100%;  
    margin-bottom: 10px;
}
.cards{
    width: 300px;
    height: 80px;
    transition: var(--efecto);
    flex-basis: calc((100% / 3) - 20px);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 1rem;
    margin: 10px;
    --background: linear-gradient(to bottom,  #000000 70%, #FFFF01 100%);
    padding: 4px;
    overflow: visible;
    background: #000000;
    background: var(--background);
    position: relative;
    z-index: 1;

}
.cards::after {
    position: absolute;
    content: "";
    top: 20px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.8);
    filter: blur(100px);
    background: #000000;
    background: var(--background);
    transition: opacity .5s;
}
.cards-info {
    --color: #181818;
    background: var(--color);
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: .7rem;
}
.cards:hover::after {
    opacity: 0;
}   
 .cards:hover .card-info {
    color: #000000;
    transition: color 1s;
} 

.card_imagen{
    
    width: 80px;
    height: 70px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.card_text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: calc(100% - 80px);
}
`

// SOLO PARA CORREOS VERIFICADO

const Verificado = styled.div`
  * {
    text-decoration: none;
    margin: auto;
    padding: auto;
    color: white;
  }

  .contenedor {
    width: auto;
    height: auto;
    max-height: 300vh;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 0, 1) 100%,
      rgba(0, 0, 0, 1) 100%
    );
    margin-left: auto;
    color: white;
    display: flex;
    position: relative;
    padding-bottom: 0px;
  }
`;
