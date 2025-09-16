import { ColorBlobConfig } from '../components/ColorBlobs/ColorBlobs';

export const DEFAULT_COLOR_BLOBS: ColorBlobConfig[] = [
  {
    id: '1',
    colorClass: 'colorBlob--purple',
    shapeClass: 'colorBlob--shape1',
    positionClass: 'colorBlob--pos1',
  },
  {
    id: '2',
    colorClass: 'colorBlob--green',
    shapeClass: 'colorBlob--shape2',
    positionClass: 'colorBlob--pos2',
  },
  {
    id: '3',
    colorClass: 'colorBlob--blue',
    shapeClass: 'colorBlob--shape3',
    positionClass: 'colorBlob--pos3',
  },
  {
    id: '4',
    colorClass: 'colorBlob--orange',
    shapeClass: 'colorBlob--shape4',
    positionClass: 'colorBlob--pos4',
  },
  {
    id: '5',
    colorClass: 'colorBlob--pink',
    shapeClass: 'colorBlob--shape5',
    positionClass: 'colorBlob--pos5',
  },
];

export const MAIN_CONTENT_BLOBS: ColorBlobConfig[] = [
  {
    id: 'mc1',
    colorClass: 'colorBlob--purple',
    shapeClass: 'colorBlob--shape1',
    positionClass: 'colorBlob--pos1',
    customStyle: {
      top: '5%',
      left: '-10%',
      width: '400px',
      height: '500px',
      opacity: 0.25,
    },
  },
  {
    id: 'mc2',
    colorClass: 'colorBlob--cyan',
    shapeClass: 'colorBlob--shape2',
    positionClass: 'colorBlob--pos2',
    customStyle: {
      top: '20%',
      right: '-15%',
      width: '350px',
      height: '450px',
      opacity: 0.3,
    },
  },
  {
    id: 'mc3',
    colorClass: 'colorBlob--blue',
    shapeClass: 'colorBlob--shape3',
    positionClass: 'colorBlob--pos3',
    customStyle: {
      bottom: '25%',
      left: '-8%',
      width: '500px',
      height: '400px',
      opacity: 0.2,
    },
  },
  {
    id: 'mc4',
    colorClass: 'colorBlob--orange',
    shapeClass: 'colorBlob--shape4',
    positionClass: 'colorBlob--pos4',
    customStyle: {
      bottom: '10%',
      right: '-12%',
      width: '380px',
      height: '480px',
      opacity: 0.35,
    },
  },
  {
    id: 'mc5',
    colorClass: 'colorBlob--pink',
    shapeClass: 'colorBlob--shape5',
    positionClass: 'colorBlob--pos5',
    customStyle: {
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '350px',
      opacity: 0.15,
    },
  },
  {
    id: 'mc6',
    colorClass: 'colorBlob--green',
    shapeClass: 'colorBlob--shape1',
    positionClass: 'colorBlob--pos1',
    customStyle: {
      top: '75%',
      left: '-5%',
      width: '450px',
      height: '380px',
      opacity: 0.25,
    },
  },
  {
    id: 'mc7',
    colorClass: 'colorBlob--yellow',
    shapeClass: 'colorBlob--shape2',
    positionClass: 'colorBlob--pos2',
    customStyle: {
      top: '45%',
      right: '-8%',
      width: '320px',
      height: '420px',
      opacity: 0.3,
    },
  },
  {
    id: 'mc8',
    colorClass: 'colorBlob--red',
    shapeClass: 'colorBlob--shape3',
    positionClass: 'colorBlob--pos3',
    customStyle: {
      bottom: '5%',
      left: '45%',
      width: '280px',
      height: '320px',
      opacity: 0.2,
    },
  },
];
