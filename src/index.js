"use strict";

const arrGroups = [
  "FE2021-5",
  "Fe2020-2",
  "FD2021",
  "fD2022-1",
  "FE2020-3",
  "FD2020/2",
  "fe2021-3",
  "FD2020$5",
  "FE2008-52",
  "FU2008-3",
  "Fm2008-23",
  "FM2022-1",
];

function checkGroups(groups) {
const reg = /^(F[DEM]|f[dem])20\d{2}(-\d+)?$/;
  groups.forEach((group) => {
    if (reg.test(group)) {
      console.log(`Success: ${group}`);
    } else {
      console.log(`Error: ${group}`);
    }
  });
}

checkGroups(arrGroups);
