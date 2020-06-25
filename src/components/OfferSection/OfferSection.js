import React from 'react';
import PropTypes from 'prop-types';

import './OfferSection.scss';

import SectionTitle from '../shared/SectionTitle/SectionTitle';

const OfferSection = ({offerData}) => {

	const {meta, content} = offerData;

	const offerItems = content.map((item, i) => {
		const {_id, title, url} = item;

		return (
			<li key={_id} className="offer__item">
				<a href={url} className="offer__link">
					<i className={`offer__icon icon icon-ico${i+1}`}></i>
					<div className="offer__text">{title}</div>					
				</a>
			</li>
		)
	});

	return (
		<section className="offer default-section">
			<div className="container">
				<SectionTitle {...meta} />
				
				<ul className="offer__list">
					{offerItems}
				</ul>	
			</div>
		</section>
	)
}

OfferSection.propTypes = {
	offerData: PropTypes.shape({
		meta: PropTypes.object,
		content: PropTypes.arrayOf(PropTypes.object)
	})
}

export default OfferSection;