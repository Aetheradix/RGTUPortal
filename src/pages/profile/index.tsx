import { useAuth } from '@/context/AuthContext';
import { ProfileForm } from './components/ProfileForm';
import { ProfileHeader } from './components/ProfileHeader';

const ProfilePage: React.FC = () => {
	const { user } = useAuth();

	if (!user) {
		return <div className="p-8">Please login to view profile.</div>;
	}

	return (
		<div className="min-h-screen bg-slate-50/50 p-4 md:p-8">
			<div className=" mx-auto space-y-8">
				<ProfileHeader user={user} />
				<ProfileForm user={user} />
			</div>
		</div>
	);
};

export default ProfilePage;
