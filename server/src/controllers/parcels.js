import parcel from '../models/parcels';

const parcels = (req, res) => {
  res.send(parcel);
};

export default parcels;
