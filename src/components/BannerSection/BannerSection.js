import React from 'react';
import PropTypes from 'prop-types';

import './BannerSection.scss';

import Button from '../shared/Button/Button';

const BannerSection = ({bannerData, isAuth, onClickHandler}) => {

	const {meta: {title, location, description}, action: {title: actionTitle}} = bannerData;

	const btnTitle = isAuth ? 'Edit' : actionTitle;

	return (
		<section className="banner default-section">
			<div className="container">
				<div className="banner__inner">
					<div className="banner__left">
						<div className="banner__content">
							<h1 className="banner__title">{title}</h1>
							<div className="banner__subtitle">{location}</div>
							<p className="banner__text">{description}</p>
							<Button 
								title={btnTitle}
								className='btn--pink'
								onClickHandler={onClickHandler}
							/>
						</div>
					</div>
					<div className="banner__right">
						<img src={require(`../../assets/images/hero.jpg`)} className="banner__img" alt="Wedding dance" />
					</div> 	
				</div>
			</div>
		</section>
	)
}

BannerSection.propTypes = {
	bannerData: PropTypes.shape({
		meta: PropTypes.shape({
			title: PropTypes.string,
			location: PropTypes.string, 
			description: PropTypes.string
		}),
		action: PropTypes.shape({
			title: PropTypes.string
		})
	}),
	isAuth: PropTypes.bool,
	onClickHandler: PropTypes.func
}

export default BannerSection;