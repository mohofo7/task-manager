export enum TASK_STATUS {
  TODO = 'ToDo',
  IN_PROGRESS = 'InProgress',
  BLOCKED = 'Blocked',
  IN_QA = 'InQA',
  DONE = 'Done',
  DEPLOYED = 'Deployed'
}

export const AVAILABLE_STATUS = {
  'ToDo': ['InProgress'],
  'InProgress': ['Blocked', 'InQA'],
  'Blocked': ['ToDo'],
  'InQA': ['ToDo', 'Done'],
  'Done': ['Deployed'],
  'Deployed': ['']
};