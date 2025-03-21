module.exports = { displayName, userName, userId, randomColor };

function displayName(interaction) {
  return interaction.user.globalName;
} // display name
function userName(interaction) {
  return interaction.user.username;
} // username
function userId(interaction) {
  return interaction.user.id
} // user id
function randomColor() {
  const color = [
'#00FFFF', '#00FF00', '#FF00FF', '#FFFF00', '#FFA500', '#007FFF', '#FF1493', '#BF00FF', '#FF4500', '#40E0D0', '#00FF7F'
];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  return randomColor;
} // random color