import { Calendar, Camera, Mail, Phone } from 'lucide-react';
import React from 'react';

interface ProfileHeaderProps {
	user: {
		name: string;
		email: string;
		role: string;
		avatar?: string;
		joinDate: string;
	};
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
	return (
		<div className="relative mb-8 text-white">
			{/* Cover Image Placeholder */}
			<div className="h-48 w-full bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl"></div>

			<div className="px-8 -mt-12 flex flex-col md:flex-row items-end gap-6">
				<div className="relative group">
					<div className="w-32 h-32 rounded-2xl bg-slate-700 border-4 border-slate-900 flex items-center justify-center overflow-hidden shadow-xl">
						{user.avatar ? (
							<img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
						) : (
							<span className="text-4xl font-bold">{user.name.charAt(0)}</span>
						)}
					</div>
					<button className="absolute bottom-2 right-2 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg group-hover:scale-110">
						<Camera size={18} />
					</button>
				</div>

				<div className="flex-1 pb-2">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
						<div>
							<h1 className="text-3xl font-bold tracking-tight text-black">{user.name}</h1>
							<p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
								<span className="w-2 h-2 rounded-full bg-green-500"></span>
								{user.role}
							</p>
						</div>
						<div className="flex gap-3">
							<button className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-all text-sm font-medium">
								Change Password
							</button>
							<button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all text-sm font-medium shadow-lg shadow-blue-500/20">
								Edit Avatar
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-2">
				<div className="flex items-center gap-3 p-4  border border-slate-700/50 rounded-xl backdrop-blur-sm">
					<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
						<Mail size={20} />
					</div>
					<div>
						<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Address</p>
						<p className="text-sm font-medium text-black">{user.email}</p>
					</div>
				</div>
				<div className="flex items-center gap-3 p-4  border border-slate-700/50 rounded-xl backdrop-blur-sm">
					<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
						<Phone size={20} />
					</div>
					<div>
						<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Phone Number</p>
						<p className="text-sm font-medium text-black">+91 (555) 123-4567</p>
					</div>
				</div>
				<div className="flex items-center gap-3 p-4  border border-slate-700/50 rounded-xl backdrop-blur-sm">
					<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
						<Calendar size={20} />
					</div>
					<div>
						<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Join Date</p>
						<p className="text-sm font-medium text-black">{user.joinDate}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
