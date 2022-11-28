import { Vec2 } from './vec2.js';
import { Vec3 } from './vec3.js';


/**
 * A 4 dimensional vector given as a {@link Vec4}, a 4-element Float32Array, or
 * an array of 4 numbers.
 */
export type Vec4Like = [number, number, number, number] | Float32Array;

 /**
  * 4 Dimensional Vector
  */
export class Vec4 extends Float32Array {
  /**
  * The number of bytes in a {@link Vec4}.
  */
  static readonly BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;

  /**
  * Create a {@link Vec4}.
  */
  constructor(...values: [Readonly<Vec4Like>, number?] | number[]) {
    switch(values.length) {
      case 4:
        super(values); break;
      case 2:
      case 1:
        super(values[0] as ArrayBufferLike, values[1] ?? 0, 4); break;
      default:
        super(4); break;
    }
  }

  //============
  // Attributes
  //============

  // Getters to make component access read better.
  // These are likely to be a little bit slower than direct array access.

  /**
  * The x component of the vector. Equivalent to `this[0];`
  */
  get x(): number { return this[0]; }
  set x(value: number) { this[0] = value; }

  /**
  * The y component of the vector. Equivalent to `this[1];`
  */
  get y(): number { return this[1]; }
  set y(value: number) { this[1] = value; }

  /**
  * The z component of the vector. Equivalent to `this[2];`
  */
  get z(): number { return this[2]; }
  set z(value: number) { this[2] = value; }

  /**
  * The w component of the vector. Equivalent to `this[3];`
  */
  get w(): number { return this[3]; }
  set w(value: number) { this[3] = value; }

  //====================
  // Swizzle attributes
  //====================

  // The contents of the following section are autogenerated by scripts/gen-swizzle.js and should
  // not be modified by hand.
  // [Swizzle Autogen]

  /** @group Swizzle */ get xx(): Vec2 { return new Vec2(this[0], this[0]); }
  /** @group Swizzle */ get xy(): Vec2 { return new Vec2(this[0], this[1]); }
  /** @group Swizzle */ get xz(): Vec2 { return new Vec2(this[0], this[2]); }
  /** @group Swizzle */ get xw(): Vec2 { return new Vec2(this[0], this[3]); }
  /** @group Swizzle */ get yx(): Vec2 { return new Vec2(this[1], this[0]); }
  /** @group Swizzle */ get yy(): Vec2 { return new Vec2(this[1], this[1]); }
  /** @group Swizzle */ get yz(): Vec2 { return new Vec2(this[1], this[2]); }
  /** @group Swizzle */ get yw(): Vec2 { return new Vec2(this[1], this[3]); }
  /** @group Swizzle */ get zx(): Vec2 { return new Vec2(this[2], this[0]); }
  /** @group Swizzle */ get zy(): Vec2 { return new Vec2(this[2], this[1]); }
  /** @group Swizzle */ get zz(): Vec2 { return new Vec2(this[2], this[2]); }
  /** @group Swizzle */ get zw(): Vec2 { return new Vec2(this[2], this[3]); }
  /** @group Swizzle */ get wx(): Vec2 { return new Vec2(this[3], this[0]); }
  /** @group Swizzle */ get wy(): Vec2 { return new Vec2(this[3], this[1]); }
  /** @group Swizzle */ get wz(): Vec2 { return new Vec2(this[3], this[2]); }
  /** @group Swizzle */ get ww(): Vec2 { return new Vec2(this[3], this[3]); }
  /** @group Swizzle */ get xxx(): Vec3 { return new Vec3(this[0], this[0], this[0]); }
  /** @group Swizzle */ get xxy(): Vec3 { return new Vec3(this[0], this[0], this[1]); }
  /** @group Swizzle */ get xxz(): Vec3 { return new Vec3(this[0], this[0], this[2]); }
  /** @group Swizzle */ get xxw(): Vec3 { return new Vec3(this[0], this[0], this[3]); }
  /** @group Swizzle */ get xyx(): Vec3 { return new Vec3(this[0], this[1], this[0]); }
  /** @group Swizzle */ get xyy(): Vec3 { return new Vec3(this[0], this[1], this[1]); }
  /** @group Swizzle */ get xyz(): Vec3 { return new Vec3(this[0], this[1], this[2]); }
  /** @group Swizzle */ get xyw(): Vec3 { return new Vec3(this[0], this[1], this[3]); }
  /** @group Swizzle */ get xzx(): Vec3 { return new Vec3(this[0], this[2], this[0]); }
  /** @group Swizzle */ get xzy(): Vec3 { return new Vec3(this[0], this[2], this[1]); }
  /** @group Swizzle */ get xzz(): Vec3 { return new Vec3(this[0], this[2], this[2]); }
  /** @group Swizzle */ get xzw(): Vec3 { return new Vec3(this[0], this[2], this[3]); }
  /** @group Swizzle */ get xwx(): Vec3 { return new Vec3(this[0], this[3], this[0]); }
  /** @group Swizzle */ get xwy(): Vec3 { return new Vec3(this[0], this[3], this[1]); }
  /** @group Swizzle */ get xwz(): Vec3 { return new Vec3(this[0], this[3], this[2]); }
  /** @group Swizzle */ get xww(): Vec3 { return new Vec3(this[0], this[3], this[3]); }
  /** @group Swizzle */ get yxx(): Vec3 { return new Vec3(this[1], this[0], this[0]); }
  /** @group Swizzle */ get yxy(): Vec3 { return new Vec3(this[1], this[0], this[1]); }
  /** @group Swizzle */ get yxz(): Vec3 { return new Vec3(this[1], this[0], this[2]); }
  /** @group Swizzle */ get yxw(): Vec3 { return new Vec3(this[1], this[0], this[3]); }
  /** @group Swizzle */ get yyx(): Vec3 { return new Vec3(this[1], this[1], this[0]); }
  /** @group Swizzle */ get yyy(): Vec3 { return new Vec3(this[1], this[1], this[1]); }
  /** @group Swizzle */ get yyz(): Vec3 { return new Vec3(this[1], this[1], this[2]); }
  /** @group Swizzle */ get yyw(): Vec3 { return new Vec3(this[1], this[1], this[3]); }
  /** @group Swizzle */ get yzx(): Vec3 { return new Vec3(this[1], this[2], this[0]); }
  /** @group Swizzle */ get yzy(): Vec3 { return new Vec3(this[1], this[2], this[1]); }
  /** @group Swizzle */ get yzz(): Vec3 { return new Vec3(this[1], this[2], this[2]); }
  /** @group Swizzle */ get yzw(): Vec3 { return new Vec3(this[1], this[2], this[3]); }
  /** @group Swizzle */ get ywx(): Vec3 { return new Vec3(this[1], this[3], this[0]); }
  /** @group Swizzle */ get ywy(): Vec3 { return new Vec3(this[1], this[3], this[1]); }
  /** @group Swizzle */ get ywz(): Vec3 { return new Vec3(this[1], this[3], this[2]); }
  /** @group Swizzle */ get yww(): Vec3 { return new Vec3(this[1], this[3], this[3]); }
  /** @group Swizzle */ get zxx(): Vec3 { return new Vec3(this[2], this[0], this[0]); }
  /** @group Swizzle */ get zxy(): Vec3 { return new Vec3(this[2], this[0], this[1]); }
  /** @group Swizzle */ get zxz(): Vec3 { return new Vec3(this[2], this[0], this[2]); }
  /** @group Swizzle */ get zxw(): Vec3 { return new Vec3(this[2], this[0], this[3]); }
  /** @group Swizzle */ get zyx(): Vec3 { return new Vec3(this[2], this[1], this[0]); }
  /** @group Swizzle */ get zyy(): Vec3 { return new Vec3(this[2], this[1], this[1]); }
  /** @group Swizzle */ get zyz(): Vec3 { return new Vec3(this[2], this[1], this[2]); }
  /** @group Swizzle */ get zyw(): Vec3 { return new Vec3(this[2], this[1], this[3]); }
  /** @group Swizzle */ get zzx(): Vec3 { return new Vec3(this[2], this[2], this[0]); }
  /** @group Swizzle */ get zzy(): Vec3 { return new Vec3(this[2], this[2], this[1]); }
  /** @group Swizzle */ get zzz(): Vec3 { return new Vec3(this[2], this[2], this[2]); }
  /** @group Swizzle */ get zzw(): Vec3 { return new Vec3(this[2], this[2], this[3]); }
  /** @group Swizzle */ get zwx(): Vec3 { return new Vec3(this[2], this[3], this[0]); }
  /** @group Swizzle */ get zwy(): Vec3 { return new Vec3(this[2], this[3], this[1]); }
  /** @group Swizzle */ get zwz(): Vec3 { return new Vec3(this[2], this[3], this[2]); }
  /** @group Swizzle */ get zww(): Vec3 { return new Vec3(this[2], this[3], this[3]); }
  /** @group Swizzle */ get wxx(): Vec3 { return new Vec3(this[3], this[0], this[0]); }
  /** @group Swizzle */ get wxy(): Vec3 { return new Vec3(this[3], this[0], this[1]); }
  /** @group Swizzle */ get wxz(): Vec3 { return new Vec3(this[3], this[0], this[2]); }
  /** @group Swizzle */ get wxw(): Vec3 { return new Vec3(this[3], this[0], this[3]); }
  /** @group Swizzle */ get wyx(): Vec3 { return new Vec3(this[3], this[1], this[0]); }
  /** @group Swizzle */ get wyy(): Vec3 { return new Vec3(this[3], this[1], this[1]); }
  /** @group Swizzle */ get wyz(): Vec3 { return new Vec3(this[3], this[1], this[2]); }
  /** @group Swizzle */ get wyw(): Vec3 { return new Vec3(this[3], this[1], this[3]); }
  /** @group Swizzle */ get wzx(): Vec3 { return new Vec3(this[3], this[2], this[0]); }
  /** @group Swizzle */ get wzy(): Vec3 { return new Vec3(this[3], this[2], this[1]); }
  /** @group Swizzle */ get wzz(): Vec3 { return new Vec3(this[3], this[2], this[2]); }
  /** @group Swizzle */ get wzw(): Vec3 { return new Vec3(this[3], this[2], this[3]); }
  /** @group Swizzle */ get wwx(): Vec3 { return new Vec3(this[3], this[3], this[0]); }
  /** @group Swizzle */ get wwy(): Vec3 { return new Vec3(this[3], this[3], this[1]); }
  /** @group Swizzle */ get wwz(): Vec3 { return new Vec3(this[3], this[3], this[2]); }
  /** @group Swizzle */ get www(): Vec3 { return new Vec3(this[3], this[3], this[3]); }
  /** @group Swizzle */ get xxxx(): Vec4 { return new Vec4(this[0], this[0], this[0], this[0]); }
  /** @group Swizzle */ get xxxy(): Vec4 { return new Vec4(this[0], this[0], this[0], this[1]); }
  /** @group Swizzle */ get xxxz(): Vec4 { return new Vec4(this[0], this[0], this[0], this[2]); }
  /** @group Swizzle */ get xxxw(): Vec4 { return new Vec4(this[0], this[0], this[0], this[3]); }
  /** @group Swizzle */ get xxyx(): Vec4 { return new Vec4(this[0], this[0], this[1], this[0]); }
  /** @group Swizzle */ get xxyy(): Vec4 { return new Vec4(this[0], this[0], this[1], this[1]); }
  /** @group Swizzle */ get xxyz(): Vec4 { return new Vec4(this[0], this[0], this[1], this[2]); }
  /** @group Swizzle */ get xxyw(): Vec4 { return new Vec4(this[0], this[0], this[1], this[3]); }
  /** @group Swizzle */ get xxzx(): Vec4 { return new Vec4(this[0], this[0], this[2], this[0]); }
  /** @group Swizzle */ get xxzy(): Vec4 { return new Vec4(this[0], this[0], this[2], this[1]); }
  /** @group Swizzle */ get xxzz(): Vec4 { return new Vec4(this[0], this[0], this[2], this[2]); }
  /** @group Swizzle */ get xxzw(): Vec4 { return new Vec4(this[0], this[0], this[2], this[3]); }
  /** @group Swizzle */ get xxwx(): Vec4 { return new Vec4(this[0], this[0], this[3], this[0]); }
  /** @group Swizzle */ get xxwy(): Vec4 { return new Vec4(this[0], this[0], this[3], this[1]); }
  /** @group Swizzle */ get xxwz(): Vec4 { return new Vec4(this[0], this[0], this[3], this[2]); }
  /** @group Swizzle */ get xxww(): Vec4 { return new Vec4(this[0], this[0], this[3], this[3]); }
  /** @group Swizzle */ get xyxx(): Vec4 { return new Vec4(this[0], this[1], this[0], this[0]); }
  /** @group Swizzle */ get xyxy(): Vec4 { return new Vec4(this[0], this[1], this[0], this[1]); }
  /** @group Swizzle */ get xyxz(): Vec4 { return new Vec4(this[0], this[1], this[0], this[2]); }
  /** @group Swizzle */ get xyxw(): Vec4 { return new Vec4(this[0], this[1], this[0], this[3]); }
  /** @group Swizzle */ get xyyx(): Vec4 { return new Vec4(this[0], this[1], this[1], this[0]); }
  /** @group Swizzle */ get xyyy(): Vec4 { return new Vec4(this[0], this[1], this[1], this[1]); }
  /** @group Swizzle */ get xyyz(): Vec4 { return new Vec4(this[0], this[1], this[1], this[2]); }
  /** @group Swizzle */ get xyyw(): Vec4 { return new Vec4(this[0], this[1], this[1], this[3]); }
  /** @group Swizzle */ get xyzx(): Vec4 { return new Vec4(this[0], this[1], this[2], this[0]); }
  /** @group Swizzle */ get xyzy(): Vec4 { return new Vec4(this[0], this[1], this[2], this[1]); }
  /** @group Swizzle */ get xyzz(): Vec4 { return new Vec4(this[0], this[1], this[2], this[2]); }
  /** @group Swizzle */ get xyzw(): Vec4 { return new Vec4(this[0], this[1], this[2], this[3]); }
  /** @group Swizzle */ get xywx(): Vec4 { return new Vec4(this[0], this[1], this[3], this[0]); }
  /** @group Swizzle */ get xywy(): Vec4 { return new Vec4(this[0], this[1], this[3], this[1]); }
  /** @group Swizzle */ get xywz(): Vec4 { return new Vec4(this[0], this[1], this[3], this[2]); }
  /** @group Swizzle */ get xyww(): Vec4 { return new Vec4(this[0], this[1], this[3], this[3]); }
  /** @group Swizzle */ get xzxx(): Vec4 { return new Vec4(this[0], this[2], this[0], this[0]); }
  /** @group Swizzle */ get xzxy(): Vec4 { return new Vec4(this[0], this[2], this[0], this[1]); }
  /** @group Swizzle */ get xzxz(): Vec4 { return new Vec4(this[0], this[2], this[0], this[2]); }
  /** @group Swizzle */ get xzxw(): Vec4 { return new Vec4(this[0], this[2], this[0], this[3]); }
  /** @group Swizzle */ get xzyx(): Vec4 { return new Vec4(this[0], this[2], this[1], this[0]); }
  /** @group Swizzle */ get xzyy(): Vec4 { return new Vec4(this[0], this[2], this[1], this[1]); }
  /** @group Swizzle */ get xzyz(): Vec4 { return new Vec4(this[0], this[2], this[1], this[2]); }
  /** @group Swizzle */ get xzyw(): Vec4 { return new Vec4(this[0], this[2], this[1], this[3]); }
  /** @group Swizzle */ get xzzx(): Vec4 { return new Vec4(this[0], this[2], this[2], this[0]); }
  /** @group Swizzle */ get xzzy(): Vec4 { return new Vec4(this[0], this[2], this[2], this[1]); }
  /** @group Swizzle */ get xzzz(): Vec4 { return new Vec4(this[0], this[2], this[2], this[2]); }
  /** @group Swizzle */ get xzzw(): Vec4 { return new Vec4(this[0], this[2], this[2], this[3]); }
  /** @group Swizzle */ get xzwx(): Vec4 { return new Vec4(this[0], this[2], this[3], this[0]); }
  /** @group Swizzle */ get xzwy(): Vec4 { return new Vec4(this[0], this[2], this[3], this[1]); }
  /** @group Swizzle */ get xzwz(): Vec4 { return new Vec4(this[0], this[2], this[3], this[2]); }
  /** @group Swizzle */ get xzww(): Vec4 { return new Vec4(this[0], this[2], this[3], this[3]); }
  /** @group Swizzle */ get xwxx(): Vec4 { return new Vec4(this[0], this[3], this[0], this[0]); }
  /** @group Swizzle */ get xwxy(): Vec4 { return new Vec4(this[0], this[3], this[0], this[1]); }
  /** @group Swizzle */ get xwxz(): Vec4 { return new Vec4(this[0], this[3], this[0], this[2]); }
  /** @group Swizzle */ get xwxw(): Vec4 { return new Vec4(this[0], this[3], this[0], this[3]); }
  /** @group Swizzle */ get xwyx(): Vec4 { return new Vec4(this[0], this[3], this[1], this[0]); }
  /** @group Swizzle */ get xwyy(): Vec4 { return new Vec4(this[0], this[3], this[1], this[1]); }
  /** @group Swizzle */ get xwyz(): Vec4 { return new Vec4(this[0], this[3], this[1], this[2]); }
  /** @group Swizzle */ get xwyw(): Vec4 { return new Vec4(this[0], this[3], this[1], this[3]); }
  /** @group Swizzle */ get xwzx(): Vec4 { return new Vec4(this[0], this[3], this[2], this[0]); }
  /** @group Swizzle */ get xwzy(): Vec4 { return new Vec4(this[0], this[3], this[2], this[1]); }
  /** @group Swizzle */ get xwzz(): Vec4 { return new Vec4(this[0], this[3], this[2], this[2]); }
  /** @group Swizzle */ get xwzw(): Vec4 { return new Vec4(this[0], this[3], this[2], this[3]); }
  /** @group Swizzle */ get xwwx(): Vec4 { return new Vec4(this[0], this[3], this[3], this[0]); }
  /** @group Swizzle */ get xwwy(): Vec4 { return new Vec4(this[0], this[3], this[3], this[1]); }
  /** @group Swizzle */ get xwwz(): Vec4 { return new Vec4(this[0], this[3], this[3], this[2]); }
  /** @group Swizzle */ get xwww(): Vec4 { return new Vec4(this[0], this[3], this[3], this[3]); }
  /** @group Swizzle */ get yxxx(): Vec4 { return new Vec4(this[1], this[0], this[0], this[0]); }
  /** @group Swizzle */ get yxxy(): Vec4 { return new Vec4(this[1], this[0], this[0], this[1]); }
  /** @group Swizzle */ get yxxz(): Vec4 { return new Vec4(this[1], this[0], this[0], this[2]); }
  /** @group Swizzle */ get yxxw(): Vec4 { return new Vec4(this[1], this[0], this[0], this[3]); }
  /** @group Swizzle */ get yxyx(): Vec4 { return new Vec4(this[1], this[0], this[1], this[0]); }
  /** @group Swizzle */ get yxyy(): Vec4 { return new Vec4(this[1], this[0], this[1], this[1]); }
  /** @group Swizzle */ get yxyz(): Vec4 { return new Vec4(this[1], this[0], this[1], this[2]); }
  /** @group Swizzle */ get yxyw(): Vec4 { return new Vec4(this[1], this[0], this[1], this[3]); }
  /** @group Swizzle */ get yxzx(): Vec4 { return new Vec4(this[1], this[0], this[2], this[0]); }
  /** @group Swizzle */ get yxzy(): Vec4 { return new Vec4(this[1], this[0], this[2], this[1]); }
  /** @group Swizzle */ get yxzz(): Vec4 { return new Vec4(this[1], this[0], this[2], this[2]); }
  /** @group Swizzle */ get yxzw(): Vec4 { return new Vec4(this[1], this[0], this[2], this[3]); }
  /** @group Swizzle */ get yxwx(): Vec4 { return new Vec4(this[1], this[0], this[3], this[0]); }
  /** @group Swizzle */ get yxwy(): Vec4 { return new Vec4(this[1], this[0], this[3], this[1]); }
  /** @group Swizzle */ get yxwz(): Vec4 { return new Vec4(this[1], this[0], this[3], this[2]); }
  /** @group Swizzle */ get yxww(): Vec4 { return new Vec4(this[1], this[0], this[3], this[3]); }
  /** @group Swizzle */ get yyxx(): Vec4 { return new Vec4(this[1], this[1], this[0], this[0]); }
  /** @group Swizzle */ get yyxy(): Vec4 { return new Vec4(this[1], this[1], this[0], this[1]); }
  /** @group Swizzle */ get yyxz(): Vec4 { return new Vec4(this[1], this[1], this[0], this[2]); }
  /** @group Swizzle */ get yyxw(): Vec4 { return new Vec4(this[1], this[1], this[0], this[3]); }
  /** @group Swizzle */ get yyyx(): Vec4 { return new Vec4(this[1], this[1], this[1], this[0]); }
  /** @group Swizzle */ get yyyy(): Vec4 { return new Vec4(this[1], this[1], this[1], this[1]); }
  /** @group Swizzle */ get yyyz(): Vec4 { return new Vec4(this[1], this[1], this[1], this[2]); }
  /** @group Swizzle */ get yyyw(): Vec4 { return new Vec4(this[1], this[1], this[1], this[3]); }
  /** @group Swizzle */ get yyzx(): Vec4 { return new Vec4(this[1], this[1], this[2], this[0]); }
  /** @group Swizzle */ get yyzy(): Vec4 { return new Vec4(this[1], this[1], this[2], this[1]); }
  /** @group Swizzle */ get yyzz(): Vec4 { return new Vec4(this[1], this[1], this[2], this[2]); }
  /** @group Swizzle */ get yyzw(): Vec4 { return new Vec4(this[1], this[1], this[2], this[3]); }
  /** @group Swizzle */ get yywx(): Vec4 { return new Vec4(this[1], this[1], this[3], this[0]); }
  /** @group Swizzle */ get yywy(): Vec4 { return new Vec4(this[1], this[1], this[3], this[1]); }
  /** @group Swizzle */ get yywz(): Vec4 { return new Vec4(this[1], this[1], this[3], this[2]); }
  /** @group Swizzle */ get yyww(): Vec4 { return new Vec4(this[1], this[1], this[3], this[3]); }
  /** @group Swizzle */ get yzxx(): Vec4 { return new Vec4(this[1], this[2], this[0], this[0]); }
  /** @group Swizzle */ get yzxy(): Vec4 { return new Vec4(this[1], this[2], this[0], this[1]); }
  /** @group Swizzle */ get yzxz(): Vec4 { return new Vec4(this[1], this[2], this[0], this[2]); }
  /** @group Swizzle */ get yzxw(): Vec4 { return new Vec4(this[1], this[2], this[0], this[3]); }
  /** @group Swizzle */ get yzyx(): Vec4 { return new Vec4(this[1], this[2], this[1], this[0]); }
  /** @group Swizzle */ get yzyy(): Vec4 { return new Vec4(this[1], this[2], this[1], this[1]); }
  /** @group Swizzle */ get yzyz(): Vec4 { return new Vec4(this[1], this[2], this[1], this[2]); }
  /** @group Swizzle */ get yzyw(): Vec4 { return new Vec4(this[1], this[2], this[1], this[3]); }
  /** @group Swizzle */ get yzzx(): Vec4 { return new Vec4(this[1], this[2], this[2], this[0]); }
  /** @group Swizzle */ get yzzy(): Vec4 { return new Vec4(this[1], this[2], this[2], this[1]); }
  /** @group Swizzle */ get yzzz(): Vec4 { return new Vec4(this[1], this[2], this[2], this[2]); }
  /** @group Swizzle */ get yzzw(): Vec4 { return new Vec4(this[1], this[2], this[2], this[3]); }
  /** @group Swizzle */ get yzwx(): Vec4 { return new Vec4(this[1], this[2], this[3], this[0]); }
  /** @group Swizzle */ get yzwy(): Vec4 { return new Vec4(this[1], this[2], this[3], this[1]); }
  /** @group Swizzle */ get yzwz(): Vec4 { return new Vec4(this[1], this[2], this[3], this[2]); }
  /** @group Swizzle */ get yzww(): Vec4 { return new Vec4(this[1], this[2], this[3], this[3]); }
  /** @group Swizzle */ get ywxx(): Vec4 { return new Vec4(this[1], this[3], this[0], this[0]); }
  /** @group Swizzle */ get ywxy(): Vec4 { return new Vec4(this[1], this[3], this[0], this[1]); }
  /** @group Swizzle */ get ywxz(): Vec4 { return new Vec4(this[1], this[3], this[0], this[2]); }
  /** @group Swizzle */ get ywxw(): Vec4 { return new Vec4(this[1], this[3], this[0], this[3]); }
  /** @group Swizzle */ get ywyx(): Vec4 { return new Vec4(this[1], this[3], this[1], this[0]); }
  /** @group Swizzle */ get ywyy(): Vec4 { return new Vec4(this[1], this[3], this[1], this[1]); }
  /** @group Swizzle */ get ywyz(): Vec4 { return new Vec4(this[1], this[3], this[1], this[2]); }
  /** @group Swizzle */ get ywyw(): Vec4 { return new Vec4(this[1], this[3], this[1], this[3]); }
  /** @group Swizzle */ get ywzx(): Vec4 { return new Vec4(this[1], this[3], this[2], this[0]); }
  /** @group Swizzle */ get ywzy(): Vec4 { return new Vec4(this[1], this[3], this[2], this[1]); }
  /** @group Swizzle */ get ywzz(): Vec4 { return new Vec4(this[1], this[3], this[2], this[2]); }
  /** @group Swizzle */ get ywzw(): Vec4 { return new Vec4(this[1], this[3], this[2], this[3]); }
  /** @group Swizzle */ get ywwx(): Vec4 { return new Vec4(this[1], this[3], this[3], this[0]); }
  /** @group Swizzle */ get ywwy(): Vec4 { return new Vec4(this[1], this[3], this[3], this[1]); }
  /** @group Swizzle */ get ywwz(): Vec4 { return new Vec4(this[1], this[3], this[3], this[2]); }
  /** @group Swizzle */ get ywww(): Vec4 { return new Vec4(this[1], this[3], this[3], this[3]); }
  /** @group Swizzle */ get zxxx(): Vec4 { return new Vec4(this[2], this[0], this[0], this[0]); }
  /** @group Swizzle */ get zxxy(): Vec4 { return new Vec4(this[2], this[0], this[0], this[1]); }
  /** @group Swizzle */ get zxxz(): Vec4 { return new Vec4(this[2], this[0], this[0], this[2]); }
  /** @group Swizzle */ get zxxw(): Vec4 { return new Vec4(this[2], this[0], this[0], this[3]); }
  /** @group Swizzle */ get zxyx(): Vec4 { return new Vec4(this[2], this[0], this[1], this[0]); }
  /** @group Swizzle */ get zxyy(): Vec4 { return new Vec4(this[2], this[0], this[1], this[1]); }
  /** @group Swizzle */ get zxyz(): Vec4 { return new Vec4(this[2], this[0], this[1], this[2]); }
  /** @group Swizzle */ get zxyw(): Vec4 { return new Vec4(this[2], this[0], this[1], this[3]); }
  /** @group Swizzle */ get zxzx(): Vec4 { return new Vec4(this[2], this[0], this[2], this[0]); }
  /** @group Swizzle */ get zxzy(): Vec4 { return new Vec4(this[2], this[0], this[2], this[1]); }
  /** @group Swizzle */ get zxzz(): Vec4 { return new Vec4(this[2], this[0], this[2], this[2]); }
  /** @group Swizzle */ get zxzw(): Vec4 { return new Vec4(this[2], this[0], this[2], this[3]); }
  /** @group Swizzle */ get zxwx(): Vec4 { return new Vec4(this[2], this[0], this[3], this[0]); }
  /** @group Swizzle */ get zxwy(): Vec4 { return new Vec4(this[2], this[0], this[3], this[1]); }
  /** @group Swizzle */ get zxwz(): Vec4 { return new Vec4(this[2], this[0], this[3], this[2]); }
  /** @group Swizzle */ get zxww(): Vec4 { return new Vec4(this[2], this[0], this[3], this[3]); }
  /** @group Swizzle */ get zyxx(): Vec4 { return new Vec4(this[2], this[1], this[0], this[0]); }
  /** @group Swizzle */ get zyxy(): Vec4 { return new Vec4(this[2], this[1], this[0], this[1]); }
  /** @group Swizzle */ get zyxz(): Vec4 { return new Vec4(this[2], this[1], this[0], this[2]); }
  /** @group Swizzle */ get zyxw(): Vec4 { return new Vec4(this[2], this[1], this[0], this[3]); }
  /** @group Swizzle */ get zyyx(): Vec4 { return new Vec4(this[2], this[1], this[1], this[0]); }
  /** @group Swizzle */ get zyyy(): Vec4 { return new Vec4(this[2], this[1], this[1], this[1]); }
  /** @group Swizzle */ get zyyz(): Vec4 { return new Vec4(this[2], this[1], this[1], this[2]); }
  /** @group Swizzle */ get zyyw(): Vec4 { return new Vec4(this[2], this[1], this[1], this[3]); }
  /** @group Swizzle */ get zyzx(): Vec4 { return new Vec4(this[2], this[1], this[2], this[0]); }
  /** @group Swizzle */ get zyzy(): Vec4 { return new Vec4(this[2], this[1], this[2], this[1]); }
  /** @group Swizzle */ get zyzz(): Vec4 { return new Vec4(this[2], this[1], this[2], this[2]); }
  /** @group Swizzle */ get zyzw(): Vec4 { return new Vec4(this[2], this[1], this[2], this[3]); }
  /** @group Swizzle */ get zywx(): Vec4 { return new Vec4(this[2], this[1], this[3], this[0]); }
  /** @group Swizzle */ get zywy(): Vec4 { return new Vec4(this[2], this[1], this[3], this[1]); }
  /** @group Swizzle */ get zywz(): Vec4 { return new Vec4(this[2], this[1], this[3], this[2]); }
  /** @group Swizzle */ get zyww(): Vec4 { return new Vec4(this[2], this[1], this[3], this[3]); }
  /** @group Swizzle */ get zzxx(): Vec4 { return new Vec4(this[2], this[2], this[0], this[0]); }
  /** @group Swizzle */ get zzxy(): Vec4 { return new Vec4(this[2], this[2], this[0], this[1]); }
  /** @group Swizzle */ get zzxz(): Vec4 { return new Vec4(this[2], this[2], this[0], this[2]); }
  /** @group Swizzle */ get zzxw(): Vec4 { return new Vec4(this[2], this[2], this[0], this[3]); }
  /** @group Swizzle */ get zzyx(): Vec4 { return new Vec4(this[2], this[2], this[1], this[0]); }
  /** @group Swizzle */ get zzyy(): Vec4 { return new Vec4(this[2], this[2], this[1], this[1]); }
  /** @group Swizzle */ get zzyz(): Vec4 { return new Vec4(this[2], this[2], this[1], this[2]); }
  /** @group Swizzle */ get zzyw(): Vec4 { return new Vec4(this[2], this[2], this[1], this[3]); }
  /** @group Swizzle */ get zzzx(): Vec4 { return new Vec4(this[2], this[2], this[2], this[0]); }
  /** @group Swizzle */ get zzzy(): Vec4 { return new Vec4(this[2], this[2], this[2], this[1]); }
  /** @group Swizzle */ get zzzz(): Vec4 { return new Vec4(this[2], this[2], this[2], this[2]); }
  /** @group Swizzle */ get zzzw(): Vec4 { return new Vec4(this[2], this[2], this[2], this[3]); }
  /** @group Swizzle */ get zzwx(): Vec4 { return new Vec4(this[2], this[2], this[3], this[0]); }
  /** @group Swizzle */ get zzwy(): Vec4 { return new Vec4(this[2], this[2], this[3], this[1]); }
  /** @group Swizzle */ get zzwz(): Vec4 { return new Vec4(this[2], this[2], this[3], this[2]); }
  /** @group Swizzle */ get zzww(): Vec4 { return new Vec4(this[2], this[2], this[3], this[3]); }
  /** @group Swizzle */ get zwxx(): Vec4 { return new Vec4(this[2], this[3], this[0], this[0]); }
  /** @group Swizzle */ get zwxy(): Vec4 { return new Vec4(this[2], this[3], this[0], this[1]); }
  /** @group Swizzle */ get zwxz(): Vec4 { return new Vec4(this[2], this[3], this[0], this[2]); }
  /** @group Swizzle */ get zwxw(): Vec4 { return new Vec4(this[2], this[3], this[0], this[3]); }
  /** @group Swizzle */ get zwyx(): Vec4 { return new Vec4(this[2], this[3], this[1], this[0]); }
  /** @group Swizzle */ get zwyy(): Vec4 { return new Vec4(this[2], this[3], this[1], this[1]); }
  /** @group Swizzle */ get zwyz(): Vec4 { return new Vec4(this[2], this[3], this[1], this[2]); }
  /** @group Swizzle */ get zwyw(): Vec4 { return new Vec4(this[2], this[3], this[1], this[3]); }
  /** @group Swizzle */ get zwzx(): Vec4 { return new Vec4(this[2], this[3], this[2], this[0]); }
  /** @group Swizzle */ get zwzy(): Vec4 { return new Vec4(this[2], this[3], this[2], this[1]); }
  /** @group Swizzle */ get zwzz(): Vec4 { return new Vec4(this[2], this[3], this[2], this[2]); }
  /** @group Swizzle */ get zwzw(): Vec4 { return new Vec4(this[2], this[3], this[2], this[3]); }
  /** @group Swizzle */ get zwwx(): Vec4 { return new Vec4(this[2], this[3], this[3], this[0]); }
  /** @group Swizzle */ get zwwy(): Vec4 { return new Vec4(this[2], this[3], this[3], this[1]); }
  /** @group Swizzle */ get zwwz(): Vec4 { return new Vec4(this[2], this[3], this[3], this[2]); }
  /** @group Swizzle */ get zwww(): Vec4 { return new Vec4(this[2], this[3], this[3], this[3]); }
  /** @group Swizzle */ get wxxx(): Vec4 { return new Vec4(this[3], this[0], this[0], this[0]); }
  /** @group Swizzle */ get wxxy(): Vec4 { return new Vec4(this[3], this[0], this[0], this[1]); }
  /** @group Swizzle */ get wxxz(): Vec4 { return new Vec4(this[3], this[0], this[0], this[2]); }
  /** @group Swizzle */ get wxxw(): Vec4 { return new Vec4(this[3], this[0], this[0], this[3]); }
  /** @group Swizzle */ get wxyx(): Vec4 { return new Vec4(this[3], this[0], this[1], this[0]); }
  /** @group Swizzle */ get wxyy(): Vec4 { return new Vec4(this[3], this[0], this[1], this[1]); }
  /** @group Swizzle */ get wxyz(): Vec4 { return new Vec4(this[3], this[0], this[1], this[2]); }
  /** @group Swizzle */ get wxyw(): Vec4 { return new Vec4(this[3], this[0], this[1], this[3]); }
  /** @group Swizzle */ get wxzx(): Vec4 { return new Vec4(this[3], this[0], this[2], this[0]); }
  /** @group Swizzle */ get wxzy(): Vec4 { return new Vec4(this[3], this[0], this[2], this[1]); }
  /** @group Swizzle */ get wxzz(): Vec4 { return new Vec4(this[3], this[0], this[2], this[2]); }
  /** @group Swizzle */ get wxzw(): Vec4 { return new Vec4(this[3], this[0], this[2], this[3]); }
  /** @group Swizzle */ get wxwx(): Vec4 { return new Vec4(this[3], this[0], this[3], this[0]); }
  /** @group Swizzle */ get wxwy(): Vec4 { return new Vec4(this[3], this[0], this[3], this[1]); }
  /** @group Swizzle */ get wxwz(): Vec4 { return new Vec4(this[3], this[0], this[3], this[2]); }
  /** @group Swizzle */ get wxww(): Vec4 { return new Vec4(this[3], this[0], this[3], this[3]); }
  /** @group Swizzle */ get wyxx(): Vec4 { return new Vec4(this[3], this[1], this[0], this[0]); }
  /** @group Swizzle */ get wyxy(): Vec4 { return new Vec4(this[3], this[1], this[0], this[1]); }
  /** @group Swizzle */ get wyxz(): Vec4 { return new Vec4(this[3], this[1], this[0], this[2]); }
  /** @group Swizzle */ get wyxw(): Vec4 { return new Vec4(this[3], this[1], this[0], this[3]); }
  /** @group Swizzle */ get wyyx(): Vec4 { return new Vec4(this[3], this[1], this[1], this[0]); }
  /** @group Swizzle */ get wyyy(): Vec4 { return new Vec4(this[3], this[1], this[1], this[1]); }
  /** @group Swizzle */ get wyyz(): Vec4 { return new Vec4(this[3], this[1], this[1], this[2]); }
  /** @group Swizzle */ get wyyw(): Vec4 { return new Vec4(this[3], this[1], this[1], this[3]); }
  /** @group Swizzle */ get wyzx(): Vec4 { return new Vec4(this[3], this[1], this[2], this[0]); }
  /** @group Swizzle */ get wyzy(): Vec4 { return new Vec4(this[3], this[1], this[2], this[1]); }
  /** @group Swizzle */ get wyzz(): Vec4 { return new Vec4(this[3], this[1], this[2], this[2]); }
  /** @group Swizzle */ get wyzw(): Vec4 { return new Vec4(this[3], this[1], this[2], this[3]); }
  /** @group Swizzle */ get wywx(): Vec4 { return new Vec4(this[3], this[1], this[3], this[0]); }
  /** @group Swizzle */ get wywy(): Vec4 { return new Vec4(this[3], this[1], this[3], this[1]); }
  /** @group Swizzle */ get wywz(): Vec4 { return new Vec4(this[3], this[1], this[3], this[2]); }
  /** @group Swizzle */ get wyww(): Vec4 { return new Vec4(this[3], this[1], this[3], this[3]); }
  /** @group Swizzle */ get wzxx(): Vec4 { return new Vec4(this[3], this[2], this[0], this[0]); }
  /** @group Swizzle */ get wzxy(): Vec4 { return new Vec4(this[3], this[2], this[0], this[1]); }
  /** @group Swizzle */ get wzxz(): Vec4 { return new Vec4(this[3], this[2], this[0], this[2]); }
  /** @group Swizzle */ get wzxw(): Vec4 { return new Vec4(this[3], this[2], this[0], this[3]); }
  /** @group Swizzle */ get wzyx(): Vec4 { return new Vec4(this[3], this[2], this[1], this[0]); }
  /** @group Swizzle */ get wzyy(): Vec4 { return new Vec4(this[3], this[2], this[1], this[1]); }
  /** @group Swizzle */ get wzyz(): Vec4 { return new Vec4(this[3], this[2], this[1], this[2]); }
  /** @group Swizzle */ get wzyw(): Vec4 { return new Vec4(this[3], this[2], this[1], this[3]); }
  /** @group Swizzle */ get wzzx(): Vec4 { return new Vec4(this[3], this[2], this[2], this[0]); }
  /** @group Swizzle */ get wzzy(): Vec4 { return new Vec4(this[3], this[2], this[2], this[1]); }
  /** @group Swizzle */ get wzzz(): Vec4 { return new Vec4(this[3], this[2], this[2], this[2]); }
  /** @group Swizzle */ get wzzw(): Vec4 { return new Vec4(this[3], this[2], this[2], this[3]); }
  /** @group Swizzle */ get wzwx(): Vec4 { return new Vec4(this[3], this[2], this[3], this[0]); }
  /** @group Swizzle */ get wzwy(): Vec4 { return new Vec4(this[3], this[2], this[3], this[1]); }
  /** @group Swizzle */ get wzwz(): Vec4 { return new Vec4(this[3], this[2], this[3], this[2]); }
  /** @group Swizzle */ get wzww(): Vec4 { return new Vec4(this[3], this[2], this[3], this[3]); }
  /** @group Swizzle */ get wwxx(): Vec4 { return new Vec4(this[3], this[3], this[0], this[0]); }
  /** @group Swizzle */ get wwxy(): Vec4 { return new Vec4(this[3], this[3], this[0], this[1]); }
  /** @group Swizzle */ get wwxz(): Vec4 { return new Vec4(this[3], this[3], this[0], this[2]); }
  /** @group Swizzle */ get wwxw(): Vec4 { return new Vec4(this[3], this[3], this[0], this[3]); }
  /** @group Swizzle */ get wwyx(): Vec4 { return new Vec4(this[3], this[3], this[1], this[0]); }
  /** @group Swizzle */ get wwyy(): Vec4 { return new Vec4(this[3], this[3], this[1], this[1]); }
  /** @group Swizzle */ get wwyz(): Vec4 { return new Vec4(this[3], this[3], this[1], this[2]); }
  /** @group Swizzle */ get wwyw(): Vec4 { return new Vec4(this[3], this[3], this[1], this[3]); }
  /** @group Swizzle */ get wwzx(): Vec4 { return new Vec4(this[3], this[3], this[2], this[0]); }
  /** @group Swizzle */ get wwzy(): Vec4 { return new Vec4(this[3], this[3], this[2], this[1]); }
  /** @group Swizzle */ get wwzz(): Vec4 { return new Vec4(this[3], this[3], this[2], this[2]); }
  /** @group Swizzle */ get wwzw(): Vec4 { return new Vec4(this[3], this[3], this[2], this[3]); }
  /** @group Swizzle */ get wwwx(): Vec4 { return new Vec4(this[3], this[3], this[3], this[0]); }
  /** @group Swizzle */ get wwwy(): Vec4 { return new Vec4(this[3], this[3], this[3], this[1]); }
  /** @group Swizzle */ get wwwz(): Vec4 { return new Vec4(this[3], this[3], this[3], this[2]); }
  /** @group Swizzle */ get wwww(): Vec4 { return new Vec4(this[3], this[3], this[3], this[3]); }

  // [/Swizzle Autogen]

  //===================
  // Instances methods
  //===================

  /**
   * Adds a {@link Vec4} to `this`.
   * Equivalent to `Vec4.add(this, this, b);`
   * @group Instance
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
   add(b: Readonly<Vec4Like>): Vec4 {
    this[0] += b[0];
    this[1] += b[1];
    this[2] += b[2];
    this[3] += b[3];
    return this;
  }

  //================
  // Static methods
  //================

  /**
   * Adds two {@link Vec4}s
   * @group Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(out: Vec4Like, a: Readonly<Vec4Like>, b: Readonly<Vec4Like>): Vec4Like {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
  }
}

/**
 * Vec4 alias for backwards compatibility
 */
export const vec4 = Vec4;