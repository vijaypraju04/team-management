import { DisplayTeamMember, TeamMember } from "./types"

export const selectTeamMembersForCard = (teamMembers: TeamMember[]): DisplayTeamMember[] => {
    return teamMembers.map(({first_name, last_name, phone_number, email, id, role }) => ({
        fullName: `${first_name} ${last_name}`,
        phoneNumber: phone_number,
        isAdmin: role === 'Admin',
        email,
        id
    }))
}