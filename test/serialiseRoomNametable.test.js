import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import serialiseRoomNametable from '../src/lib/serialiser/room/serialiseRoomNametable.js';
import parseRoomNametable from '../src/lib/parser/room/parseRoomNametable.js';

const roomNametable = {
  tileset: 187,
  palette: [
    114, 133, 23, 173, 185, 114, 141, 63, 109, 172, 188, 114, 230, 23, 230, 23,
  ],
  nametableObj: [
    [
      0, 0, 1, 1, 98, 1, 99, 1, 100, 101, 101, 101, 99, 100, 101, 101, 101, 101,
      99, 100, 101, 101, 101, 101, 101, 101, 101, 101, 101, 99, 101, 101, 101,
      101, 101, 99, 100, 101, 101, 101, 1, 99, 116, 1, 1, 1, 1, 1, 98, 1, 1, 1,
      1, 1, 116, 1, 1, 116, 1, 1, 1, 1, 0, 0,
    ],
    [
      0, 0, 1, 98, 98, 1, 99, 1, 100, 102, 103, 104, 99, 102, 103, 104, 101,
      102, 99, 104, 105, 106, 106, 106, 106, 106, 106, 107, 102, 99, 104, 101,
      102, 103, 104, 99, 102, 103, 104, 101, 1, 99, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 98, 1, 1, 98, 1, 1, 98, 116, 0, 0,
    ],
    [
      0, 0, 1, 1, 1, 1, 99, 1, 100, 108, 1, 109, 99, 108, 1, 109, 101, 108, 99,
      109, 110, 54, 57, 55, 54, 57, 55, 111, 108, 99, 109, 101, 108, 1, 109, 99,
      108, 1, 109, 101, 1, 99, 1, 1, 1, 116, 1, 1, 98, 1, 1, 116, 1, 1, 1, 1,
      116, 1, 1, 116, 1, 1, 0, 0,
    ],
    [
      0, 0, 98, 1, 1, 1, 99, 1, 100, 112, 113, 114, 99, 112, 113, 114, 101, 112,
      99, 114, 110, 62, 115, 64, 59, 115, 60, 111, 112, 99, 180, 101, 112, 181,
      180, 99, 112, 181, 180, 101, 1, 99, 98, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
    ],
    [
      0, 0, 1, 98, 1, 116, 99, 1, 100, 108, 1, 109, 99, 108, 1, 109, 101, 108,
      99, 109, 110, 59, 61, 64, 59, 61, 64, 111, 108, 99, 109, 101, 108, 1, 109,
      99, 108, 1, 109, 101, 1, 99, 1, 1, 1, 98, 1, 116, 1, 1, 1, 98, 1, 1, 1, 1,
      98, 1, 116, 1, 1, 1, 0, 0,
    ],
    [
      0, 0, 1, 1, 1, 1, 99, 1, 100, 117, 118, 119, 99, 117, 118, 119, 101, 117,
      99, 119, 110, 59, 61, 64, 59, 61, 64, 120, 117, 99, 119, 101, 117, 118,
      119, 99, 117, 118, 119, 101, 1, 99, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 116,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
    ],
    [
      0, 0, 98, 1, 1, 121, 122, 123, 124, 125, 125, 125, 122, 124, 125, 125,
      125, 125, 122, 100, 110, 59, 61, 73, 73, 61, 64, 111, 101, 122, 125, 125,
      125, 125, 125, 122, 125, 125, 125, 125, 123, 122, 182, 1, 1, 1, 116, 98,
      1, 1, 1, 98, 1, 1, 1, 1, 1, 1, 1, 1, 98, 1, 0, 0,
    ],
    [
      0, 0, 1, 116, 1, 126, 99, 1, 127, 100, 127, 100, 127, 100, 127, 100, 127,
      100, 127, 100, 110, 59, 61, 64, 59, 61, 64, 111, 101, 127, 100, 127, 100,
      127, 100, 127, 100, 127, 100, 127, 1, 99, 126, 1, 116, 1, 1, 1, 116, 1,
      183, 98, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 0, 0,
    ],
    [
      0, 0, 1, 1, 1, 128, 99, 1, 129, 100, 129, 100, 129, 100, 129, 100, 129,
      100, 129, 100, 110, 62, 61, 64, 59, 61, 60, 111, 101, 129, 100, 129, 100,
      129, 100, 129, 100, 129, 100, 129, 1, 99, 128, 1, 98, 1, 1, 98, 1, 1, 184,
      185, 184, 184, 186, 184, 184, 186, 186, 186, 186, 186, 0, 0,
    ],
    [
      0, 0, 98, 1, 1, 130, 130, 131, 130, 132, 130, 132, 130, 132, 130, 132,
      130, 132, 130, 100, 110, 65, 67, 68, 65, 67, 68, 111, 101, 130, 132, 187,
      132, 187, 132, 187, 132, 187, 132, 187, 131, 187, 187, 1, 196, 197, 1,
      196, 197, 1, 196, 197, 188, 188, 189, 188, 188, 189, 189, 189, 189, 189,
      0, 0,
    ],
    [
      0, 0, 133, 134, 135, 1, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136,
      136, 136, 136, 137, 132, 138, 138, 138, 138, 138, 138, 132, 139, 136, 190,
      190, 190, 190, 190, 190, 190, 190, 190, 190, 190, 190, 1, 1, 199, 199, 1,
      199, 199, 1, 199, 199, 189, 189, 189, 189, 191, 192, 189, 189, 189, 189,
      0, 0,
    ],
    [
      0, 0, 140, 141, 142, 1, 143, 143, 143, 143, 143, 143, 143, 143, 144, 144,
      144, 144, 145, 146, 147, 147, 147, 147, 147, 147, 147, 147, 148, 145, 206,
      206, 206, 206, 143, 143, 143, 143, 143, 143, 143, 143, 1, 98, 191, 192, 1,
      191, 192, 1, 191, 192, 188, 189, 189, 189, 189, 189, 188, 189, 189, 189,
      0, 0,
    ],
    [
      0, 0, 1, 149, 1, 1, 143, 143, 143, 143, 143, 143, 150, 150, 151, 152, 151,
      152, 153, 154, 155, 155, 155, 155, 155, 155, 155, 155, 156, 157, 151, 207,
      151, 207, 143, 143, 143, 143, 143, 143, 143, 143, 193, 193, 193, 193, 193,
      193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193,
      0, 0,
    ],
    [
      0, 0, 158, 159, 158, 158, 144, 144, 144, 144, 144, 144, 144, 144, 160,
      161, 160, 161, 130, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 130,
      160, 209, 160, 209, 194, 194, 194, 194, 194, 194, 194, 194, 61, 61, 61,
      61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 0, 0,
    ],
    [
      0, 0, 61, 162, 61, 61, 163, 164, 164, 165, 61, 61, 61, 61, 61, 61, 61, 61,
      61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 198, 61, 61, 61,
      61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61,
      61, 61, 61, 61, 61, 61, 61, 61, 0, 0,
    ],
    [
      0, 0, 61, 162, 61, 61, 166, 167, 168, 167, 61, 61, 61, 61, 61, 61, 61, 61,
      61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61,
      61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61,
      61, 61, 61, 61, 61, 61, 61, 61, 0, 0,
    ],
  ],
};

describe('serialiseRoomNametable', () => {
  it('should return an instance of ArrayBuffer.', () => {
    const buffer = serialiseRoomNametable(roomNametable);
    assert.ok(buffer instanceof ArrayBuffer);
  });

  it('should serialise a room gfx nametable.', () => {
    const buffer = serialiseRoomNametable(roomNametable);
    const view = new DataView(buffer);

    assert.equal(view.getUint8(0x00), 187);
    assert.equal(view.getUint8(0x01), 114);
    assert.equal(view.getUint8(0x05), 185);
    assert.equal(view.getUint8(0x09), 109);
    assert.equal(view.getUint8(0x0d), 230);
  });

  it('should be the inverse of parseRoomNametable.', () => {
    const buffer = serialiseRoomNametable(roomNametable);
    const { nametable } = parseRoomNametable(buffer, 0, 60);

    assert.deepEqual(roomNametable, nametable);
  });
});
