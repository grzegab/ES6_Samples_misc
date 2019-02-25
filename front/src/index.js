import { Nurse, HospitalEmployee } from './hospital/sample_es6_to_es5';
import { team } from './game/sample_object';

const nurseOlynyk = new HospitalEmployee('Olynyk', ['Trauma','Pediatrics']);
let nurseDurant = new HospitalEmployee('Durant', ['Orthopedics']);


nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

