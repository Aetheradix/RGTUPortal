import { Input, Textarea } from '@/ui/shared';
import { Button } from 'primereact/button';
import React from 'react';

interface ProfileFormProps {
	user: {
		email: string;
		name: string;
		role: string;
		joinDate: string;
	};
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Implementation for save
	};

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
			<div className="p-6 border-b border-slate-100 flex items-center justify-between">
				<div>
					<h2 className="text-xl font-bold text-slate-800">Personal Information</h2>
					<p className="text-slate-500 text-sm mt-1">Update your personal details and how others see you.</p>
				</div>
				<Button
					label="Save Changes"
					icon="pi pi-check"
					className="p-button-primary rounded-lg px-6"
					onClick={handleSubmit}
				/>
			</div>

			<form onSubmit={handleSubmit} className="p-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<Input
							label="Full Name"
							placeholder="Enter your full name"
							defaultValue={user.name}
							required
						/>

						<Input
							label="Email Address"
							type="email"
							placeholder={user.email}
							defaultValue={user.email}
							required
							disabled

							helperText="Email cannot be changed contact support."
						/>

						<Input
							label="Phone Number"
							placeholder="+91 343 000 0000"
							defaultValue="+91 343 123 4567"

						/>
					</div>

					<div className="space-y-6">
						<Input
							label="Job Title"
							placeholder={user.role}
							defaultValue={user.role}
						/>

						<Input
							label="Location"
							placeholder="City, Country"
							defaultValue="New York, USA"
						/>

						<Input
							label="Website"
							placeholder="https://example.com"
							defaultValue="https://nexusedu.com"
						/>
					</div>

					<div className="md:col-span-2">
						<Textarea
							label="Bio"
							placeholder="Tell us a little bit about yourself..."
							rows={4}
							defaultValue=""
						/>
					</div>
				</div>

				<div className="mt-10 pt-8 border-t border-slate-100 flex justify-end gap-3">
					<Button label="Discard" className="p-button-text p-button-secondary font-semibold" />
					<Button label="Save Changes" className="font-semibold px-8 rounded-lg shadow-lg shadow-blue-500/20" />
				</div>
			</form>
		</div>
	);
};
