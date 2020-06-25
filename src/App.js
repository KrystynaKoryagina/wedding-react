import React, {useState, useEffect} from 'react';

import {SECTION_TYPE} from './constants';
import {authService} from './services/authService';
import {sectionDataService} from './services/sectionDataService';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Preloader from './components/shared/Preloader/Preloader';
import Header from './components/Header/Header';
import BannerSection from './components/BannerSection/BannerSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import OfferSection from './components/OfferSection/OfferSection';
import CoachesSection from './components/CoachesSection/CoachesSection';
import Footer from './components/Footer/Footer';
import Modal from './components/shared/Modal/Modal';
import AuthForm from './components/shared/AuthForm/AuthForm';
import EditForm from './components/shared/EditForm/EditForm';

const App = () => {
	const [sectionsData, setData] = useState([]);
	const [isShowModal, setModal] = useState(false);
	const [isAuth, setAuth] = useState(false);

	const getAllSectionsData = () => {
		sectionDataService.getAllSection()
			.then(data => {
				setData(data)
			})
	}
	
	const getSectionDataByType = (sectionType) => {
		return sectionsData.find(item => item.type === sectionType);
	}

	const onModalHandler = () => setModal(!isShowModal);

	const setUserAuth = () => {
		if(authService.isAuth()) {
			setAuth(true);		
		} else {
			setAuth(false);	
		}
	}

	useEffect(() => {
		getAllSectionsData();
		setUserAuth();
	}, []);

	useEffect(() => {
		setUserAuth();
	}, [isAuth]);

  return (
		sectionsData.length
			?	<div className="wrapper">
					<ReactNotification />
					<Header 
						headerData={getSectionDataByType(SECTION_TYPE.header)}
						onModalHandler={onModalHandler}
						isAuth={isAuth}
						setUserAuth={setUserAuth}
					/>
					<BannerSection 
						bannerData={getSectionDataByType(SECTION_TYPE.banner)}
						isAuth={isAuth}
						onClickHandler={onModalHandler}
					/>
					<ServicesSection serviceData={getSectionDataByType(SECTION_TYPE.services)} />
					<OfferSection offerData={getSectionDataByType(SECTION_TYPE.offer)} />
					<CoachesSection coachesData={getSectionDataByType(SECTION_TYPE.coaches)} />
					<Footer />
					<Modal isShow={isShowModal}> 
						{
						isAuth 
								? <EditForm 
										bannerData={getSectionDataByType(SECTION_TYPE.banner)}
										onModalHandler={onModalHandler}
										updateData={getAllSectionsData}
									/>
								: <AuthForm 
										onModalHandler={onModalHandler}
										setUserAuth={setUserAuth}
									/>
						}
					</Modal>
				</div>
			: <Preloader />
  )
}

export default App;
