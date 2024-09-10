import GhettoCupid from '../Images/GhettoCupid.jpg'
import KayStrueno from '../Images/dontTakeThisSeriousKaystrueno.jpg'
import Lujon from '../Images/Lujon.jpg'
import Sonder from '../Images/Sonder.png'
import LonelyGod from '../Images/TheLonelyGodAndTheDefectiveVessel.jpg'
function HomeForm() {
    const goToSlide = (slideIndex) => {
        // Logic to navigate to the specified slide
        console.log(`Navigating to slide ${slideIndex}`);
    };


    return(
        <>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <a href="https://soundcloud.com/jaydes/sets/ghetto-cupid">
                            <img src={GhettoCupid} style={{width: 300}} className="img-responsive" alt="Ghetto Cupid album cover"/>
                        </a>
                        <p className="text-center">Jaydes' Ghetto Cupid is his most recent album and is already on of my favorites. When he goes from grunge depressive like songs "Rose" and "misery",
                            to his lover songs like "3" and "dead girl" to the more hype songs like "spaz" misery. His versatility knows no bounds as he's had to create alternate music personas
                            under the names <a href="https://soundcloud.com/heartpacing">Mandy im so tired</a> and <a href="https://soundcloud.com/jaydes">yen</a>
                        </p>
                        <div className="carousel-caption">
                            <h3>Ghetto Cupid</h3>
                            <p className="text-primary">Jaydes</p>
                        </div>
                    </div>

                    <div className="item">
                        <a
                            href="https://open.spotify.com/album/4TMb6OY0lzaNQsj6vcg7M8?si=6A6HAJv4TyGNu2dUxSIp6A"><img src={KayStrueno} style={{width: 300}} className="img-responsive" alt="Kaystrueno's album don't take this serious"/>
                        </a>
                        <p className="text-center">I enjoy Kaystrueno as an artist there's not a specific album/song that I like about him.
                            he's just a solid individual. He pioneered an entire subgenre of rap. Artists that are known now like Odetari
                            He was a big inspiration to more popular artists in the category like Odetari,
                        </p>
                        <div className="carousel-caption">
                            <h3>Don't Take This Serious</h3>
                            <p>Kaystrueno</p>
                        </div>
                    </div>

                    <div className="item">
                        <a
                            href="https://open.spotify.com/album/26hWRAaiKiryWc14gP4poa?si=O1eGP87gRhey8Rq81hCFXQ"><img src={LonelyGod} style={{width: 300}} className="img-responsive" alt="Sorbet's album The Lonely God and the Defective Vessel"/>
                        </a>
                        <p className="text-center">
                            This album I had found due to a recommendation from a friend. Usually at first songs would start with a simple melody and they
                            would just start to pick up certain instruments as the song goes along but this one went from the melody to the full thing
                            it was the impact of most of the songs that made me relish this album. Additionally, this album was the only thing
                            on the accounts spotify. I did some searching and found their <a href="https://soundcloud.com/sopbhea/popular-tracks">soundcloud account</a>
                        </p>
                        <div className="carousel-caption">
                            <h5>The Lonely God and the Defective Vessel</h5>
                            <p>Sorbet</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container text-center">
                <h3>Opinions</h3><br/>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={Lujon} className="img-responsive" style={{width: 300}} alt="Image of Lujon Song"/>
                        <p>
                            Music has grown to be very click like. In a way your entire personality has to be whoever you're listening
                            to otherwise you're a fake fan especially with newer music.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <img src={Sonder} className="img-responsive" style={{width: 300}} alt="Image of Sonder"/>
                        <p>
                            One thing I dislike is the fact that so many people say that unless you listen to
                            EVERYTHING you can't consider yourself a real listener of music I think it's wierd that people aren't allowed to have their own niches
                            and stick to them.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <div className="well text-info">
                            <p>I hope people can just let people listen to
                                what they want to listen to and be open-minded to other people's opinions
                            </p>
                        </div>
                        <div className="well text-info">
                            <p>Elroi Belete</p>
                        </div>
                    </div>
                </div>
            </div><br/>
            <footer className="container-fluid text-center">
                <a href="https://open.spotify.com/playlist/7ImBd5OKYKCpqgWfYNiFo4?si=a6acaa370b754401">One of my playlists</a>
            </footer>
        </>
    );
}

export default HomeForm;