/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { customAlphabet } from 'nanoid';
import fetch from 'node-fetch';
import { uniqueKeyConstants, uniqueKeyInitials } from '../constants/common.js';

export const generateUniqueId = (): string => {
  const nanoid = customAlphabet(uniqueKeyConstants, 12);
  const uniqueId = `${uniqueKeyInitials}${nanoid()}`;
  return uniqueId;
};

export const getLocationFromIp = async (ip: string) => {
  try {
    const res = await fetch(
      `http://ip-api.com/json/${
        ip === '127.0.0.1' ? '49.205.39.171' : ip
      }?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,query`,
    );
    const data = await res.json();
    return data as any;
  } catch (error) {
    return {
      continent: '',
      country: '',
      city: '',
      regionName: '',
      lat: 0,
      lon: 0,
      timezone: '',
      zip: '',
    };
  }
};
