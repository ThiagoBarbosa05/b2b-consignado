
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Wines
 * 
 */
export type Wines = $Result.DefaultSelection<Prisma.$WinesPayload>
/**
 * Model WineType
 * 
 */
export type WineType = $Result.DefaultSelection<Prisma.$WineTypePayload>
/**
 * Model WineCount
 * 
 */
export type WineCount = $Result.DefaultSelection<Prisma.$WineCountPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Wines
 * const wines = await prisma.wines.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Wines
   * const wines = await prisma.wines.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.wines`: Exposes CRUD operations for the **Wines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wines
    * const wines = await prisma.wines.findMany()
    * ```
    */
  get wines(): Prisma.WinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wineType`: Exposes CRUD operations for the **WineType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WineTypes
    * const wineTypes = await prisma.wineType.findMany()
    * ```
    */
  get wineType(): Prisma.WineTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wineCount`: Exposes CRUD operations for the **WineCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WineCounts
    * const wineCounts = await prisma.wineCount.findMany()
    * ```
    */
  get wineCount(): Prisma.WineCountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Wines: 'Wines',
    WineType: 'WineType',
    WineCount: 'WineCount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "wines" | "wineType" | "wineCount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Wines: {
        payload: Prisma.$WinesPayload<ExtArgs>
        fields: Prisma.WinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>
          }
          findFirst: {
            args: Prisma.WinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>
          }
          findMany: {
            args: Prisma.WinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>[]
          }
          create: {
            args: Prisma.WinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>
          }
          createMany: {
            args: Prisma.WinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WinesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>[]
          }
          delete: {
            args: Prisma.WinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>
          }
          update: {
            args: Prisma.WinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>
          }
          deleteMany: {
            args: Prisma.WinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WinesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>[]
          }
          upsert: {
            args: Prisma.WinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinesPayload>
          }
          aggregate: {
            args: Prisma.WinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWines>
          }
          groupBy: {
            args: Prisma.WinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WinesCountArgs<ExtArgs>
            result: $Utils.Optional<WinesCountAggregateOutputType> | number
          }
        }
      }
      WineType: {
        payload: Prisma.$WineTypePayload<ExtArgs>
        fields: Prisma.WineTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WineTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WineTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>
          }
          findFirst: {
            args: Prisma.WineTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WineTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>
          }
          findMany: {
            args: Prisma.WineTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>[]
          }
          create: {
            args: Prisma.WineTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>
          }
          createMany: {
            args: Prisma.WineTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WineTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>[]
          }
          delete: {
            args: Prisma.WineTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>
          }
          update: {
            args: Prisma.WineTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>
          }
          deleteMany: {
            args: Prisma.WineTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WineTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WineTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>[]
          }
          upsert: {
            args: Prisma.WineTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineTypePayload>
          }
          aggregate: {
            args: Prisma.WineTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWineType>
          }
          groupBy: {
            args: Prisma.WineTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WineTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WineTypeCountArgs<ExtArgs>
            result: $Utils.Optional<WineTypeCountAggregateOutputType> | number
          }
        }
      }
      WineCount: {
        payload: Prisma.$WineCountPayload<ExtArgs>
        fields: Prisma.WineCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WineCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WineCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>
          }
          findFirst: {
            args: Prisma.WineCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WineCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>
          }
          findMany: {
            args: Prisma.WineCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>[]
          }
          create: {
            args: Prisma.WineCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>
          }
          createMany: {
            args: Prisma.WineCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WineCountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>[]
          }
          delete: {
            args: Prisma.WineCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>
          }
          update: {
            args: Prisma.WineCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>
          }
          deleteMany: {
            args: Prisma.WineCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WineCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WineCountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>[]
          }
          upsert: {
            args: Prisma.WineCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineCountPayload>
          }
          aggregate: {
            args: Prisma.WineCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWineCount>
          }
          groupBy: {
            args: Prisma.WineCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<WineCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.WineCountCountArgs<ExtArgs>
            result: $Utils.Optional<WineCountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    wines?: WinesOmit
    wineType?: WineTypeOmit
    wineCount?: WineCountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WinesCountOutputType
   */

  export type WinesCountOutputType = {
    WineCount: number
  }

  export type WinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WineCount?: boolean | WinesCountOutputTypeCountWineCountArgs
  }

  // Custom InputTypes
  /**
   * WinesCountOutputType without action
   */
  export type WinesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinesCountOutputType
     */
    select?: WinesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WinesCountOutputType without action
   */
  export type WinesCountOutputTypeCountWineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WineCountWhereInput
  }


  /**
   * Count Type WineTypeCountOutputType
   */

  export type WineTypeCountOutputType = {
    wines: number
  }

  export type WineTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wines?: boolean | WineTypeCountOutputTypeCountWinesArgs
  }

  // Custom InputTypes
  /**
   * WineTypeCountOutputType without action
   */
  export type WineTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineTypeCountOutputType
     */
    select?: WineTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WineTypeCountOutputType without action
   */
  export type WineTypeCountOutputTypeCountWinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Wines
   */

  export type AggregateWines = {
    _count: WinesCountAggregateOutputType | null
    _avg: WinesAvgAggregateOutputType | null
    _sum: WinesSumAggregateOutputType | null
    _min: WinesMinAggregateOutputType | null
    _max: WinesMaxAggregateOutputType | null
  }

  export type WinesAvgAggregateOutputType = {
    price: number | null
  }

  export type WinesSumAggregateOutputType = {
    price: number | null
  }

  export type WinesMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    region: string | null
    price: number | null
    typeId: string | null
  }

  export type WinesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    region: string | null
    price: number | null
    typeId: string | null
  }

  export type WinesCountAggregateOutputType = {
    id: number
    name: number
    country: number
    region: number
    price: number
    typeId: number
    _all: number
  }


  export type WinesAvgAggregateInputType = {
    price?: true
  }

  export type WinesSumAggregateInputType = {
    price?: true
  }

  export type WinesMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    region?: true
    price?: true
    typeId?: true
  }

  export type WinesMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    region?: true
    price?: true
    typeId?: true
  }

  export type WinesCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    region?: true
    price?: true
    typeId?: true
    _all?: true
  }

  export type WinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wines to aggregate.
     */
    where?: WinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wines to fetch.
     */
    orderBy?: WinesOrderByWithRelationInput | WinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wines
    **/
    _count?: true | WinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WinesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WinesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WinesMaxAggregateInputType
  }

  export type GetWinesAggregateType<T extends WinesAggregateArgs> = {
        [P in keyof T & keyof AggregateWines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWines[P]>
      : GetScalarType<T[P], AggregateWines[P]>
  }




  export type WinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinesWhereInput
    orderBy?: WinesOrderByWithAggregationInput | WinesOrderByWithAggregationInput[]
    by: WinesScalarFieldEnum[] | WinesScalarFieldEnum
    having?: WinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WinesCountAggregateInputType | true
    _avg?: WinesAvgAggregateInputType
    _sum?: WinesSumAggregateInputType
    _min?: WinesMinAggregateInputType
    _max?: WinesMaxAggregateInputType
  }

  export type WinesGroupByOutputType = {
    id: string
    name: string
    country: string | null
    region: string | null
    price: number
    typeId: string
    _count: WinesCountAggregateOutputType | null
    _avg: WinesAvgAggregateOutputType | null
    _sum: WinesSumAggregateOutputType | null
    _min: WinesMinAggregateOutputType | null
    _max: WinesMaxAggregateOutputType | null
  }

  type GetWinesGroupByPayload<T extends WinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WinesGroupByOutputType[P]>
            : GetScalarType<T[P], WinesGroupByOutputType[P]>
        }
      >
    >


  export type WinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    price?: boolean
    typeId?: boolean
    type?: boolean | WineTypeDefaultArgs<ExtArgs>
    WineCount?: boolean | Wines$WineCountArgs<ExtArgs>
    _count?: boolean | WinesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wines"]>

  export type WinesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    price?: boolean
    typeId?: boolean
    type?: boolean | WineTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wines"]>

  export type WinesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    price?: boolean
    typeId?: boolean
    type?: boolean | WineTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wines"]>

  export type WinesSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    price?: boolean
    typeId?: boolean
  }

  export type WinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "region" | "price" | "typeId", ExtArgs["result"]["wines"]>
  export type WinesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | WineTypeDefaultArgs<ExtArgs>
    WineCount?: boolean | Wines$WineCountArgs<ExtArgs>
    _count?: boolean | WinesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WinesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | WineTypeDefaultArgs<ExtArgs>
  }
  export type WinesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | WineTypeDefaultArgs<ExtArgs>
  }

  export type $WinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wines"
    objects: {
      type: Prisma.$WineTypePayload<ExtArgs>
      WineCount: Prisma.$WineCountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string | null
      region: string | null
      price: number
      typeId: string
    }, ExtArgs["result"]["wines"]>
    composites: {}
  }

  type WinesGetPayload<S extends boolean | null | undefined | WinesDefaultArgs> = $Result.GetResult<Prisma.$WinesPayload, S>

  type WinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WinesCountAggregateInputType | true
    }

  export interface WinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wines'], meta: { name: 'Wines' } }
    /**
     * Find zero or one Wines that matches the filter.
     * @param {WinesFindUniqueArgs} args - Arguments to find a Wines
     * @example
     * // Get one Wines
     * const wines = await prisma.wines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WinesFindUniqueArgs>(args: SelectSubset<T, WinesFindUniqueArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WinesFindUniqueOrThrowArgs} args - Arguments to find a Wines
     * @example
     * // Get one Wines
     * const wines = await prisma.wines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WinesFindUniqueOrThrowArgs>(args: SelectSubset<T, WinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinesFindFirstArgs} args - Arguments to find a Wines
     * @example
     * // Get one Wines
     * const wines = await prisma.wines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WinesFindFirstArgs>(args?: SelectSubset<T, WinesFindFirstArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinesFindFirstOrThrowArgs} args - Arguments to find a Wines
     * @example
     * // Get one Wines
     * const wines = await prisma.wines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WinesFindFirstOrThrowArgs>(args?: SelectSubset<T, WinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wines
     * const wines = await prisma.wines.findMany()
     * 
     * // Get first 10 Wines
     * const wines = await prisma.wines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const winesWithIdOnly = await prisma.wines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WinesFindManyArgs>(args?: SelectSubset<T, WinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wines.
     * @param {WinesCreateArgs} args - Arguments to create a Wines.
     * @example
     * // Create one Wines
     * const Wines = await prisma.wines.create({
     *   data: {
     *     // ... data to create a Wines
     *   }
     * })
     * 
     */
    create<T extends WinesCreateArgs>(args: SelectSubset<T, WinesCreateArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wines.
     * @param {WinesCreateManyArgs} args - Arguments to create many Wines.
     * @example
     * // Create many Wines
     * const wines = await prisma.wines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WinesCreateManyArgs>(args?: SelectSubset<T, WinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wines and returns the data saved in the database.
     * @param {WinesCreateManyAndReturnArgs} args - Arguments to create many Wines.
     * @example
     * // Create many Wines
     * const wines = await prisma.wines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wines and only return the `id`
     * const winesWithIdOnly = await prisma.wines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WinesCreateManyAndReturnArgs>(args?: SelectSubset<T, WinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wines.
     * @param {WinesDeleteArgs} args - Arguments to delete one Wines.
     * @example
     * // Delete one Wines
     * const Wines = await prisma.wines.delete({
     *   where: {
     *     // ... filter to delete one Wines
     *   }
     * })
     * 
     */
    delete<T extends WinesDeleteArgs>(args: SelectSubset<T, WinesDeleteArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wines.
     * @param {WinesUpdateArgs} args - Arguments to update one Wines.
     * @example
     * // Update one Wines
     * const wines = await prisma.wines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WinesUpdateArgs>(args: SelectSubset<T, WinesUpdateArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wines.
     * @param {WinesDeleteManyArgs} args - Arguments to filter Wines to delete.
     * @example
     * // Delete a few Wines
     * const { count } = await prisma.wines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WinesDeleteManyArgs>(args?: SelectSubset<T, WinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wines
     * const wines = await prisma.wines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WinesUpdateManyArgs>(args: SelectSubset<T, WinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wines and returns the data updated in the database.
     * @param {WinesUpdateManyAndReturnArgs} args - Arguments to update many Wines.
     * @example
     * // Update many Wines
     * const wines = await prisma.wines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wines and only return the `id`
     * const winesWithIdOnly = await prisma.wines.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WinesUpdateManyAndReturnArgs>(args: SelectSubset<T, WinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wines.
     * @param {WinesUpsertArgs} args - Arguments to update or create a Wines.
     * @example
     * // Update or create a Wines
     * const wines = await prisma.wines.upsert({
     *   create: {
     *     // ... data to create a Wines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wines we want to update
     *   }
     * })
     */
    upsert<T extends WinesUpsertArgs>(args: SelectSubset<T, WinesUpsertArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinesCountArgs} args - Arguments to filter Wines to count.
     * @example
     * // Count the number of Wines
     * const count = await prisma.wines.count({
     *   where: {
     *     // ... the filter for the Wines we want to count
     *   }
     * })
    **/
    count<T extends WinesCountArgs>(
      args?: Subset<T, WinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WinesAggregateArgs>(args: Subset<T, WinesAggregateArgs>): Prisma.PrismaPromise<GetWinesAggregateType<T>>

    /**
     * Group by Wines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WinesGroupByArgs['orderBy'] }
        : { orderBy?: WinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wines model
   */
  readonly fields: WinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends WineTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WineTypeDefaultArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    WineCount<T extends Wines$WineCountArgs<ExtArgs> = {}>(args?: Subset<T, Wines$WineCountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wines model
   */
  interface WinesFieldRefs {
    readonly id: FieldRef<"Wines", 'String'>
    readonly name: FieldRef<"Wines", 'String'>
    readonly country: FieldRef<"Wines", 'String'>
    readonly region: FieldRef<"Wines", 'String'>
    readonly price: FieldRef<"Wines", 'Int'>
    readonly typeId: FieldRef<"Wines", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wines findUnique
   */
  export type WinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * Filter, which Wines to fetch.
     */
    where: WinesWhereUniqueInput
  }

  /**
   * Wines findUniqueOrThrow
   */
  export type WinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * Filter, which Wines to fetch.
     */
    where: WinesWhereUniqueInput
  }

  /**
   * Wines findFirst
   */
  export type WinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * Filter, which Wines to fetch.
     */
    where?: WinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wines to fetch.
     */
    orderBy?: WinesOrderByWithRelationInput | WinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wines.
     */
    cursor?: WinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wines.
     */
    distinct?: WinesScalarFieldEnum | WinesScalarFieldEnum[]
  }

  /**
   * Wines findFirstOrThrow
   */
  export type WinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * Filter, which Wines to fetch.
     */
    where?: WinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wines to fetch.
     */
    orderBy?: WinesOrderByWithRelationInput | WinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wines.
     */
    cursor?: WinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wines.
     */
    distinct?: WinesScalarFieldEnum | WinesScalarFieldEnum[]
  }

  /**
   * Wines findMany
   */
  export type WinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * Filter, which Wines to fetch.
     */
    where?: WinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wines to fetch.
     */
    orderBy?: WinesOrderByWithRelationInput | WinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wines.
     */
    cursor?: WinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wines.
     */
    skip?: number
    distinct?: WinesScalarFieldEnum | WinesScalarFieldEnum[]
  }

  /**
   * Wines create
   */
  export type WinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * The data needed to create a Wines.
     */
    data: XOR<WinesCreateInput, WinesUncheckedCreateInput>
  }

  /**
   * Wines createMany
   */
  export type WinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wines.
     */
    data: WinesCreateManyInput | WinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wines createManyAndReturn
   */
  export type WinesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * The data used to create many Wines.
     */
    data: WinesCreateManyInput | WinesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wines update
   */
  export type WinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * The data needed to update a Wines.
     */
    data: XOR<WinesUpdateInput, WinesUncheckedUpdateInput>
    /**
     * Choose, which Wines to update.
     */
    where: WinesWhereUniqueInput
  }

  /**
   * Wines updateMany
   */
  export type WinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wines.
     */
    data: XOR<WinesUpdateManyMutationInput, WinesUncheckedUpdateManyInput>
    /**
     * Filter which Wines to update
     */
    where?: WinesWhereInput
    /**
     * Limit how many Wines to update.
     */
    limit?: number
  }

  /**
   * Wines updateManyAndReturn
   */
  export type WinesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * The data used to update Wines.
     */
    data: XOR<WinesUpdateManyMutationInput, WinesUncheckedUpdateManyInput>
    /**
     * Filter which Wines to update
     */
    where?: WinesWhereInput
    /**
     * Limit how many Wines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wines upsert
   */
  export type WinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * The filter to search for the Wines to update in case it exists.
     */
    where: WinesWhereUniqueInput
    /**
     * In case the Wines found by the `where` argument doesn't exist, create a new Wines with this data.
     */
    create: XOR<WinesCreateInput, WinesUncheckedCreateInput>
    /**
     * In case the Wines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WinesUpdateInput, WinesUncheckedUpdateInput>
  }

  /**
   * Wines delete
   */
  export type WinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    /**
     * Filter which Wines to delete.
     */
    where: WinesWhereUniqueInput
  }

  /**
   * Wines deleteMany
   */
  export type WinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wines to delete
     */
    where?: WinesWhereInput
    /**
     * Limit how many Wines to delete.
     */
    limit?: number
  }

  /**
   * Wines.WineCount
   */
  export type Wines$WineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    where?: WineCountWhereInput
    orderBy?: WineCountOrderByWithRelationInput | WineCountOrderByWithRelationInput[]
    cursor?: WineCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WineCountScalarFieldEnum | WineCountScalarFieldEnum[]
  }

  /**
   * Wines without action
   */
  export type WinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
  }


  /**
   * Model WineType
   */

  export type AggregateWineType = {
    _count: WineTypeCountAggregateOutputType | null
    _min: WineTypeMinAggregateOutputType | null
    _max: WineTypeMaxAggregateOutputType | null
  }

  export type WineTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type WineTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type WineTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type WineTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type WineTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type WineTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type WineTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WineType to aggregate.
     */
    where?: WineTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineTypes to fetch.
     */
    orderBy?: WineTypeOrderByWithRelationInput | WineTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WineTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WineTypes
    **/
    _count?: true | WineTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WineTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WineTypeMaxAggregateInputType
  }

  export type GetWineTypeAggregateType<T extends WineTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateWineType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWineType[P]>
      : GetScalarType<T[P], AggregateWineType[P]>
  }




  export type WineTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WineTypeWhereInput
    orderBy?: WineTypeOrderByWithAggregationInput | WineTypeOrderByWithAggregationInput[]
    by: WineTypeScalarFieldEnum[] | WineTypeScalarFieldEnum
    having?: WineTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WineTypeCountAggregateInputType | true
    _min?: WineTypeMinAggregateInputType
    _max?: WineTypeMaxAggregateInputType
  }

  export type WineTypeGroupByOutputType = {
    id: string
    name: string
    _count: WineTypeCountAggregateOutputType | null
    _min: WineTypeMinAggregateOutputType | null
    _max: WineTypeMaxAggregateOutputType | null
  }

  type GetWineTypeGroupByPayload<T extends WineTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WineTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WineTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WineTypeGroupByOutputType[P]>
            : GetScalarType<T[P], WineTypeGroupByOutputType[P]>
        }
      >
    >


  export type WineTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    wines?: boolean | WineType$winesArgs<ExtArgs>
    _count?: boolean | WineTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wineType"]>

  export type WineTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["wineType"]>

  export type WineTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["wineType"]>

  export type WineTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type WineTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["wineType"]>
  export type WineTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wines?: boolean | WineType$winesArgs<ExtArgs>
    _count?: boolean | WineTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WineTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WineTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WineTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WineType"
    objects: {
      wines: Prisma.$WinesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["wineType"]>
    composites: {}
  }

  type WineTypeGetPayload<S extends boolean | null | undefined | WineTypeDefaultArgs> = $Result.GetResult<Prisma.$WineTypePayload, S>

  type WineTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WineTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WineTypeCountAggregateInputType | true
    }

  export interface WineTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WineType'], meta: { name: 'WineType' } }
    /**
     * Find zero or one WineType that matches the filter.
     * @param {WineTypeFindUniqueArgs} args - Arguments to find a WineType
     * @example
     * // Get one WineType
     * const wineType = await prisma.wineType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WineTypeFindUniqueArgs>(args: SelectSubset<T, WineTypeFindUniqueArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WineType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WineTypeFindUniqueOrThrowArgs} args - Arguments to find a WineType
     * @example
     * // Get one WineType
     * const wineType = await prisma.wineType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WineTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, WineTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WineType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineTypeFindFirstArgs} args - Arguments to find a WineType
     * @example
     * // Get one WineType
     * const wineType = await prisma.wineType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WineTypeFindFirstArgs>(args?: SelectSubset<T, WineTypeFindFirstArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WineType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineTypeFindFirstOrThrowArgs} args - Arguments to find a WineType
     * @example
     * // Get one WineType
     * const wineType = await prisma.wineType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WineTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, WineTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WineTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WineTypes
     * const wineTypes = await prisma.wineType.findMany()
     * 
     * // Get first 10 WineTypes
     * const wineTypes = await prisma.wineType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wineTypeWithIdOnly = await prisma.wineType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WineTypeFindManyArgs>(args?: SelectSubset<T, WineTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WineType.
     * @param {WineTypeCreateArgs} args - Arguments to create a WineType.
     * @example
     * // Create one WineType
     * const WineType = await prisma.wineType.create({
     *   data: {
     *     // ... data to create a WineType
     *   }
     * })
     * 
     */
    create<T extends WineTypeCreateArgs>(args: SelectSubset<T, WineTypeCreateArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WineTypes.
     * @param {WineTypeCreateManyArgs} args - Arguments to create many WineTypes.
     * @example
     * // Create many WineTypes
     * const wineType = await prisma.wineType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WineTypeCreateManyArgs>(args?: SelectSubset<T, WineTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WineTypes and returns the data saved in the database.
     * @param {WineTypeCreateManyAndReturnArgs} args - Arguments to create many WineTypes.
     * @example
     * // Create many WineTypes
     * const wineType = await prisma.wineType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WineTypes and only return the `id`
     * const wineTypeWithIdOnly = await prisma.wineType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WineTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, WineTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WineType.
     * @param {WineTypeDeleteArgs} args - Arguments to delete one WineType.
     * @example
     * // Delete one WineType
     * const WineType = await prisma.wineType.delete({
     *   where: {
     *     // ... filter to delete one WineType
     *   }
     * })
     * 
     */
    delete<T extends WineTypeDeleteArgs>(args: SelectSubset<T, WineTypeDeleteArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WineType.
     * @param {WineTypeUpdateArgs} args - Arguments to update one WineType.
     * @example
     * // Update one WineType
     * const wineType = await prisma.wineType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WineTypeUpdateArgs>(args: SelectSubset<T, WineTypeUpdateArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WineTypes.
     * @param {WineTypeDeleteManyArgs} args - Arguments to filter WineTypes to delete.
     * @example
     * // Delete a few WineTypes
     * const { count } = await prisma.wineType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WineTypeDeleteManyArgs>(args?: SelectSubset<T, WineTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WineTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WineTypes
     * const wineType = await prisma.wineType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WineTypeUpdateManyArgs>(args: SelectSubset<T, WineTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WineTypes and returns the data updated in the database.
     * @param {WineTypeUpdateManyAndReturnArgs} args - Arguments to update many WineTypes.
     * @example
     * // Update many WineTypes
     * const wineType = await prisma.wineType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WineTypes and only return the `id`
     * const wineTypeWithIdOnly = await prisma.wineType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WineTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, WineTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WineType.
     * @param {WineTypeUpsertArgs} args - Arguments to update or create a WineType.
     * @example
     * // Update or create a WineType
     * const wineType = await prisma.wineType.upsert({
     *   create: {
     *     // ... data to create a WineType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WineType we want to update
     *   }
     * })
     */
    upsert<T extends WineTypeUpsertArgs>(args: SelectSubset<T, WineTypeUpsertArgs<ExtArgs>>): Prisma__WineTypeClient<$Result.GetResult<Prisma.$WineTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WineTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineTypeCountArgs} args - Arguments to filter WineTypes to count.
     * @example
     * // Count the number of WineTypes
     * const count = await prisma.wineType.count({
     *   where: {
     *     // ... the filter for the WineTypes we want to count
     *   }
     * })
    **/
    count<T extends WineTypeCountArgs>(
      args?: Subset<T, WineTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WineTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WineType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WineTypeAggregateArgs>(args: Subset<T, WineTypeAggregateArgs>): Prisma.PrismaPromise<GetWineTypeAggregateType<T>>

    /**
     * Group by WineType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WineTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WineTypeGroupByArgs['orderBy'] }
        : { orderBy?: WineTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WineTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWineTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WineType model
   */
  readonly fields: WineTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WineType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WineTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wines<T extends WineType$winesArgs<ExtArgs> = {}>(args?: Subset<T, WineType$winesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WineType model
   */
  interface WineTypeFieldRefs {
    readonly id: FieldRef<"WineType", 'String'>
    readonly name: FieldRef<"WineType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WineType findUnique
   */
  export type WineTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * Filter, which WineType to fetch.
     */
    where: WineTypeWhereUniqueInput
  }

  /**
   * WineType findUniqueOrThrow
   */
  export type WineTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * Filter, which WineType to fetch.
     */
    where: WineTypeWhereUniqueInput
  }

  /**
   * WineType findFirst
   */
  export type WineTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * Filter, which WineType to fetch.
     */
    where?: WineTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineTypes to fetch.
     */
    orderBy?: WineTypeOrderByWithRelationInput | WineTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WineTypes.
     */
    cursor?: WineTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WineTypes.
     */
    distinct?: WineTypeScalarFieldEnum | WineTypeScalarFieldEnum[]
  }

  /**
   * WineType findFirstOrThrow
   */
  export type WineTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * Filter, which WineType to fetch.
     */
    where?: WineTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineTypes to fetch.
     */
    orderBy?: WineTypeOrderByWithRelationInput | WineTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WineTypes.
     */
    cursor?: WineTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WineTypes.
     */
    distinct?: WineTypeScalarFieldEnum | WineTypeScalarFieldEnum[]
  }

  /**
   * WineType findMany
   */
  export type WineTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * Filter, which WineTypes to fetch.
     */
    where?: WineTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineTypes to fetch.
     */
    orderBy?: WineTypeOrderByWithRelationInput | WineTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WineTypes.
     */
    cursor?: WineTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineTypes.
     */
    skip?: number
    distinct?: WineTypeScalarFieldEnum | WineTypeScalarFieldEnum[]
  }

  /**
   * WineType create
   */
  export type WineTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a WineType.
     */
    data: XOR<WineTypeCreateInput, WineTypeUncheckedCreateInput>
  }

  /**
   * WineType createMany
   */
  export type WineTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WineTypes.
     */
    data: WineTypeCreateManyInput | WineTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WineType createManyAndReturn
   */
  export type WineTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * The data used to create many WineTypes.
     */
    data: WineTypeCreateManyInput | WineTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WineType update
   */
  export type WineTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a WineType.
     */
    data: XOR<WineTypeUpdateInput, WineTypeUncheckedUpdateInput>
    /**
     * Choose, which WineType to update.
     */
    where: WineTypeWhereUniqueInput
  }

  /**
   * WineType updateMany
   */
  export type WineTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WineTypes.
     */
    data: XOR<WineTypeUpdateManyMutationInput, WineTypeUncheckedUpdateManyInput>
    /**
     * Filter which WineTypes to update
     */
    where?: WineTypeWhereInput
    /**
     * Limit how many WineTypes to update.
     */
    limit?: number
  }

  /**
   * WineType updateManyAndReturn
   */
  export type WineTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * The data used to update WineTypes.
     */
    data: XOR<WineTypeUpdateManyMutationInput, WineTypeUncheckedUpdateManyInput>
    /**
     * Filter which WineTypes to update
     */
    where?: WineTypeWhereInput
    /**
     * Limit how many WineTypes to update.
     */
    limit?: number
  }

  /**
   * WineType upsert
   */
  export type WineTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the WineType to update in case it exists.
     */
    where: WineTypeWhereUniqueInput
    /**
     * In case the WineType found by the `where` argument doesn't exist, create a new WineType with this data.
     */
    create: XOR<WineTypeCreateInput, WineTypeUncheckedCreateInput>
    /**
     * In case the WineType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WineTypeUpdateInput, WineTypeUncheckedUpdateInput>
  }

  /**
   * WineType delete
   */
  export type WineTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
    /**
     * Filter which WineType to delete.
     */
    where: WineTypeWhereUniqueInput
  }

  /**
   * WineType deleteMany
   */
  export type WineTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WineTypes to delete
     */
    where?: WineTypeWhereInput
    /**
     * Limit how many WineTypes to delete.
     */
    limit?: number
  }

  /**
   * WineType.wines
   */
  export type WineType$winesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wines
     */
    select?: WinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wines
     */
    omit?: WinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinesInclude<ExtArgs> | null
    where?: WinesWhereInput
    orderBy?: WinesOrderByWithRelationInput | WinesOrderByWithRelationInput[]
    cursor?: WinesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinesScalarFieldEnum | WinesScalarFieldEnum[]
  }

  /**
   * WineType without action
   */
  export type WineTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineType
     */
    select?: WineTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineType
     */
    omit?: WineTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineTypeInclude<ExtArgs> | null
  }


  /**
   * Model WineCount
   */

  export type AggregateWineCount = {
    _count: WineCountCountAggregateOutputType | null
    _avg: WineCountAvgAggregateOutputType | null
    _sum: WineCountSumAggregateOutputType | null
    _min: WineCountMinAggregateOutputType | null
    _max: WineCountMaxAggregateOutputType | null
  }

  export type WineCountAvgAggregateOutputType = {
    balance: number | null
    count: number | null
    invoice: number | null
  }

  export type WineCountSumAggregateOutputType = {
    balance: number | null
    count: number | null
    invoice: number | null
  }

  export type WineCountMinAggregateOutputType = {
    id: string | null
    balance: number | null
    count: number | null
    invoice: number | null
    wineId: string | null
  }

  export type WineCountMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    count: number | null
    invoice: number | null
    wineId: string | null
  }

  export type WineCountCountAggregateOutputType = {
    id: number
    balance: number
    count: number
    invoice: number
    wineId: number
    _all: number
  }


  export type WineCountAvgAggregateInputType = {
    balance?: true
    count?: true
    invoice?: true
  }

  export type WineCountSumAggregateInputType = {
    balance?: true
    count?: true
    invoice?: true
  }

  export type WineCountMinAggregateInputType = {
    id?: true
    balance?: true
    count?: true
    invoice?: true
    wineId?: true
  }

  export type WineCountMaxAggregateInputType = {
    id?: true
    balance?: true
    count?: true
    invoice?: true
    wineId?: true
  }

  export type WineCountCountAggregateInputType = {
    id?: true
    balance?: true
    count?: true
    invoice?: true
    wineId?: true
    _all?: true
  }

  export type WineCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WineCount to aggregate.
     */
    where?: WineCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineCounts to fetch.
     */
    orderBy?: WineCountOrderByWithRelationInput | WineCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WineCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WineCounts
    **/
    _count?: true | WineCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WineCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WineCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WineCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WineCountMaxAggregateInputType
  }

  export type GetWineCountAggregateType<T extends WineCountAggregateArgs> = {
        [P in keyof T & keyof AggregateWineCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWineCount[P]>
      : GetScalarType<T[P], AggregateWineCount[P]>
  }




  export type WineCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WineCountWhereInput
    orderBy?: WineCountOrderByWithAggregationInput | WineCountOrderByWithAggregationInput[]
    by: WineCountScalarFieldEnum[] | WineCountScalarFieldEnum
    having?: WineCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WineCountCountAggregateInputType | true
    _avg?: WineCountAvgAggregateInputType
    _sum?: WineCountSumAggregateInputType
    _min?: WineCountMinAggregateInputType
    _max?: WineCountMaxAggregateInputType
  }

  export type WineCountGroupByOutputType = {
    id: string
    balance: number
    count: number | null
    invoice: number | null
    wineId: string
    _count: WineCountCountAggregateOutputType | null
    _avg: WineCountAvgAggregateOutputType | null
    _sum: WineCountSumAggregateOutputType | null
    _min: WineCountMinAggregateOutputType | null
    _max: WineCountMaxAggregateOutputType | null
  }

  type GetWineCountGroupByPayload<T extends WineCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WineCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WineCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WineCountGroupByOutputType[P]>
            : GetScalarType<T[P], WineCountGroupByOutputType[P]>
        }
      >
    >


  export type WineCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    count?: boolean
    invoice?: boolean
    wineId?: boolean
    wine?: boolean | WinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wineCount"]>

  export type WineCountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    count?: boolean
    invoice?: boolean
    wineId?: boolean
    wine?: boolean | WinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wineCount"]>

  export type WineCountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    count?: boolean
    invoice?: boolean
    wineId?: boolean
    wine?: boolean | WinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wineCount"]>

  export type WineCountSelectScalar = {
    id?: boolean
    balance?: boolean
    count?: boolean
    invoice?: boolean
    wineId?: boolean
  }

  export type WineCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "count" | "invoice" | "wineId", ExtArgs["result"]["wineCount"]>
  export type WineCountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wine?: boolean | WinesDefaultArgs<ExtArgs>
  }
  export type WineCountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wine?: boolean | WinesDefaultArgs<ExtArgs>
  }
  export type WineCountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wine?: boolean | WinesDefaultArgs<ExtArgs>
  }

  export type $WineCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WineCount"
    objects: {
      wine: Prisma.$WinesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: number
      count: number | null
      invoice: number | null
      wineId: string
    }, ExtArgs["result"]["wineCount"]>
    composites: {}
  }

  type WineCountGetPayload<S extends boolean | null | undefined | WineCountDefaultArgs> = $Result.GetResult<Prisma.$WineCountPayload, S>

  type WineCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WineCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WineCountCountAggregateInputType | true
    }

  export interface WineCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WineCount'], meta: { name: 'WineCount' } }
    /**
     * Find zero or one WineCount that matches the filter.
     * @param {WineCountFindUniqueArgs} args - Arguments to find a WineCount
     * @example
     * // Get one WineCount
     * const wineCount = await prisma.wineCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WineCountFindUniqueArgs>(args: SelectSubset<T, WineCountFindUniqueArgs<ExtArgs>>): Prisma__WineCountClient<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WineCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WineCountFindUniqueOrThrowArgs} args - Arguments to find a WineCount
     * @example
     * // Get one WineCount
     * const wineCount = await prisma.wineCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WineCountFindUniqueOrThrowArgs>(args: SelectSubset<T, WineCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WineCountClient<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WineCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineCountFindFirstArgs} args - Arguments to find a WineCount
     * @example
     * // Get one WineCount
     * const wineCount = await prisma.wineCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WineCountFindFirstArgs>(args?: SelectSubset<T, WineCountFindFirstArgs<ExtArgs>>): Prisma__WineCountClient<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WineCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineCountFindFirstOrThrowArgs} args - Arguments to find a WineCount
     * @example
     * // Get one WineCount
     * const wineCount = await prisma.wineCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WineCountFindFirstOrThrowArgs>(args?: SelectSubset<T, WineCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__WineCountClient<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WineCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WineCounts
     * const wineCounts = await prisma.wineCount.findMany()
     * 
     * // Get first 10 WineCounts
     * const wineCounts = await prisma.wineCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wineCountWithIdOnly = await prisma.wineCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WineCountFindManyArgs>(args?: SelectSubset<T, WineCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WineCount.
     * @param {WineCountCreateArgs} args - Arguments to create a WineCount.
     * @example
     * // Create one WineCount
     * const WineCount = await prisma.wineCount.create({
     *   data: {
     *     // ... data to create a WineCount
     *   }
     * })
     * 
     */
    create<T extends WineCountCreateArgs>(args: SelectSubset<T, WineCountCreateArgs<ExtArgs>>): Prisma__WineCountClient<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WineCounts.
     * @param {WineCountCreateManyArgs} args - Arguments to create many WineCounts.
     * @example
     * // Create many WineCounts
     * const wineCount = await prisma.wineCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WineCountCreateManyArgs>(args?: SelectSubset<T, WineCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WineCounts and returns the data saved in the database.
     * @param {WineCountCreateManyAndReturnArgs} args - Arguments to create many WineCounts.
     * @example
     * // Create many WineCounts
     * const wineCount = await prisma.wineCount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WineCounts and only return the `id`
     * const wineCountWithIdOnly = await prisma.wineCount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WineCountCreateManyAndReturnArgs>(args?: SelectSubset<T, WineCountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WineCount.
     * @param {WineCountDeleteArgs} args - Arguments to delete one WineCount.
     * @example
     * // Delete one WineCount
     * const WineCount = await prisma.wineCount.delete({
     *   where: {
     *     // ... filter to delete one WineCount
     *   }
     * })
     * 
     */
    delete<T extends WineCountDeleteArgs>(args: SelectSubset<T, WineCountDeleteArgs<ExtArgs>>): Prisma__WineCountClient<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WineCount.
     * @param {WineCountUpdateArgs} args - Arguments to update one WineCount.
     * @example
     * // Update one WineCount
     * const wineCount = await prisma.wineCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WineCountUpdateArgs>(args: SelectSubset<T, WineCountUpdateArgs<ExtArgs>>): Prisma__WineCountClient<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WineCounts.
     * @param {WineCountDeleteManyArgs} args - Arguments to filter WineCounts to delete.
     * @example
     * // Delete a few WineCounts
     * const { count } = await prisma.wineCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WineCountDeleteManyArgs>(args?: SelectSubset<T, WineCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WineCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WineCounts
     * const wineCount = await prisma.wineCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WineCountUpdateManyArgs>(args: SelectSubset<T, WineCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WineCounts and returns the data updated in the database.
     * @param {WineCountUpdateManyAndReturnArgs} args - Arguments to update many WineCounts.
     * @example
     * // Update many WineCounts
     * const wineCount = await prisma.wineCount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WineCounts and only return the `id`
     * const wineCountWithIdOnly = await prisma.wineCount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WineCountUpdateManyAndReturnArgs>(args: SelectSubset<T, WineCountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WineCount.
     * @param {WineCountUpsertArgs} args - Arguments to update or create a WineCount.
     * @example
     * // Update or create a WineCount
     * const wineCount = await prisma.wineCount.upsert({
     *   create: {
     *     // ... data to create a WineCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WineCount we want to update
     *   }
     * })
     */
    upsert<T extends WineCountUpsertArgs>(args: SelectSubset<T, WineCountUpsertArgs<ExtArgs>>): Prisma__WineCountClient<$Result.GetResult<Prisma.$WineCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WineCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineCountCountArgs} args - Arguments to filter WineCounts to count.
     * @example
     * // Count the number of WineCounts
     * const count = await prisma.wineCount.count({
     *   where: {
     *     // ... the filter for the WineCounts we want to count
     *   }
     * })
    **/
    count<T extends WineCountCountArgs>(
      args?: Subset<T, WineCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WineCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WineCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WineCountAggregateArgs>(args: Subset<T, WineCountAggregateArgs>): Prisma.PrismaPromise<GetWineCountAggregateType<T>>

    /**
     * Group by WineCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineCountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WineCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WineCountGroupByArgs['orderBy'] }
        : { orderBy?: WineCountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WineCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWineCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WineCount model
   */
  readonly fields: WineCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WineCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WineCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wine<T extends WinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WinesDefaultArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WineCount model
   */
  interface WineCountFieldRefs {
    readonly id: FieldRef<"WineCount", 'String'>
    readonly balance: FieldRef<"WineCount", 'Int'>
    readonly count: FieldRef<"WineCount", 'Int'>
    readonly invoice: FieldRef<"WineCount", 'Int'>
    readonly wineId: FieldRef<"WineCount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WineCount findUnique
   */
  export type WineCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * Filter, which WineCount to fetch.
     */
    where: WineCountWhereUniqueInput
  }

  /**
   * WineCount findUniqueOrThrow
   */
  export type WineCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * Filter, which WineCount to fetch.
     */
    where: WineCountWhereUniqueInput
  }

  /**
   * WineCount findFirst
   */
  export type WineCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * Filter, which WineCount to fetch.
     */
    where?: WineCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineCounts to fetch.
     */
    orderBy?: WineCountOrderByWithRelationInput | WineCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WineCounts.
     */
    cursor?: WineCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WineCounts.
     */
    distinct?: WineCountScalarFieldEnum | WineCountScalarFieldEnum[]
  }

  /**
   * WineCount findFirstOrThrow
   */
  export type WineCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * Filter, which WineCount to fetch.
     */
    where?: WineCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineCounts to fetch.
     */
    orderBy?: WineCountOrderByWithRelationInput | WineCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WineCounts.
     */
    cursor?: WineCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WineCounts.
     */
    distinct?: WineCountScalarFieldEnum | WineCountScalarFieldEnum[]
  }

  /**
   * WineCount findMany
   */
  export type WineCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * Filter, which WineCounts to fetch.
     */
    where?: WineCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineCounts to fetch.
     */
    orderBy?: WineCountOrderByWithRelationInput | WineCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WineCounts.
     */
    cursor?: WineCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineCounts.
     */
    skip?: number
    distinct?: WineCountScalarFieldEnum | WineCountScalarFieldEnum[]
  }

  /**
   * WineCount create
   */
  export type WineCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * The data needed to create a WineCount.
     */
    data: XOR<WineCountCreateInput, WineCountUncheckedCreateInput>
  }

  /**
   * WineCount createMany
   */
  export type WineCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WineCounts.
     */
    data: WineCountCreateManyInput | WineCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WineCount createManyAndReturn
   */
  export type WineCountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * The data used to create many WineCounts.
     */
    data: WineCountCreateManyInput | WineCountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WineCount update
   */
  export type WineCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * The data needed to update a WineCount.
     */
    data: XOR<WineCountUpdateInput, WineCountUncheckedUpdateInput>
    /**
     * Choose, which WineCount to update.
     */
    where: WineCountWhereUniqueInput
  }

  /**
   * WineCount updateMany
   */
  export type WineCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WineCounts.
     */
    data: XOR<WineCountUpdateManyMutationInput, WineCountUncheckedUpdateManyInput>
    /**
     * Filter which WineCounts to update
     */
    where?: WineCountWhereInput
    /**
     * Limit how many WineCounts to update.
     */
    limit?: number
  }

  /**
   * WineCount updateManyAndReturn
   */
  export type WineCountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * The data used to update WineCounts.
     */
    data: XOR<WineCountUpdateManyMutationInput, WineCountUncheckedUpdateManyInput>
    /**
     * Filter which WineCounts to update
     */
    where?: WineCountWhereInput
    /**
     * Limit how many WineCounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WineCount upsert
   */
  export type WineCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * The filter to search for the WineCount to update in case it exists.
     */
    where: WineCountWhereUniqueInput
    /**
     * In case the WineCount found by the `where` argument doesn't exist, create a new WineCount with this data.
     */
    create: XOR<WineCountCreateInput, WineCountUncheckedCreateInput>
    /**
     * In case the WineCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WineCountUpdateInput, WineCountUncheckedUpdateInput>
  }

  /**
   * WineCount delete
   */
  export type WineCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
    /**
     * Filter which WineCount to delete.
     */
    where: WineCountWhereUniqueInput
  }

  /**
   * WineCount deleteMany
   */
  export type WineCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WineCounts to delete
     */
    where?: WineCountWhereInput
    /**
     * Limit how many WineCounts to delete.
     */
    limit?: number
  }

  /**
   * WineCount without action
   */
  export type WineCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineCount
     */
    select?: WineCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineCount
     */
    omit?: WineCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineCountInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WinesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    region: 'region',
    price: 'price',
    typeId: 'typeId'
  };

  export type WinesScalarFieldEnum = (typeof WinesScalarFieldEnum)[keyof typeof WinesScalarFieldEnum]


  export const WineTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type WineTypeScalarFieldEnum = (typeof WineTypeScalarFieldEnum)[keyof typeof WineTypeScalarFieldEnum]


  export const WineCountScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    count: 'count',
    invoice: 'invoice',
    wineId: 'wineId'
  };

  export type WineCountScalarFieldEnum = (typeof WineCountScalarFieldEnum)[keyof typeof WineCountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WinesWhereInput = {
    AND?: WinesWhereInput | WinesWhereInput[]
    OR?: WinesWhereInput[]
    NOT?: WinesWhereInput | WinesWhereInput[]
    id?: StringFilter<"Wines"> | string
    name?: StringFilter<"Wines"> | string
    country?: StringNullableFilter<"Wines"> | string | null
    region?: StringNullableFilter<"Wines"> | string | null
    price?: IntFilter<"Wines"> | number
    typeId?: StringFilter<"Wines"> | string
    type?: XOR<WineTypeScalarRelationFilter, WineTypeWhereInput>
    WineCount?: WineCountListRelationFilter
  }

  export type WinesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    price?: SortOrder
    typeId?: SortOrder
    type?: WineTypeOrderByWithRelationInput
    WineCount?: WineCountOrderByRelationAggregateInput
  }

  export type WinesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WinesWhereInput | WinesWhereInput[]
    OR?: WinesWhereInput[]
    NOT?: WinesWhereInput | WinesWhereInput[]
    name?: StringFilter<"Wines"> | string
    country?: StringNullableFilter<"Wines"> | string | null
    region?: StringNullableFilter<"Wines"> | string | null
    price?: IntFilter<"Wines"> | number
    typeId?: StringFilter<"Wines"> | string
    type?: XOR<WineTypeScalarRelationFilter, WineTypeWhereInput>
    WineCount?: WineCountListRelationFilter
  }, "id">

  export type WinesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    price?: SortOrder
    typeId?: SortOrder
    _count?: WinesCountOrderByAggregateInput
    _avg?: WinesAvgOrderByAggregateInput
    _max?: WinesMaxOrderByAggregateInput
    _min?: WinesMinOrderByAggregateInput
    _sum?: WinesSumOrderByAggregateInput
  }

  export type WinesScalarWhereWithAggregatesInput = {
    AND?: WinesScalarWhereWithAggregatesInput | WinesScalarWhereWithAggregatesInput[]
    OR?: WinesScalarWhereWithAggregatesInput[]
    NOT?: WinesScalarWhereWithAggregatesInput | WinesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wines"> | string
    name?: StringWithAggregatesFilter<"Wines"> | string
    country?: StringNullableWithAggregatesFilter<"Wines"> | string | null
    region?: StringNullableWithAggregatesFilter<"Wines"> | string | null
    price?: IntWithAggregatesFilter<"Wines"> | number
    typeId?: StringWithAggregatesFilter<"Wines"> | string
  }

  export type WineTypeWhereInput = {
    AND?: WineTypeWhereInput | WineTypeWhereInput[]
    OR?: WineTypeWhereInput[]
    NOT?: WineTypeWhereInput | WineTypeWhereInput[]
    id?: StringFilter<"WineType"> | string
    name?: StringFilter<"WineType"> | string
    wines?: WinesListRelationFilter
  }

  export type WineTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    wines?: WinesOrderByRelationAggregateInput
  }

  export type WineTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WineTypeWhereInput | WineTypeWhereInput[]
    OR?: WineTypeWhereInput[]
    NOT?: WineTypeWhereInput | WineTypeWhereInput[]
    name?: StringFilter<"WineType"> | string
    wines?: WinesListRelationFilter
  }, "id">

  export type WineTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: WineTypeCountOrderByAggregateInput
    _max?: WineTypeMaxOrderByAggregateInput
    _min?: WineTypeMinOrderByAggregateInput
  }

  export type WineTypeScalarWhereWithAggregatesInput = {
    AND?: WineTypeScalarWhereWithAggregatesInput | WineTypeScalarWhereWithAggregatesInput[]
    OR?: WineTypeScalarWhereWithAggregatesInput[]
    NOT?: WineTypeScalarWhereWithAggregatesInput | WineTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WineType"> | string
    name?: StringWithAggregatesFilter<"WineType"> | string
  }

  export type WineCountWhereInput = {
    AND?: WineCountWhereInput | WineCountWhereInput[]
    OR?: WineCountWhereInput[]
    NOT?: WineCountWhereInput | WineCountWhereInput[]
    id?: StringFilter<"WineCount"> | string
    balance?: IntFilter<"WineCount"> | number
    count?: IntNullableFilter<"WineCount"> | number | null
    invoice?: IntNullableFilter<"WineCount"> | number | null
    wineId?: StringFilter<"WineCount"> | string
    wine?: XOR<WinesScalarRelationFilter, WinesWhereInput>
  }

  export type WineCountOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    count?: SortOrderInput | SortOrder
    invoice?: SortOrderInput | SortOrder
    wineId?: SortOrder
    wine?: WinesOrderByWithRelationInput
  }

  export type WineCountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WineCountWhereInput | WineCountWhereInput[]
    OR?: WineCountWhereInput[]
    NOT?: WineCountWhereInput | WineCountWhereInput[]
    balance?: IntFilter<"WineCount"> | number
    count?: IntNullableFilter<"WineCount"> | number | null
    invoice?: IntNullableFilter<"WineCount"> | number | null
    wineId?: StringFilter<"WineCount"> | string
    wine?: XOR<WinesScalarRelationFilter, WinesWhereInput>
  }, "id">

  export type WineCountOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    count?: SortOrderInput | SortOrder
    invoice?: SortOrderInput | SortOrder
    wineId?: SortOrder
    _count?: WineCountCountOrderByAggregateInput
    _avg?: WineCountAvgOrderByAggregateInput
    _max?: WineCountMaxOrderByAggregateInput
    _min?: WineCountMinOrderByAggregateInput
    _sum?: WineCountSumOrderByAggregateInput
  }

  export type WineCountScalarWhereWithAggregatesInput = {
    AND?: WineCountScalarWhereWithAggregatesInput | WineCountScalarWhereWithAggregatesInput[]
    OR?: WineCountScalarWhereWithAggregatesInput[]
    NOT?: WineCountScalarWhereWithAggregatesInput | WineCountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WineCount"> | string
    balance?: IntWithAggregatesFilter<"WineCount"> | number
    count?: IntNullableWithAggregatesFilter<"WineCount"> | number | null
    invoice?: IntNullableWithAggregatesFilter<"WineCount"> | number | null
    wineId?: StringWithAggregatesFilter<"WineCount"> | string
  }

  export type WinesCreateInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    type: WineTypeCreateNestedOneWithoutWinesInput
    WineCount?: WineCountCreateNestedManyWithoutWineInput
  }

  export type WinesUncheckedCreateInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    typeId: string
    WineCount?: WineCountUncheckedCreateNestedManyWithoutWineInput
  }

  export type WinesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    type?: WineTypeUpdateOneRequiredWithoutWinesNestedInput
    WineCount?: WineCountUpdateManyWithoutWineNestedInput
  }

  export type WinesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    typeId?: StringFieldUpdateOperationsInput | string
    WineCount?: WineCountUncheckedUpdateManyWithoutWineNestedInput
  }

  export type WinesCreateManyInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    typeId: string
  }

  export type WinesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
  }

  export type WinesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type WineTypeCreateInput = {
    id?: string
    name: string
    wines?: WinesCreateNestedManyWithoutTypeInput
  }

  export type WineTypeUncheckedCreateInput = {
    id?: string
    name: string
    wines?: WinesUncheckedCreateNestedManyWithoutTypeInput
  }

  export type WineTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wines?: WinesUpdateManyWithoutTypeNestedInput
  }

  export type WineTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wines?: WinesUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type WineTypeCreateManyInput = {
    id?: string
    name: string
  }

  export type WineTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WineTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WineCountCreateInput = {
    id?: string
    balance: number
    count?: number | null
    invoice?: number | null
    wine: WinesCreateNestedOneWithoutWineCountInput
  }

  export type WineCountUncheckedCreateInput = {
    id?: string
    balance: number
    count?: number | null
    invoice?: number | null
    wineId: string
  }

  export type WineCountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    invoice?: NullableIntFieldUpdateOperationsInput | number | null
    wine?: WinesUpdateOneRequiredWithoutWineCountNestedInput
  }

  export type WineCountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    invoice?: NullableIntFieldUpdateOperationsInput | number | null
    wineId?: StringFieldUpdateOperationsInput | string
  }

  export type WineCountCreateManyInput = {
    id?: string
    balance: number
    count?: number | null
    invoice?: number | null
    wineId: string
  }

  export type WineCountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    invoice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WineCountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    invoice?: NullableIntFieldUpdateOperationsInput | number | null
    wineId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WineTypeScalarRelationFilter = {
    is?: WineTypeWhereInput
    isNot?: WineTypeWhereInput
  }

  export type WineCountListRelationFilter = {
    every?: WineCountWhereInput
    some?: WineCountWhereInput
    none?: WineCountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WineCountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WinesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    price?: SortOrder
    typeId?: SortOrder
  }

  export type WinesAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type WinesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    price?: SortOrder
    typeId?: SortOrder
  }

  export type WinesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    price?: SortOrder
    typeId?: SortOrder
  }

  export type WinesSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type WinesListRelationFilter = {
    every?: WinesWhereInput
    some?: WinesWhereInput
    none?: WinesWhereInput
  }

  export type WinesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WineTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WineTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WineTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WinesScalarRelationFilter = {
    is?: WinesWhereInput
    isNot?: WinesWhereInput
  }

  export type WineCountCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    count?: SortOrder
    invoice?: SortOrder
    wineId?: SortOrder
  }

  export type WineCountAvgOrderByAggregateInput = {
    balance?: SortOrder
    count?: SortOrder
    invoice?: SortOrder
  }

  export type WineCountMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    count?: SortOrder
    invoice?: SortOrder
    wineId?: SortOrder
  }

  export type WineCountMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    count?: SortOrder
    invoice?: SortOrder
    wineId?: SortOrder
  }

  export type WineCountSumOrderByAggregateInput = {
    balance?: SortOrder
    count?: SortOrder
    invoice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type WineTypeCreateNestedOneWithoutWinesInput = {
    create?: XOR<WineTypeCreateWithoutWinesInput, WineTypeUncheckedCreateWithoutWinesInput>
    connectOrCreate?: WineTypeCreateOrConnectWithoutWinesInput
    connect?: WineTypeWhereUniqueInput
  }

  export type WineCountCreateNestedManyWithoutWineInput = {
    create?: XOR<WineCountCreateWithoutWineInput, WineCountUncheckedCreateWithoutWineInput> | WineCountCreateWithoutWineInput[] | WineCountUncheckedCreateWithoutWineInput[]
    connectOrCreate?: WineCountCreateOrConnectWithoutWineInput | WineCountCreateOrConnectWithoutWineInput[]
    createMany?: WineCountCreateManyWineInputEnvelope
    connect?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
  }

  export type WineCountUncheckedCreateNestedManyWithoutWineInput = {
    create?: XOR<WineCountCreateWithoutWineInput, WineCountUncheckedCreateWithoutWineInput> | WineCountCreateWithoutWineInput[] | WineCountUncheckedCreateWithoutWineInput[]
    connectOrCreate?: WineCountCreateOrConnectWithoutWineInput | WineCountCreateOrConnectWithoutWineInput[]
    createMany?: WineCountCreateManyWineInputEnvelope
    connect?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WineTypeUpdateOneRequiredWithoutWinesNestedInput = {
    create?: XOR<WineTypeCreateWithoutWinesInput, WineTypeUncheckedCreateWithoutWinesInput>
    connectOrCreate?: WineTypeCreateOrConnectWithoutWinesInput
    upsert?: WineTypeUpsertWithoutWinesInput
    connect?: WineTypeWhereUniqueInput
    update?: XOR<XOR<WineTypeUpdateToOneWithWhereWithoutWinesInput, WineTypeUpdateWithoutWinesInput>, WineTypeUncheckedUpdateWithoutWinesInput>
  }

  export type WineCountUpdateManyWithoutWineNestedInput = {
    create?: XOR<WineCountCreateWithoutWineInput, WineCountUncheckedCreateWithoutWineInput> | WineCountCreateWithoutWineInput[] | WineCountUncheckedCreateWithoutWineInput[]
    connectOrCreate?: WineCountCreateOrConnectWithoutWineInput | WineCountCreateOrConnectWithoutWineInput[]
    upsert?: WineCountUpsertWithWhereUniqueWithoutWineInput | WineCountUpsertWithWhereUniqueWithoutWineInput[]
    createMany?: WineCountCreateManyWineInputEnvelope
    set?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
    disconnect?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
    delete?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
    connect?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
    update?: WineCountUpdateWithWhereUniqueWithoutWineInput | WineCountUpdateWithWhereUniqueWithoutWineInput[]
    updateMany?: WineCountUpdateManyWithWhereWithoutWineInput | WineCountUpdateManyWithWhereWithoutWineInput[]
    deleteMany?: WineCountScalarWhereInput | WineCountScalarWhereInput[]
  }

  export type WineCountUncheckedUpdateManyWithoutWineNestedInput = {
    create?: XOR<WineCountCreateWithoutWineInput, WineCountUncheckedCreateWithoutWineInput> | WineCountCreateWithoutWineInput[] | WineCountUncheckedCreateWithoutWineInput[]
    connectOrCreate?: WineCountCreateOrConnectWithoutWineInput | WineCountCreateOrConnectWithoutWineInput[]
    upsert?: WineCountUpsertWithWhereUniqueWithoutWineInput | WineCountUpsertWithWhereUniqueWithoutWineInput[]
    createMany?: WineCountCreateManyWineInputEnvelope
    set?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
    disconnect?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
    delete?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
    connect?: WineCountWhereUniqueInput | WineCountWhereUniqueInput[]
    update?: WineCountUpdateWithWhereUniqueWithoutWineInput | WineCountUpdateWithWhereUniqueWithoutWineInput[]
    updateMany?: WineCountUpdateManyWithWhereWithoutWineInput | WineCountUpdateManyWithWhereWithoutWineInput[]
    deleteMany?: WineCountScalarWhereInput | WineCountScalarWhereInput[]
  }

  export type WinesCreateNestedManyWithoutTypeInput = {
    create?: XOR<WinesCreateWithoutTypeInput, WinesUncheckedCreateWithoutTypeInput> | WinesCreateWithoutTypeInput[] | WinesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: WinesCreateOrConnectWithoutTypeInput | WinesCreateOrConnectWithoutTypeInput[]
    createMany?: WinesCreateManyTypeInputEnvelope
    connect?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
  }

  export type WinesUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<WinesCreateWithoutTypeInput, WinesUncheckedCreateWithoutTypeInput> | WinesCreateWithoutTypeInput[] | WinesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: WinesCreateOrConnectWithoutTypeInput | WinesCreateOrConnectWithoutTypeInput[]
    createMany?: WinesCreateManyTypeInputEnvelope
    connect?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
  }

  export type WinesUpdateManyWithoutTypeNestedInput = {
    create?: XOR<WinesCreateWithoutTypeInput, WinesUncheckedCreateWithoutTypeInput> | WinesCreateWithoutTypeInput[] | WinesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: WinesCreateOrConnectWithoutTypeInput | WinesCreateOrConnectWithoutTypeInput[]
    upsert?: WinesUpsertWithWhereUniqueWithoutTypeInput | WinesUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: WinesCreateManyTypeInputEnvelope
    set?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
    disconnect?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
    delete?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
    connect?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
    update?: WinesUpdateWithWhereUniqueWithoutTypeInput | WinesUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: WinesUpdateManyWithWhereWithoutTypeInput | WinesUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: WinesScalarWhereInput | WinesScalarWhereInput[]
  }

  export type WinesUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<WinesCreateWithoutTypeInput, WinesUncheckedCreateWithoutTypeInput> | WinesCreateWithoutTypeInput[] | WinesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: WinesCreateOrConnectWithoutTypeInput | WinesCreateOrConnectWithoutTypeInput[]
    upsert?: WinesUpsertWithWhereUniqueWithoutTypeInput | WinesUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: WinesCreateManyTypeInputEnvelope
    set?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
    disconnect?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
    delete?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
    connect?: WinesWhereUniqueInput | WinesWhereUniqueInput[]
    update?: WinesUpdateWithWhereUniqueWithoutTypeInput | WinesUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: WinesUpdateManyWithWhereWithoutTypeInput | WinesUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: WinesScalarWhereInput | WinesScalarWhereInput[]
  }

  export type WinesCreateNestedOneWithoutWineCountInput = {
    create?: XOR<WinesCreateWithoutWineCountInput, WinesUncheckedCreateWithoutWineCountInput>
    connectOrCreate?: WinesCreateOrConnectWithoutWineCountInput
    connect?: WinesWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WinesUpdateOneRequiredWithoutWineCountNestedInput = {
    create?: XOR<WinesCreateWithoutWineCountInput, WinesUncheckedCreateWithoutWineCountInput>
    connectOrCreate?: WinesCreateOrConnectWithoutWineCountInput
    upsert?: WinesUpsertWithoutWineCountInput
    connect?: WinesWhereUniqueInput
    update?: XOR<XOR<WinesUpdateToOneWithWhereWithoutWineCountInput, WinesUpdateWithoutWineCountInput>, WinesUncheckedUpdateWithoutWineCountInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WineTypeCreateWithoutWinesInput = {
    id?: string
    name: string
  }

  export type WineTypeUncheckedCreateWithoutWinesInput = {
    id?: string
    name: string
  }

  export type WineTypeCreateOrConnectWithoutWinesInput = {
    where: WineTypeWhereUniqueInput
    create: XOR<WineTypeCreateWithoutWinesInput, WineTypeUncheckedCreateWithoutWinesInput>
  }

  export type WineCountCreateWithoutWineInput = {
    id?: string
    balance: number
    count?: number | null
    invoice?: number | null
  }

  export type WineCountUncheckedCreateWithoutWineInput = {
    id?: string
    balance: number
    count?: number | null
    invoice?: number | null
  }

  export type WineCountCreateOrConnectWithoutWineInput = {
    where: WineCountWhereUniqueInput
    create: XOR<WineCountCreateWithoutWineInput, WineCountUncheckedCreateWithoutWineInput>
  }

  export type WineCountCreateManyWineInputEnvelope = {
    data: WineCountCreateManyWineInput | WineCountCreateManyWineInput[]
    skipDuplicates?: boolean
  }

  export type WineTypeUpsertWithoutWinesInput = {
    update: XOR<WineTypeUpdateWithoutWinesInput, WineTypeUncheckedUpdateWithoutWinesInput>
    create: XOR<WineTypeCreateWithoutWinesInput, WineTypeUncheckedCreateWithoutWinesInput>
    where?: WineTypeWhereInput
  }

  export type WineTypeUpdateToOneWithWhereWithoutWinesInput = {
    where?: WineTypeWhereInput
    data: XOR<WineTypeUpdateWithoutWinesInput, WineTypeUncheckedUpdateWithoutWinesInput>
  }

  export type WineTypeUpdateWithoutWinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WineTypeUncheckedUpdateWithoutWinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WineCountUpsertWithWhereUniqueWithoutWineInput = {
    where: WineCountWhereUniqueInput
    update: XOR<WineCountUpdateWithoutWineInput, WineCountUncheckedUpdateWithoutWineInput>
    create: XOR<WineCountCreateWithoutWineInput, WineCountUncheckedCreateWithoutWineInput>
  }

  export type WineCountUpdateWithWhereUniqueWithoutWineInput = {
    where: WineCountWhereUniqueInput
    data: XOR<WineCountUpdateWithoutWineInput, WineCountUncheckedUpdateWithoutWineInput>
  }

  export type WineCountUpdateManyWithWhereWithoutWineInput = {
    where: WineCountScalarWhereInput
    data: XOR<WineCountUpdateManyMutationInput, WineCountUncheckedUpdateManyWithoutWineInput>
  }

  export type WineCountScalarWhereInput = {
    AND?: WineCountScalarWhereInput | WineCountScalarWhereInput[]
    OR?: WineCountScalarWhereInput[]
    NOT?: WineCountScalarWhereInput | WineCountScalarWhereInput[]
    id?: StringFilter<"WineCount"> | string
    balance?: IntFilter<"WineCount"> | number
    count?: IntNullableFilter<"WineCount"> | number | null
    invoice?: IntNullableFilter<"WineCount"> | number | null
    wineId?: StringFilter<"WineCount"> | string
  }

  export type WinesCreateWithoutTypeInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    WineCount?: WineCountCreateNestedManyWithoutWineInput
  }

  export type WinesUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    WineCount?: WineCountUncheckedCreateNestedManyWithoutWineInput
  }

  export type WinesCreateOrConnectWithoutTypeInput = {
    where: WinesWhereUniqueInput
    create: XOR<WinesCreateWithoutTypeInput, WinesUncheckedCreateWithoutTypeInput>
  }

  export type WinesCreateManyTypeInputEnvelope = {
    data: WinesCreateManyTypeInput | WinesCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type WinesUpsertWithWhereUniqueWithoutTypeInput = {
    where: WinesWhereUniqueInput
    update: XOR<WinesUpdateWithoutTypeInput, WinesUncheckedUpdateWithoutTypeInput>
    create: XOR<WinesCreateWithoutTypeInput, WinesUncheckedCreateWithoutTypeInput>
  }

  export type WinesUpdateWithWhereUniqueWithoutTypeInput = {
    where: WinesWhereUniqueInput
    data: XOR<WinesUpdateWithoutTypeInput, WinesUncheckedUpdateWithoutTypeInput>
  }

  export type WinesUpdateManyWithWhereWithoutTypeInput = {
    where: WinesScalarWhereInput
    data: XOR<WinesUpdateManyMutationInput, WinesUncheckedUpdateManyWithoutTypeInput>
  }

  export type WinesScalarWhereInput = {
    AND?: WinesScalarWhereInput | WinesScalarWhereInput[]
    OR?: WinesScalarWhereInput[]
    NOT?: WinesScalarWhereInput | WinesScalarWhereInput[]
    id?: StringFilter<"Wines"> | string
    name?: StringFilter<"Wines"> | string
    country?: StringNullableFilter<"Wines"> | string | null
    region?: StringNullableFilter<"Wines"> | string | null
    price?: IntFilter<"Wines"> | number
    typeId?: StringFilter<"Wines"> | string
  }

  export type WinesCreateWithoutWineCountInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    type: WineTypeCreateNestedOneWithoutWinesInput
  }

  export type WinesUncheckedCreateWithoutWineCountInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    typeId: string
  }

  export type WinesCreateOrConnectWithoutWineCountInput = {
    where: WinesWhereUniqueInput
    create: XOR<WinesCreateWithoutWineCountInput, WinesUncheckedCreateWithoutWineCountInput>
  }

  export type WinesUpsertWithoutWineCountInput = {
    update: XOR<WinesUpdateWithoutWineCountInput, WinesUncheckedUpdateWithoutWineCountInput>
    create: XOR<WinesCreateWithoutWineCountInput, WinesUncheckedCreateWithoutWineCountInput>
    where?: WinesWhereInput
  }

  export type WinesUpdateToOneWithWhereWithoutWineCountInput = {
    where?: WinesWhereInput
    data: XOR<WinesUpdateWithoutWineCountInput, WinesUncheckedUpdateWithoutWineCountInput>
  }

  export type WinesUpdateWithoutWineCountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    type?: WineTypeUpdateOneRequiredWithoutWinesNestedInput
  }

  export type WinesUncheckedUpdateWithoutWineCountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type WineCountCreateManyWineInput = {
    id?: string
    balance: number
    count?: number | null
    invoice?: number | null
  }

  export type WineCountUpdateWithoutWineInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    invoice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WineCountUncheckedUpdateWithoutWineInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    invoice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WineCountUncheckedUpdateManyWithoutWineInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    invoice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WinesCreateManyTypeInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
  }

  export type WinesUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    WineCount?: WineCountUpdateManyWithoutWineNestedInput
  }

  export type WinesUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    WineCount?: WineCountUncheckedUpdateManyWithoutWineNestedInput
  }

  export type WinesUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}