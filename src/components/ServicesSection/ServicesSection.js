import React from 'react';
import PropTypes from 'prop-types';

import './ServicesSection.scss';

import Option from '../shared/Option/Option';
import SectionTitle from '../shared/SectionTitle/SectionTitle';

const ServicesSection = ({serviceData}) => {

	const {meta, content} = serviceData;

	const serviceItem = content.map((item, i) => {
		const {_id, ...optionProps} = item;

		return (
			<li key={_id} className="services__item">
				<Option 
					{...optionProps} 
					index={i}
				/>
			</li>
		)
	});

	return (
		<section className="services default-section">
			<div className="container">
				<SectionTitle {...meta} />

				<ul className="services__list">
					{serviceItem}
				</ul>
			</div>
		</section>
	)
}

ServicesSection.propTypes = {
	serviceData: PropTypes.shape({
		meta: PropTypes.object,
		content: PropTypes.arrayOf(PropTypes.object)
	})
}

export default ServicesSection;