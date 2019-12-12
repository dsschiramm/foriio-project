import React from "react";
import { useHistory } from "react-router-dom";

const Carousel = props => {

    const history = useHistory();

    const { flLink, images = [], videos = [] } = props.carousel;

    const works = [
        ...images,
        ...videos.map((it) => {
            return { title: it.title, urls: { detail: [it.picture_url] }, id: it.video_id }
        }
    )];

    const linkToWork = (workId, flRedirect) => {

        if (flRedirect) {
            history.push(`/works/${workId}`);
        }
    };

    if (works.length) {
        return (
            <div className="row">
                <div id="user-carousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        {works.map((image, index) => {
                            return (
                                <li key={image.id} data-target="#user-carousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                            )
                        })}
                    </ol>

                    <div className="carousel-inner">
                        {works.map((image, index) => {

                            const titleHTML = image.title ? (
                                <div className="carousel-caption d-none d-md-block d-flex justify-content-center">
                                <h5 className="custom-label-carrosel">{image.title}</h5>
                                </div>) : "";

                            return (
                                <div key={image.id} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                    <img onClick={() => linkToWork(image.id, flLink)} className="d-block w-100 custom-box-img" src={image.urls.detail ? image.urls.detail : image.urls.list} srcSet={image.srcset} alt="" />

                                    {titleHTML}
                                </div>
                            )
                        })}
                    </div>

                    <a className="carousel-control-prev" href="#user-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#user-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
};

export default Carousel;
