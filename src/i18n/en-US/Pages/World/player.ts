import { MessageSchema } from "src/boot/i18n";

export const enUSPlayer: MessageSchema['player'] = {
  order: {
    name: 'NAME order',
    op: 'OP order'
  },
  description: 'You can set the server\'s OP and players who can enter and leave the server',
  search: 'Enter player name in the game',
  registeredPlayer: 'Registered player',
  notRegistered: 'No players registered',
  notFound: 'No player found',
  groupList: 'Bulk registration by group ',
  join: 'Only registered player',
  changeOP: 'Change OP level',
  makeGroup: 'Make group',
  deletePlayer: 'Delete player',
  selectPlayerFromLeft: ' Select player from left',
  selectPlayer: 'Select Players',
  editGroup: 'Edit {group}',
  newGroup: 'New group',
  groupName: 'Group name',
  groupColor: 'Color',
  color: {
    dark_red: 'dark_red',
    red: 'red',
    gold: 'gold',
    yellow: 'yellow',
    dark_green: 'dark_green',
    green: 'green',
    aqua: 'aqua',
    dark_aqua: 'dark_aqua',
    dark_blue: 'dark_blue',
    blue: 'blue',
    light_purple: 'light_purple',
    dark_purple: 'dark_purple',
    white: 'white',
    gray: 'gray',
    dark_gray: 'dark_gray',
    black: 'black',
  },
  belongingGroup: 'Belonging group',
  groupMember: 'Group member',
  existGroup: '{group} already exists',
  insertGroupName: 'Insert group name',
  makeNewGroup: 'Make {group}',
  updateGroup: 'Update {group}',
  deleteGroup: 'Delete {group}',
  groupNameDuplicate: '{group} already exists',
  makeNewGroupDecide: 'Make new group {group} with selected {n} player | Make new group {group} with selected {n} players',
  updateGroupDecide: 'Update {group} with selected {n} player | Update {group} with selected {n} players',
  opLevel: 'OP level',
  noOp: 'No OP',
  addPlayer: 'Register this player',
  newPlayer: 'New player',
  failed: 'Failed to load player settings',
  select: ' Not selected | {n} player selected | {n} players selected',
  deselect: 'Deselect {n} player | Deselect {n} players',
  editPlayer: 'Editing OP level for {n} player|Editing OP level for {n} players',
  sort: 'sort',
  resetPlayerSettings: 'Reset Player settings',
};