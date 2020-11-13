const configArray = {
  class: 'HistoryEnvironmentalHealth',
  name: 'vitals.name',
  customForm: false,
  fields: [
    {
      label: 'vitals.name',
      fieldType: 'header',
      formikKey: 'none_vitals',
    },
    {
      label: 'vitals.height',
      sideLabel: 'vitals.inches',
      formikKey: 'height',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'vitals.weight',
      sideLabel: 'vitals.pounds',
      formikKey: 'weight',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'vitals.bmi',
      formikKey: 'bmi',
      value: '',
      fieldType: 'input',
      validation: false
    },
    {
      label: 'vitals.temp',
      sideLabel: 'vitals.celsius',
      formikKey: 'temp',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'vitals.pulse',
      sideLabel: 'vitals.bpm',
      formikKey: 'pulse',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'vitals.respRate',
      sideLabel: 'vitals.breathspm',
      formikKey: 'respRate',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'vitals.bloodPressure.label',
      formikKey: 'bloodPressure',
      value: '',
      fieldType: 'multiInputRow',
      options: [
        {
          label: 'vitals.bloodPressure.systolic',
          value: 'Systolic'
        },
        {
          label: '/',
          textSplit: true
        },
        {
          label: 'vitals.bloodPressure.diastolic',
          value: 'Diastolic'
        }
      ],
    },
    {
      label: 'vitals.bloodOxygen',
      sideLabel: 'vitals.mmHg',
      formikKey: 'bloodOxygen',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'vitals.bloodSugar',
      sideLabel: 'vitals.mgdL',
      formikKey: 'bloodSugar',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'vitals.hemoglobinLevels',
      sideLabel: 'vitals.gdL',
      formikKey: 'hemoglobinLevels',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'vitals.pain',
      formikKey: 'painLevels',
      value: '',
      fieldType: 'input',
      validation: false
    },
  ]
};

export default configArray;
