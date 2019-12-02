import React, {Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {deleteCardInfo} from '../store/ducks/cardInfo';

const Home = (props) => {
    const {cardInfo, deleteCardInfo} = props;
    return (
        <Fragment>
            {cardInfo.cardInfo.map((card , index) => (
                    <div key={index} className="card-info__wrapper">
                        <img width={150} height={150} src={card.imageSrc} alt={`card ${index}`}/>
                        <div>{card.title}</div>
                        <button onClick={() => deleteCardInfo(card.id)} className="card-info__button_delete">delete card</button>
                        <button onClick={() => props.history.push(`/card-detail${card.id}`)}>show detail</button>
                    </div>
                )
                )}
        </Fragment>
    );
};
const mapStateToProps = state => {
return {cardInfo: state.cardInfo}
};
const mapDispatchToProps = dispatch => {
    return {
        deleteCardInfo: (cardId) => {
            dispatch(deleteCardInfo(cardId));
        }
    }

};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));