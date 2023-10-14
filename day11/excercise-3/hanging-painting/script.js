const wallWidth = 245
const frameWidth = 175
const clinch1 = (wallWidth - frameWidth) / 2 + 10
const clinch2 = wallWidth / 2
const clinch3 = wallWidth - clinch1

console.log(clinch1, clinch2, clinch3);

const photoWidth = 4250;
const photoHeight = 2040;
const frameHeight = (frameWidth/photoWidth) * photoHeight

console.log(frameHeight);