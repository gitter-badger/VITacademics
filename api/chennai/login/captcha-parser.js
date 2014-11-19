/*
 *  VITacademics
 *  Copyright (C) 2014  Aneesh Neelam <neelam.aneesh@gmail.com>
 *  Copyright (C) 2014  Karthik Balakrishnan <karthikb351@gmail.com>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var parseBuffer = function (bitmapBuffer) {
    var pixelMap = getPixelMapFromBuffer(bitmapBuffer);
    // TODO Parse Captcha
    return '123456';
};

var getPixelMapFromBuffer = function (bitmapBuffer) {
    var pixelMap = [];
    var subArray = [];
    var row = 0;
    for (var i = bitmapBuffer.length - (25 * 132), r = 0; i < bitmapBuffer.length; ++i, ++r) {
        if (Math.floor(r / 132) !== row) {
            row = Math.floor(r / 132);
            pixelMap.push(subArray);
            subArray = [];
        }
        subArray.push(bitmapBuffer.readUInt8(i));
    }
    pixelMap.push(subArray);
    return pixelMap;
};

module.exports.parseBuffer = parseBuffer;
