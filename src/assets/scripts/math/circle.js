import { mod } from './core';
import { radiansToDegrees, degreesToRadians } from '../utilities/unitConverters';

/**
 * 2x Pi
 *
 * @function tau
 * @return {number}
 */
export const tau = () => {
    return Math.PI * 2;
};

/**
 * Returns the angle difference between two headings
 *
 * @function angle_offset
 * @param {number} a     heading, in radians
 * @param {number} b     heading, in radians
 * @return {number}
 */
export const angle_offset = (a, b) => {
    a = radiansToDegrees(a);
    b = radiansToDegrees(b);
    let invert = false;

    if (b > a) {
        invert = true;
        const temp = a;

        a = b;
        b = temp;
    }

    let offset = mod(a - b, 360);
    if (offset > 180) {
        offset -= 360;
    }

    if (invert) {
        offset *= -1;
    }

    offset = degreesToRadians(offset);

    return offset;
};

/**
 * normalize angles to within 0° - 360°
 * @param  {number} degrees an angle
 * @return {number}         an angle within [0,360]
 */
export const degrees_normalize = (degrees) => {
    if (degrees >= 0) {
      return degrees % 360;
    }

    return 360 + (degrees % 360);
};

/**
 * normalize angles to within 0 - 2π
 * @param  {number} radians an angle
 * @return {number}         an angle within [0,2π]
 */
export const radians_normalize = (radians) => {
    if (radians >= 0) {
      return radians % (tau());
    }

    return tau() + (radians % tau());
};

/**
 * Calculate the distance between two lat/long coordinates in km
 *
 * see: http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
 * for more information on the math here
 *
 * @function distanceToPoint
 * @param startLatitude {number}
 * @param startLongitude {number}
 * @param endLatitude {number}
 * @param endLongitude {number}
 * return {number}
 */
export const distanceToPoint = (startLatitude, startLongitude, endLatitude, endLongitude) => {
    const EARTH_RADIUS_KM = 6371;
    const startLatitudeRadians = degreesToRadians(startLatitude);
    const endLatitudeRadians = degreesToRadians(endLatitude);
    const distanceLatitude = degreesToRadians(startLatitude - endLatitude);
    const distanceLongitude = degreesToRadians(startLongitude - endLongitude);

    // TODO: what is actually getting set to `a` here? and what does `a` represent?
    const a = Math.pow(Math.sin(distanceLatitude / 2), 2) +
        (Math.cos(startLatitudeRadians) * Math.cos(endLatitudeRadians) * Math.pow(Math.sin(distanceLongitude / 2), 2));
    // TODO: what is actually getting set to `c` here? and what does `c` represent?
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return c * EARTH_RADIUS_KM;
};
