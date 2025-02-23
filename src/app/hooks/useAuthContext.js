import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw Error(
			'useAuthContext must only be used inside the authcontext provider'
		);
	}
	return context;
};
