import moment from "moment";

const transformConsumablesInHours = (consumables) => {
  const [timeNumber, unit] = consumables.split(" ");
  const consumablesInHours = moment.duration(timeNumber, unit).asHours();
  return consumablesInHours;
};

export const calculateStopsByDistance = (distance, velocity, consumables) => {
  const hours = distance / velocity;
  const hoursConsumable = transformConsumablesInHours(consumables);
  const stops = hours / hoursConsumable;
  return Math.floor(stops);
};
