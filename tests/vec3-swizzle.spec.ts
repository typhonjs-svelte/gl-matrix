import { expect, describe, it, beforeEach } from 'vitest';
import { Vec3 } from "../src/vec3"
import "./test-utils"

describe("Vec3 Swizzles", () => {
  let v: Vec3;
  beforeEach(() => { v = new Vec3(1, 2, 3); });

  // The contents of the following section are autogenerated by scripts/gen-swizzle.js and should
  // not be modified by hand.
  // [Swizzle Autogen]


  describe("Vec3().xx", () => {
    it("should return Vec2(x, x)", () => {
      expect(v.xx).toBeVec(v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xy", () => {
    it("should return Vec2(x, y)", () => {
      expect(v.xy).toBeVec(v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xz", () => {
    it("should return Vec2(x, z)", () => {
      expect(v.xz).toBeVec(v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yx", () => {
    it("should return Vec2(y, x)", () => {
      expect(v.yx).toBeVec(v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yy", () => {
    it("should return Vec2(y, y)", () => {
      expect(v.yy).toBeVec(v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yz", () => {
    it("should return Vec2(y, z)", () => {
      expect(v.yz).toBeVec(v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zx", () => {
    it("should return Vec2(z, x)", () => {
      expect(v.zx).toBeVec(v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zy", () => {
    it("should return Vec2(z, y)", () => {
      expect(v.zy).toBeVec(v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zz", () => {
    it("should return Vec2(z, z)", () => {
      expect(v.zz).toBeVec(v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxx", () => {
    it("should return Vec3(x, x, x)", () => {
      expect(v.xxx).toBeVec(v[0], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxy", () => {
    it("should return Vec3(x, x, y)", () => {
      expect(v.xxy).toBeVec(v[0], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxz", () => {
    it("should return Vec3(x, x, z)", () => {
      expect(v.xxz).toBeVec(v[0], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyx", () => {
    it("should return Vec3(x, y, x)", () => {
      expect(v.xyx).toBeVec(v[0], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyy", () => {
    it("should return Vec3(x, y, y)", () => {
      expect(v.xyy).toBeVec(v[0], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyz", () => {
    it("should return Vec3(x, y, z)", () => {
      expect(v.xyz).toBeVec(v[0], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzx", () => {
    it("should return Vec3(x, z, x)", () => {
      expect(v.xzx).toBeVec(v[0], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzy", () => {
    it("should return Vec3(x, z, y)", () => {
      expect(v.xzy).toBeVec(v[0], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzz", () => {
    it("should return Vec3(x, z, z)", () => {
      expect(v.xzz).toBeVec(v[0], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxx", () => {
    it("should return Vec3(y, x, x)", () => {
      expect(v.yxx).toBeVec(v[1], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxy", () => {
    it("should return Vec3(y, x, y)", () => {
      expect(v.yxy).toBeVec(v[1], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxz", () => {
    it("should return Vec3(y, x, z)", () => {
      expect(v.yxz).toBeVec(v[1], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyx", () => {
    it("should return Vec3(y, y, x)", () => {
      expect(v.yyx).toBeVec(v[1], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyy", () => {
    it("should return Vec3(y, y, y)", () => {
      expect(v.yyy).toBeVec(v[1], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyz", () => {
    it("should return Vec3(y, y, z)", () => {
      expect(v.yyz).toBeVec(v[1], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzx", () => {
    it("should return Vec3(y, z, x)", () => {
      expect(v.yzx).toBeVec(v[1], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzy", () => {
    it("should return Vec3(y, z, y)", () => {
      expect(v.yzy).toBeVec(v[1], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzz", () => {
    it("should return Vec3(y, z, z)", () => {
      expect(v.yzz).toBeVec(v[1], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxx", () => {
    it("should return Vec3(z, x, x)", () => {
      expect(v.zxx).toBeVec(v[2], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxy", () => {
    it("should return Vec3(z, x, y)", () => {
      expect(v.zxy).toBeVec(v[2], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxz", () => {
    it("should return Vec3(z, x, z)", () => {
      expect(v.zxz).toBeVec(v[2], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyx", () => {
    it("should return Vec3(z, y, x)", () => {
      expect(v.zyx).toBeVec(v[2], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyy", () => {
    it("should return Vec3(z, y, y)", () => {
      expect(v.zyy).toBeVec(v[2], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyz", () => {
    it("should return Vec3(z, y, z)", () => {
      expect(v.zyz).toBeVec(v[2], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzx", () => {
    it("should return Vec3(z, z, x)", () => {
      expect(v.zzx).toBeVec(v[2], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzy", () => {
    it("should return Vec3(z, z, y)", () => {
      expect(v.zzy).toBeVec(v[2], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzz", () => {
    it("should return Vec3(z, z, z)", () => {
      expect(v.zzz).toBeVec(v[2], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxxx", () => {
    it("should return Vec4(x, x, x, x)", () => {
      expect(v.xxxx).toBeVec(v[0], v[0], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xxxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxxy", () => {
    it("should return Vec4(x, x, x, y)", () => {
      expect(v.xxxy).toBeVec(v[0], v[0], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xxxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxxz", () => {
    it("should return Vec4(x, x, x, z)", () => {
      expect(v.xxxz).toBeVec(v[0], v[0], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xxxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxyx", () => {
    it("should return Vec4(x, x, y, x)", () => {
      expect(v.xxyx).toBeVec(v[0], v[0], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xxyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxyy", () => {
    it("should return Vec4(x, x, y, y)", () => {
      expect(v.xxyy).toBeVec(v[0], v[0], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xxyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxyz", () => {
    it("should return Vec4(x, x, y, z)", () => {
      expect(v.xxyz).toBeVec(v[0], v[0], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xxyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxzx", () => {
    it("should return Vec4(x, x, z, x)", () => {
      expect(v.xxzx).toBeVec(v[0], v[0], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xxzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxzy", () => {
    it("should return Vec4(x, x, z, y)", () => {
      expect(v.xxzy).toBeVec(v[0], v[0], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xxzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xxzz", () => {
    it("should return Vec4(x, x, z, z)", () => {
      expect(v.xxzz).toBeVec(v[0], v[0], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xxzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyxx", () => {
    it("should return Vec4(x, y, x, x)", () => {
      expect(v.xyxx).toBeVec(v[0], v[1], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xyxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyxy", () => {
    it("should return Vec4(x, y, x, y)", () => {
      expect(v.xyxy).toBeVec(v[0], v[1], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xyxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyxz", () => {
    it("should return Vec4(x, y, x, z)", () => {
      expect(v.xyxz).toBeVec(v[0], v[1], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xyxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyyx", () => {
    it("should return Vec4(x, y, y, x)", () => {
      expect(v.xyyx).toBeVec(v[0], v[1], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xyyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyyy", () => {
    it("should return Vec4(x, y, y, y)", () => {
      expect(v.xyyy).toBeVec(v[0], v[1], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xyyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyyz", () => {
    it("should return Vec4(x, y, y, z)", () => {
      expect(v.xyyz).toBeVec(v[0], v[1], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xyyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyzx", () => {
    it("should return Vec4(x, y, z, x)", () => {
      expect(v.xyzx).toBeVec(v[0], v[1], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xyzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyzy", () => {
    it("should return Vec4(x, y, z, y)", () => {
      expect(v.xyzy).toBeVec(v[0], v[1], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xyzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xyzz", () => {
    it("should return Vec4(x, y, z, z)", () => {
      expect(v.xyzz).toBeVec(v[0], v[1], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xyzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzxx", () => {
    it("should return Vec4(x, z, x, x)", () => {
      expect(v.xzxx).toBeVec(v[0], v[2], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xzxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzxy", () => {
    it("should return Vec4(x, z, x, y)", () => {
      expect(v.xzxy).toBeVec(v[0], v[2], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xzxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzxz", () => {
    it("should return Vec4(x, z, x, z)", () => {
      expect(v.xzxz).toBeVec(v[0], v[2], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xzxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzyx", () => {
    it("should return Vec4(x, z, y, x)", () => {
      expect(v.xzyx).toBeVec(v[0], v[2], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xzyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzyy", () => {
    it("should return Vec4(x, z, y, y)", () => {
      expect(v.xzyy).toBeVec(v[0], v[2], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xzyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzyz", () => {
    it("should return Vec4(x, z, y, z)", () => {
      expect(v.xzyz).toBeVec(v[0], v[2], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xzyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzzx", () => {
    it("should return Vec4(x, z, z, x)", () => {
      expect(v.xzzx).toBeVec(v[0], v[2], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.xzzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzzy", () => {
    it("should return Vec4(x, z, z, y)", () => {
      expect(v.xzzy).toBeVec(v[0], v[2], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.xzzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().xzzz", () => {
    it("should return Vec4(x, z, z, z)", () => {
      expect(v.xzzz).toBeVec(v[0], v[2], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.xzzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxxx", () => {
    it("should return Vec4(y, x, x, x)", () => {
      expect(v.yxxx).toBeVec(v[1], v[0], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yxxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxxy", () => {
    it("should return Vec4(y, x, x, y)", () => {
      expect(v.yxxy).toBeVec(v[1], v[0], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yxxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxxz", () => {
    it("should return Vec4(y, x, x, z)", () => {
      expect(v.yxxz).toBeVec(v[1], v[0], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yxxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxyx", () => {
    it("should return Vec4(y, x, y, x)", () => {
      expect(v.yxyx).toBeVec(v[1], v[0], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yxyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxyy", () => {
    it("should return Vec4(y, x, y, y)", () => {
      expect(v.yxyy).toBeVec(v[1], v[0], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yxyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxyz", () => {
    it("should return Vec4(y, x, y, z)", () => {
      expect(v.yxyz).toBeVec(v[1], v[0], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yxyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxzx", () => {
    it("should return Vec4(y, x, z, x)", () => {
      expect(v.yxzx).toBeVec(v[1], v[0], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yxzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxzy", () => {
    it("should return Vec4(y, x, z, y)", () => {
      expect(v.yxzy).toBeVec(v[1], v[0], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yxzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yxzz", () => {
    it("should return Vec4(y, x, z, z)", () => {
      expect(v.yxzz).toBeVec(v[1], v[0], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yxzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyxx", () => {
    it("should return Vec4(y, y, x, x)", () => {
      expect(v.yyxx).toBeVec(v[1], v[1], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yyxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyxy", () => {
    it("should return Vec4(y, y, x, y)", () => {
      expect(v.yyxy).toBeVec(v[1], v[1], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yyxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyxz", () => {
    it("should return Vec4(y, y, x, z)", () => {
      expect(v.yyxz).toBeVec(v[1], v[1], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yyxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyyx", () => {
    it("should return Vec4(y, y, y, x)", () => {
      expect(v.yyyx).toBeVec(v[1], v[1], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yyyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyyy", () => {
    it("should return Vec4(y, y, y, y)", () => {
      expect(v.yyyy).toBeVec(v[1], v[1], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yyyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyyz", () => {
    it("should return Vec4(y, y, y, z)", () => {
      expect(v.yyyz).toBeVec(v[1], v[1], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yyyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyzx", () => {
    it("should return Vec4(y, y, z, x)", () => {
      expect(v.yyzx).toBeVec(v[1], v[1], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yyzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyzy", () => {
    it("should return Vec4(y, y, z, y)", () => {
      expect(v.yyzy).toBeVec(v[1], v[1], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yyzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yyzz", () => {
    it("should return Vec4(y, y, z, z)", () => {
      expect(v.yyzz).toBeVec(v[1], v[1], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yyzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzxx", () => {
    it("should return Vec4(y, z, x, x)", () => {
      expect(v.yzxx).toBeVec(v[1], v[2], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yzxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzxy", () => {
    it("should return Vec4(y, z, x, y)", () => {
      expect(v.yzxy).toBeVec(v[1], v[2], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yzxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzxz", () => {
    it("should return Vec4(y, z, x, z)", () => {
      expect(v.yzxz).toBeVec(v[1], v[2], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yzxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzyx", () => {
    it("should return Vec4(y, z, y, x)", () => {
      expect(v.yzyx).toBeVec(v[1], v[2], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yzyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzyy", () => {
    it("should return Vec4(y, z, y, y)", () => {
      expect(v.yzyy).toBeVec(v[1], v[2], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yzyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzyz", () => {
    it("should return Vec4(y, z, y, z)", () => {
      expect(v.yzyz).toBeVec(v[1], v[2], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yzyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzzx", () => {
    it("should return Vec4(y, z, z, x)", () => {
      expect(v.yzzx).toBeVec(v[1], v[2], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.yzzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzzy", () => {
    it("should return Vec4(y, z, z, y)", () => {
      expect(v.yzzy).toBeVec(v[1], v[2], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.yzzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().yzzz", () => {
    it("should return Vec4(y, z, z, z)", () => {
      expect(v.yzzz).toBeVec(v[1], v[2], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.yzzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxxx", () => {
    it("should return Vec4(z, x, x, x)", () => {
      expect(v.zxxx).toBeVec(v[2], v[0], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zxxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxxy", () => {
    it("should return Vec4(z, x, x, y)", () => {
      expect(v.zxxy).toBeVec(v[2], v[0], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zxxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxxz", () => {
    it("should return Vec4(z, x, x, z)", () => {
      expect(v.zxxz).toBeVec(v[2], v[0], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zxxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxyx", () => {
    it("should return Vec4(z, x, y, x)", () => {
      expect(v.zxyx).toBeVec(v[2], v[0], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zxyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxyy", () => {
    it("should return Vec4(z, x, y, y)", () => {
      expect(v.zxyy).toBeVec(v[2], v[0], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zxyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxyz", () => {
    it("should return Vec4(z, x, y, z)", () => {
      expect(v.zxyz).toBeVec(v[2], v[0], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zxyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxzx", () => {
    it("should return Vec4(z, x, z, x)", () => {
      expect(v.zxzx).toBeVec(v[2], v[0], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zxzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxzy", () => {
    it("should return Vec4(z, x, z, y)", () => {
      expect(v.zxzy).toBeVec(v[2], v[0], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zxzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zxzz", () => {
    it("should return Vec4(z, x, z, z)", () => {
      expect(v.zxzz).toBeVec(v[2], v[0], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zxzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyxx", () => {
    it("should return Vec4(z, y, x, x)", () => {
      expect(v.zyxx).toBeVec(v[2], v[1], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zyxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyxy", () => {
    it("should return Vec4(z, y, x, y)", () => {
      expect(v.zyxy).toBeVec(v[2], v[1], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zyxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyxz", () => {
    it("should return Vec4(z, y, x, z)", () => {
      expect(v.zyxz).toBeVec(v[2], v[1], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zyxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyyx", () => {
    it("should return Vec4(z, y, y, x)", () => {
      expect(v.zyyx).toBeVec(v[2], v[1], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zyyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyyy", () => {
    it("should return Vec4(z, y, y, y)", () => {
      expect(v.zyyy).toBeVec(v[2], v[1], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zyyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyyz", () => {
    it("should return Vec4(z, y, y, z)", () => {
      expect(v.zyyz).toBeVec(v[2], v[1], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zyyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyzx", () => {
    it("should return Vec4(z, y, z, x)", () => {
      expect(v.zyzx).toBeVec(v[2], v[1], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zyzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyzy", () => {
    it("should return Vec4(z, y, z, y)", () => {
      expect(v.zyzy).toBeVec(v[2], v[1], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zyzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zyzz", () => {
    it("should return Vec4(z, y, z, z)", () => {
      expect(v.zyzz).toBeVec(v[2], v[1], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zyzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzxx", () => {
    it("should return Vec4(z, z, x, x)", () => {
      expect(v.zzxx).toBeVec(v[2], v[2], v[0], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zzxx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzxy", () => {
    it("should return Vec4(z, z, x, y)", () => {
      expect(v.zzxy).toBeVec(v[2], v[2], v[0], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zzxy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzxz", () => {
    it("should return Vec4(z, z, x, z)", () => {
      expect(v.zzxz).toBeVec(v[2], v[2], v[0], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zzxz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzyx", () => {
    it("should return Vec4(z, z, y, x)", () => {
      expect(v.zzyx).toBeVec(v[2], v[2], v[1], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zzyx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzyy", () => {
    it("should return Vec4(z, z, y, y)", () => {
      expect(v.zzyy).toBeVec(v[2], v[2], v[1], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zzyy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzyz", () => {
    it("should return Vec4(z, z, y, z)", () => {
      expect(v.zzyz).toBeVec(v[2], v[2], v[1], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zzyz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzzx", () => {
    it("should return Vec4(z, z, z, x)", () => {
      expect(v.zzzx).toBeVec(v[2], v[2], v[2], v[0]);
    });
    it("should be return a copy", () => {
      let sw = v.zzzx;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzzy", () => {
    it("should return Vec4(z, z, z, y)", () => {
      expect(v.zzzy).toBeVec(v[2], v[2], v[2], v[1]);
    });
    it("should be return a copy", () => {
      let sw = v.zzzy;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  describe("Vec3().zzzz", () => {
    it("should return Vec4(z, z, z, z)", () => {
      expect(v.zzzz).toBeVec(v[2], v[2], v[2], v[2]);
    });
    it("should be return a copy", () => {
      let sw = v.zzzz;
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    
  // [/Swizzle Autogen]
});