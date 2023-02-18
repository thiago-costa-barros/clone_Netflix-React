import React from "react";
import "./FeaturedMovie.css"


export default ({ item }) => {

    let firstDate = new Date(item.release_date); //pegar apenas o ano na data

    var point = (item.vote_average) //arredondar as notas de avaliação
    var pointRounded = Math.round((point + Number.EPSILON) * 100) / 100;



    let genres = []; //pegar os generos pelos seus respectivos nomes
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    var description = item.overview; //(item.overview.length > 200 ? item.overview : item.overview.substring(0, 200) + '...');



    return (
        <section className="featured"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.title}</div>
                    <div className="featured--info">
                        <div className="featured--infoPoint">{pointRounded}/10</div>
                        <div className="featured--infoYear">{firstDate.getFullYear()}</div>
                        <div className="featured--infoTime">{item.runtime} minutos</div>
                    </div>
                    <div className="featured--description">
                        {description}
                    </div>
                    <div className="featured--buttons">
                        <a className="featured--buttonWatch" href={`/watch/${item.id}`}>► Assistir</a>
                        <a className="featured--buttonList" href={`/add/list/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}