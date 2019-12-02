import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import '../App.css';


const CardDetail = (props) => {
    const {cardInfo, match} = props;
    const selectedCard = match.params.cardId;
    const selectedCardDetail = cardInfo.cardInfo.find(card => card.id.toString() === selectedCard);
    return (
        <Fragment>
            <h2 className="card-detail__heading">
                this is detail of selected card:
            </h2>
            {
                selectedCardDetail && (
                    <div className="card-detail__wrapper">
                        <img width={400} height={400} src={selectedCardDetail.imageSrc}
                             alt={`card ${selectedCardDetail.id}`}/>
                        <div>{selectedCardDetail.title}</div>
                        <p>{selectedCardDetail.detail}</p>
                        <div className="card-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
                            error illum officiis
                            praesentium voluptatibus. Adipisci consequuntur, culpa deserunt dolor ea est ex laborum,
                            libero nulla placeat, provident quidem quis tempore.
                            Aliquam ducimus harum id impedit ipsum modi nesciunt numquam odit quasi. Autem, blanditiis
                            consequatur distinctio esse est ipsa laborum numquam officiis provident, quidem, suscipit
                            temporibus! Assumenda deserunt error quae veritatis.
                        </div>
                        <button onClick={() => props.history.goBack()}>back to home</button>
                    </div>
                )
            }
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {cardInfo: state.cardInfo}
};
export default withRouter(connect(mapStateToProps)(CardDetail));