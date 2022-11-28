import { expect, describe, it, beforeEach } from 'vitest';
import { Vec2 } from "../src/vec2"
import "./test-utils"

describe("Vec2 Swizzles", () => {
  let v: Vec2;
  beforeEach(() => { v = new Vec2(1, 2); });

  // The contents of the following section are autogenerated by scripts/gen-swizzle.js and should
  // not be modified by hand.
  // [Swizzle Autogen]


  describe("Vec2().xx", () => {
    it("should return Vec2(x, x)", () => {
      expect(v.xx).toBeVec(v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xy", () => {
    it("should return Vec2(x, y)", () => {
      expect(v.xy).toBeVec(v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yx", () => {
    it("should return Vec2(y, x)", () => {
      expect(v.yx).toBeVec(v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yy", () => {
    it("should return Vec2(y, y)", () => {
      expect(v.yy).toBeVec(v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xxx", () => {
    it("should return Vec3(x, x, x)", () => {
      expect(v.xxx).toBeVec(v[0], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xxy", () => {
    it("should return Vec3(x, x, y)", () => {
      expect(v.xxy).toBeVec(v[0], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xyx", () => {
    it("should return Vec3(x, y, x)", () => {
      expect(v.xyx).toBeVec(v[0], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xyy", () => {
    it("should return Vec3(x, y, y)", () => {
      expect(v.xyy).toBeVec(v[0], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yxx", () => {
    it("should return Vec3(y, x, x)", () => {
      expect(v.yxx).toBeVec(v[1], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yxy", () => {
    it("should return Vec3(y, x, y)", () => {
      expect(v.yxy).toBeVec(v[1], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yyx", () => {
    it("should return Vec3(y, y, x)", () => {
      expect(v.yyx).toBeVec(v[1], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yyy", () => {
    it("should return Vec3(y, y, y)", () => {
      expect(v.yyy).toBeVec(v[1], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xxxx", () => {
    it("should return Vec4(x, x, x, x)", () => {
      expect(v.xxxx).toBeVec(v[0], v[0], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xxxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xxxy", () => {
    it("should return Vec4(x, x, x, y)", () => {
      expect(v.xxxy).toBeVec(v[0], v[0], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xxxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xxyx", () => {
    it("should return Vec4(x, x, y, x)", () => {
      expect(v.xxyx).toBeVec(v[0], v[0], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xxyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xxyy", () => {
    it("should return Vec4(x, x, y, y)", () => {
      expect(v.xxyy).toBeVec(v[0], v[0], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xxyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xyxx", () => {
    it("should return Vec4(x, y, x, x)", () => {
      expect(v.xyxx).toBeVec(v[0], v[1], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xyxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xyxy", () => {
    it("should return Vec4(x, y, x, y)", () => {
      expect(v.xyxy).toBeVec(v[0], v[1], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xyxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xyyx", () => {
    it("should return Vec4(x, y, y, x)", () => {
      expect(v.xyyx).toBeVec(v[0], v[1], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xyyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().xyyy", () => {
    it("should return Vec4(x, y, y, y)", () => {
      expect(v.xyyy).toBeVec(v[0], v[1], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xyyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yxxx", () => {
    it("should return Vec4(y, x, x, x)", () => {
      expect(v.yxxx).toBeVec(v[1], v[0], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yxxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yxxy", () => {
    it("should return Vec4(y, x, x, y)", () => {
      expect(v.yxxy).toBeVec(v[1], v[0], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yxxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yxyx", () => {
    it("should return Vec4(y, x, y, x)", () => {
      expect(v.yxyx).toBeVec(v[1], v[0], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yxyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yxyy", () => {
    it("should return Vec4(y, x, y, y)", () => {
      expect(v.yxyy).toBeVec(v[1], v[0], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yxyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yyxx", () => {
    it("should return Vec4(y, y, x, x)", () => {
      expect(v.yyxx).toBeVec(v[1], v[1], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yyxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yyxy", () => {
    it("should return Vec4(y, y, x, y)", () => {
      expect(v.yyxy).toBeVec(v[1], v[1], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yyxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yyyx", () => {
    it("should return Vec4(y, y, y, x)", () => {
      expect(v.yyyx).toBeVec(v[1], v[1], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yyyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec2().yyyy", () => {
    it("should return Vec4(y, y, y, y)", () => {
      expect(v.yyyy).toBeVec(v[1], v[1], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yyyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  // [/Swizzle Autogen]
});