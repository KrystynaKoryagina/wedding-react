import React from 'react';
import PropTypes from 'prop-types';

import './CoachesSection.scss';

import SectionTitle from '../shared/SectionTitle/SectionTitle';
import Coach from '../shared/Coach/Coach';

const CoachesSection = ({coachesData}) => {
	const {meta, content} = coachesData;

	const coachItems = content.map((item, i) => {
		const {_id, ...coachProps} = item;
		
		return (
			<li key={_id} className="coaches__item">
				<Coach {...coachProps} index={i}/>
			</li>
		)
	});

	return (
		<section className="coaches default-section">
			<div className="container">
				<SectionTitle {...meta} />

				<ul className="coaches__list">
					{coachItems}
				</ul>	
			</div>
		</section>
	)
}

CoachesSection.propTypes = {
	offerData: PropTypes.shape({
		meta: PropTypes.object,
		content: PropTypes.arrayOf(PropTypes.object)
	})
}

export default CoachesSection;