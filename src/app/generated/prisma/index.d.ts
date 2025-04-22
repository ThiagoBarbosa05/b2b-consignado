
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
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
 * Model Consigned
 * 
 */
export type Consigned = $Result.DefaultSelection<Prisma.$ConsignedPayload>
/**
 * Model WineOnConsigned
 * 
 */
export type WineOnConsigned = $Result.DefaultSelection<Prisma.$WineOnConsignedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ConsignedStatus: {
  PENDENTE: 'PENDENTE',
  CONCLUÍDO: 'CONCLUÍDO'
};

export type ConsignedStatus = (typeof ConsignedStatus)[keyof typeof ConsignedStatus]

}

export type ConsignedStatus = $Enums.ConsignedStatus

export const ConsignedStatus: typeof $Enums.ConsignedStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.consigned`: Exposes CRUD operations for the **Consigned** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consigneds
    * const consigneds = await prisma.consigned.findMany()
    * ```
    */
  get consigned(): Prisma.ConsignedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wineOnConsigned`: Exposes CRUD operations for the **WineOnConsigned** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WineOnConsigneds
    * const wineOnConsigneds = await prisma.wineOnConsigned.findMany()
    * ```
    */
  get wineOnConsigned(): Prisma.WineOnConsignedDelegate<ExtArgs, ClientOptions>;
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
    Customer: 'Customer',
    Wines: 'Wines',
    WineType: 'WineType',
    Consigned: 'Consigned',
    WineOnConsigned: 'WineOnConsigned'
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
      modelProps: "customer" | "wines" | "wineType" | "consigned" | "wineOnConsigned"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
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
      Consigned: {
        payload: Prisma.$ConsignedPayload<ExtArgs>
        fields: Prisma.ConsignedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsignedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsignedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>
          }
          findFirst: {
            args: Prisma.ConsignedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsignedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>
          }
          findMany: {
            args: Prisma.ConsignedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>[]
          }
          create: {
            args: Prisma.ConsignedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>
          }
          createMany: {
            args: Prisma.ConsignedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsignedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>[]
          }
          delete: {
            args: Prisma.ConsignedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>
          }
          update: {
            args: Prisma.ConsignedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>
          }
          deleteMany: {
            args: Prisma.ConsignedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsignedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsignedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>[]
          }
          upsert: {
            args: Prisma.ConsignedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsignedPayload>
          }
          aggregate: {
            args: Prisma.ConsignedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsigned>
          }
          groupBy: {
            args: Prisma.ConsignedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsignedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsignedCountArgs<ExtArgs>
            result: $Utils.Optional<ConsignedCountAggregateOutputType> | number
          }
        }
      }
      WineOnConsigned: {
        payload: Prisma.$WineOnConsignedPayload<ExtArgs>
        fields: Prisma.WineOnConsignedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WineOnConsignedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WineOnConsignedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>
          }
          findFirst: {
            args: Prisma.WineOnConsignedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WineOnConsignedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>
          }
          findMany: {
            args: Prisma.WineOnConsignedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>[]
          }
          create: {
            args: Prisma.WineOnConsignedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>
          }
          createMany: {
            args: Prisma.WineOnConsignedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WineOnConsignedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>[]
          }
          delete: {
            args: Prisma.WineOnConsignedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>
          }
          update: {
            args: Prisma.WineOnConsignedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>
          }
          deleteMany: {
            args: Prisma.WineOnConsignedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WineOnConsignedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WineOnConsignedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>[]
          }
          upsert: {
            args: Prisma.WineOnConsignedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WineOnConsignedPayload>
          }
          aggregate: {
            args: Prisma.WineOnConsignedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWineOnConsigned>
          }
          groupBy: {
            args: Prisma.WineOnConsignedGroupByArgs<ExtArgs>
            result: $Utils.Optional<WineOnConsignedGroupByOutputType>[]
          }
          count: {
            args: Prisma.WineOnConsignedCountArgs<ExtArgs>
            result: $Utils.Optional<WineOnConsignedCountAggregateOutputType> | number
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
    customer?: CustomerOmit
    wines?: WinesOmit
    wineType?: WineTypeOmit
    consigned?: ConsignedOmit
    wineOnConsigned?: WineOnConsignedOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    Consigned: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Consigned?: boolean | CustomerCountOutputTypeCountConsignedArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountConsignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsignedWhereInput
  }


  /**
   * Count Type WinesCountOutputType
   */

  export type WinesCountOutputType = {
    winesOnConsigned: number
  }

  export type WinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winesOnConsigned?: boolean | WinesCountOutputTypeCountWinesOnConsignedArgs
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
  export type WinesCountOutputTypeCountWinesOnConsignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WineOnConsignedWhereInput
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
   * Count Type ConsignedCountOutputType
   */

  export type ConsignedCountOutputType = {
    winesOnConsigned: number
  }

  export type ConsignedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winesOnConsigned?: boolean | ConsignedCountOutputTypeCountWinesOnConsignedArgs
  }

  // Custom InputTypes
  /**
   * ConsignedCountOutputType without action
   */
  export type ConsignedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsignedCountOutputType
     */
    select?: ConsignedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsignedCountOutputType without action
   */
  export type ConsignedCountOutputTypeCountWinesOnConsignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WineOnConsignedWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    register: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    register: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    register: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    register?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    register?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    register?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    register: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    register?: boolean
    Consigned?: boolean | Customer$ConsignedArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    register?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    register?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    register?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "register", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Consigned?: boolean | Customer$ConsignedArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      Consigned: Prisma.$ConsignedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      register: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Consigned<T extends Customer$ConsignedArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ConsignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly register: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.Consigned
   */
  export type Customer$ConsignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    where?: ConsignedWhereInput
    orderBy?: ConsignedOrderByWithRelationInput | ConsignedOrderByWithRelationInput[]
    cursor?: ConsignedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsignedScalarFieldEnum | ConsignedScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


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
    winesOnConsigned?: boolean | Wines$winesOnConsignedArgs<ExtArgs>
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
    winesOnConsigned?: boolean | Wines$winesOnConsignedArgs<ExtArgs>
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
      winesOnConsigned: Prisma.$WineOnConsignedPayload<ExtArgs>[]
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
    winesOnConsigned<T extends Wines$winesOnConsignedArgs<ExtArgs> = {}>(args?: Subset<T, Wines$winesOnConsignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Wines.winesOnConsigned
   */
  export type Wines$winesOnConsignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    where?: WineOnConsignedWhereInput
    orderBy?: WineOnConsignedOrderByWithRelationInput | WineOnConsignedOrderByWithRelationInput[]
    cursor?: WineOnConsignedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WineOnConsignedScalarFieldEnum | WineOnConsignedScalarFieldEnum[]
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
   * Model Consigned
   */

  export type AggregateConsigned = {
    _count: ConsignedCountAggregateOutputType | null
    _min: ConsignedMinAggregateOutputType | null
    _max: ConsignedMaxAggregateOutputType | null
  }

  export type ConsignedMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    status: $Enums.ConsignedStatus | null
    completedIn: Date | null
    createdAt: Date | null
  }

  export type ConsignedMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    status: $Enums.ConsignedStatus | null
    completedIn: Date | null
    createdAt: Date | null
  }

  export type ConsignedCountAggregateOutputType = {
    id: number
    customerId: number
    status: number
    completedIn: number
    createdAt: number
    _all: number
  }


  export type ConsignedMinAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    completedIn?: true
    createdAt?: true
  }

  export type ConsignedMaxAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    completedIn?: true
    createdAt?: true
  }

  export type ConsignedCountAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    completedIn?: true
    createdAt?: true
    _all?: true
  }

  export type ConsignedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consigned to aggregate.
     */
    where?: ConsignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consigneds to fetch.
     */
    orderBy?: ConsignedOrderByWithRelationInput | ConsignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consigneds
    **/
    _count?: true | ConsignedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsignedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsignedMaxAggregateInputType
  }

  export type GetConsignedAggregateType<T extends ConsignedAggregateArgs> = {
        [P in keyof T & keyof AggregateConsigned]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsigned[P]>
      : GetScalarType<T[P], AggregateConsigned[P]>
  }




  export type ConsignedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsignedWhereInput
    orderBy?: ConsignedOrderByWithAggregationInput | ConsignedOrderByWithAggregationInput[]
    by: ConsignedScalarFieldEnum[] | ConsignedScalarFieldEnum
    having?: ConsignedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsignedCountAggregateInputType | true
    _min?: ConsignedMinAggregateInputType
    _max?: ConsignedMaxAggregateInputType
  }

  export type ConsignedGroupByOutputType = {
    id: string
    customerId: string
    status: $Enums.ConsignedStatus
    completedIn: Date | null
    createdAt: Date
    _count: ConsignedCountAggregateOutputType | null
    _min: ConsignedMinAggregateOutputType | null
    _max: ConsignedMaxAggregateOutputType | null
  }

  type GetConsignedGroupByPayload<T extends ConsignedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsignedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsignedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsignedGroupByOutputType[P]>
            : GetScalarType<T[P], ConsignedGroupByOutputType[P]>
        }
      >
    >


  export type ConsignedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    status?: boolean
    completedIn?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    winesOnConsigned?: boolean | Consigned$winesOnConsignedArgs<ExtArgs>
    _count?: boolean | ConsignedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consigned"]>

  export type ConsignedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    status?: boolean
    completedIn?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consigned"]>

  export type ConsignedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    status?: boolean
    completedIn?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consigned"]>

  export type ConsignedSelectScalar = {
    id?: boolean
    customerId?: boolean
    status?: boolean
    completedIn?: boolean
    createdAt?: boolean
  }

  export type ConsignedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "status" | "completedIn" | "createdAt", ExtArgs["result"]["consigned"]>
  export type ConsignedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    winesOnConsigned?: boolean | Consigned$winesOnConsignedArgs<ExtArgs>
    _count?: boolean | ConsignedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsignedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ConsignedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $ConsignedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consigned"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      winesOnConsigned: Prisma.$WineOnConsignedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      status: $Enums.ConsignedStatus
      completedIn: Date | null
      createdAt: Date
    }, ExtArgs["result"]["consigned"]>
    composites: {}
  }

  type ConsignedGetPayload<S extends boolean | null | undefined | ConsignedDefaultArgs> = $Result.GetResult<Prisma.$ConsignedPayload, S>

  type ConsignedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsignedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsignedCountAggregateInputType | true
    }

  export interface ConsignedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consigned'], meta: { name: 'Consigned' } }
    /**
     * Find zero or one Consigned that matches the filter.
     * @param {ConsignedFindUniqueArgs} args - Arguments to find a Consigned
     * @example
     * // Get one Consigned
     * const consigned = await prisma.consigned.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsignedFindUniqueArgs>(args: SelectSubset<T, ConsignedFindUniqueArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consigned that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsignedFindUniqueOrThrowArgs} args - Arguments to find a Consigned
     * @example
     * // Get one Consigned
     * const consigned = await prisma.consigned.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsignedFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsignedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consigned that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsignedFindFirstArgs} args - Arguments to find a Consigned
     * @example
     * // Get one Consigned
     * const consigned = await prisma.consigned.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsignedFindFirstArgs>(args?: SelectSubset<T, ConsignedFindFirstArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consigned that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsignedFindFirstOrThrowArgs} args - Arguments to find a Consigned
     * @example
     * // Get one Consigned
     * const consigned = await prisma.consigned.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsignedFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsignedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consigneds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsignedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consigneds
     * const consigneds = await prisma.consigned.findMany()
     * 
     * // Get first 10 Consigneds
     * const consigneds = await prisma.consigned.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consignedWithIdOnly = await prisma.consigned.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsignedFindManyArgs>(args?: SelectSubset<T, ConsignedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consigned.
     * @param {ConsignedCreateArgs} args - Arguments to create a Consigned.
     * @example
     * // Create one Consigned
     * const Consigned = await prisma.consigned.create({
     *   data: {
     *     // ... data to create a Consigned
     *   }
     * })
     * 
     */
    create<T extends ConsignedCreateArgs>(args: SelectSubset<T, ConsignedCreateArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consigneds.
     * @param {ConsignedCreateManyArgs} args - Arguments to create many Consigneds.
     * @example
     * // Create many Consigneds
     * const consigned = await prisma.consigned.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsignedCreateManyArgs>(args?: SelectSubset<T, ConsignedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consigneds and returns the data saved in the database.
     * @param {ConsignedCreateManyAndReturnArgs} args - Arguments to create many Consigneds.
     * @example
     * // Create many Consigneds
     * const consigned = await prisma.consigned.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consigneds and only return the `id`
     * const consignedWithIdOnly = await prisma.consigned.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsignedCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsignedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consigned.
     * @param {ConsignedDeleteArgs} args - Arguments to delete one Consigned.
     * @example
     * // Delete one Consigned
     * const Consigned = await prisma.consigned.delete({
     *   where: {
     *     // ... filter to delete one Consigned
     *   }
     * })
     * 
     */
    delete<T extends ConsignedDeleteArgs>(args: SelectSubset<T, ConsignedDeleteArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consigned.
     * @param {ConsignedUpdateArgs} args - Arguments to update one Consigned.
     * @example
     * // Update one Consigned
     * const consigned = await prisma.consigned.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsignedUpdateArgs>(args: SelectSubset<T, ConsignedUpdateArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consigneds.
     * @param {ConsignedDeleteManyArgs} args - Arguments to filter Consigneds to delete.
     * @example
     * // Delete a few Consigneds
     * const { count } = await prisma.consigned.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsignedDeleteManyArgs>(args?: SelectSubset<T, ConsignedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consigneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsignedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consigneds
     * const consigned = await prisma.consigned.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsignedUpdateManyArgs>(args: SelectSubset<T, ConsignedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consigneds and returns the data updated in the database.
     * @param {ConsignedUpdateManyAndReturnArgs} args - Arguments to update many Consigneds.
     * @example
     * // Update many Consigneds
     * const consigned = await prisma.consigned.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consigneds and only return the `id`
     * const consignedWithIdOnly = await prisma.consigned.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsignedUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsignedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consigned.
     * @param {ConsignedUpsertArgs} args - Arguments to update or create a Consigned.
     * @example
     * // Update or create a Consigned
     * const consigned = await prisma.consigned.upsert({
     *   create: {
     *     // ... data to create a Consigned
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consigned we want to update
     *   }
     * })
     */
    upsert<T extends ConsignedUpsertArgs>(args: SelectSubset<T, ConsignedUpsertArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consigneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsignedCountArgs} args - Arguments to filter Consigneds to count.
     * @example
     * // Count the number of Consigneds
     * const count = await prisma.consigned.count({
     *   where: {
     *     // ... the filter for the Consigneds we want to count
     *   }
     * })
    **/
    count<T extends ConsignedCountArgs>(
      args?: Subset<T, ConsignedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsignedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consigned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsignedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsignedAggregateArgs>(args: Subset<T, ConsignedAggregateArgs>): Prisma.PrismaPromise<GetConsignedAggregateType<T>>

    /**
     * Group by Consigned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsignedGroupByArgs} args - Group by arguments.
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
      T extends ConsignedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsignedGroupByArgs['orderBy'] }
        : { orderBy?: ConsignedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsignedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsignedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consigned model
   */
  readonly fields: ConsignedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consigned.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsignedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winesOnConsigned<T extends Consigned$winesOnConsignedArgs<ExtArgs> = {}>(args?: Subset<T, Consigned$winesOnConsignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Consigned model
   */
  interface ConsignedFieldRefs {
    readonly id: FieldRef<"Consigned", 'String'>
    readonly customerId: FieldRef<"Consigned", 'String'>
    readonly status: FieldRef<"Consigned", 'ConsignedStatus'>
    readonly completedIn: FieldRef<"Consigned", 'DateTime'>
    readonly createdAt: FieldRef<"Consigned", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consigned findUnique
   */
  export type ConsignedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * Filter, which Consigned to fetch.
     */
    where: ConsignedWhereUniqueInput
  }

  /**
   * Consigned findUniqueOrThrow
   */
  export type ConsignedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * Filter, which Consigned to fetch.
     */
    where: ConsignedWhereUniqueInput
  }

  /**
   * Consigned findFirst
   */
  export type ConsignedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * Filter, which Consigned to fetch.
     */
    where?: ConsignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consigneds to fetch.
     */
    orderBy?: ConsignedOrderByWithRelationInput | ConsignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consigneds.
     */
    cursor?: ConsignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consigneds.
     */
    distinct?: ConsignedScalarFieldEnum | ConsignedScalarFieldEnum[]
  }

  /**
   * Consigned findFirstOrThrow
   */
  export type ConsignedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * Filter, which Consigned to fetch.
     */
    where?: ConsignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consigneds to fetch.
     */
    orderBy?: ConsignedOrderByWithRelationInput | ConsignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consigneds.
     */
    cursor?: ConsignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consigneds.
     */
    distinct?: ConsignedScalarFieldEnum | ConsignedScalarFieldEnum[]
  }

  /**
   * Consigned findMany
   */
  export type ConsignedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * Filter, which Consigneds to fetch.
     */
    where?: ConsignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consigneds to fetch.
     */
    orderBy?: ConsignedOrderByWithRelationInput | ConsignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consigneds.
     */
    cursor?: ConsignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consigneds.
     */
    skip?: number
    distinct?: ConsignedScalarFieldEnum | ConsignedScalarFieldEnum[]
  }

  /**
   * Consigned create
   */
  export type ConsignedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * The data needed to create a Consigned.
     */
    data: XOR<ConsignedCreateInput, ConsignedUncheckedCreateInput>
  }

  /**
   * Consigned createMany
   */
  export type ConsignedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consigneds.
     */
    data: ConsignedCreateManyInput | ConsignedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consigned createManyAndReturn
   */
  export type ConsignedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * The data used to create many Consigneds.
     */
    data: ConsignedCreateManyInput | ConsignedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consigned update
   */
  export type ConsignedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * The data needed to update a Consigned.
     */
    data: XOR<ConsignedUpdateInput, ConsignedUncheckedUpdateInput>
    /**
     * Choose, which Consigned to update.
     */
    where: ConsignedWhereUniqueInput
  }

  /**
   * Consigned updateMany
   */
  export type ConsignedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consigneds.
     */
    data: XOR<ConsignedUpdateManyMutationInput, ConsignedUncheckedUpdateManyInput>
    /**
     * Filter which Consigneds to update
     */
    where?: ConsignedWhereInput
    /**
     * Limit how many Consigneds to update.
     */
    limit?: number
  }

  /**
   * Consigned updateManyAndReturn
   */
  export type ConsignedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * The data used to update Consigneds.
     */
    data: XOR<ConsignedUpdateManyMutationInput, ConsignedUncheckedUpdateManyInput>
    /**
     * Filter which Consigneds to update
     */
    where?: ConsignedWhereInput
    /**
     * Limit how many Consigneds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consigned upsert
   */
  export type ConsignedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * The filter to search for the Consigned to update in case it exists.
     */
    where: ConsignedWhereUniqueInput
    /**
     * In case the Consigned found by the `where` argument doesn't exist, create a new Consigned with this data.
     */
    create: XOR<ConsignedCreateInput, ConsignedUncheckedCreateInput>
    /**
     * In case the Consigned was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsignedUpdateInput, ConsignedUncheckedUpdateInput>
  }

  /**
   * Consigned delete
   */
  export type ConsignedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
    /**
     * Filter which Consigned to delete.
     */
    where: ConsignedWhereUniqueInput
  }

  /**
   * Consigned deleteMany
   */
  export type ConsignedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consigneds to delete
     */
    where?: ConsignedWhereInput
    /**
     * Limit how many Consigneds to delete.
     */
    limit?: number
  }

  /**
   * Consigned.winesOnConsigned
   */
  export type Consigned$winesOnConsignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    where?: WineOnConsignedWhereInput
    orderBy?: WineOnConsignedOrderByWithRelationInput | WineOnConsignedOrderByWithRelationInput[]
    cursor?: WineOnConsignedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WineOnConsignedScalarFieldEnum | WineOnConsignedScalarFieldEnum[]
  }

  /**
   * Consigned without action
   */
  export type ConsignedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consigned
     */
    select?: ConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consigned
     */
    omit?: ConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsignedInclude<ExtArgs> | null
  }


  /**
   * Model WineOnConsigned
   */

  export type AggregateWineOnConsigned = {
    _count: WineOnConsignedCountAggregateOutputType | null
    _avg: WineOnConsignedAvgAggregateOutputType | null
    _sum: WineOnConsignedSumAggregateOutputType | null
    _min: WineOnConsignedMinAggregateOutputType | null
    _max: WineOnConsignedMaxAggregateOutputType | null
  }

  export type WineOnConsignedAvgAggregateOutputType = {
    balance: number | null
    count: number | null
  }

  export type WineOnConsignedSumAggregateOutputType = {
    balance: number | null
    count: number | null
  }

  export type WineOnConsignedMinAggregateOutputType = {
    consignedId: string | null
    wineId: string | null
    balance: number | null
    count: number | null
  }

  export type WineOnConsignedMaxAggregateOutputType = {
    consignedId: string | null
    wineId: string | null
    balance: number | null
    count: number | null
  }

  export type WineOnConsignedCountAggregateOutputType = {
    consignedId: number
    wineId: number
    balance: number
    count: number
    _all: number
  }


  export type WineOnConsignedAvgAggregateInputType = {
    balance?: true
    count?: true
  }

  export type WineOnConsignedSumAggregateInputType = {
    balance?: true
    count?: true
  }

  export type WineOnConsignedMinAggregateInputType = {
    consignedId?: true
    wineId?: true
    balance?: true
    count?: true
  }

  export type WineOnConsignedMaxAggregateInputType = {
    consignedId?: true
    wineId?: true
    balance?: true
    count?: true
  }

  export type WineOnConsignedCountAggregateInputType = {
    consignedId?: true
    wineId?: true
    balance?: true
    count?: true
    _all?: true
  }

  export type WineOnConsignedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WineOnConsigned to aggregate.
     */
    where?: WineOnConsignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineOnConsigneds to fetch.
     */
    orderBy?: WineOnConsignedOrderByWithRelationInput | WineOnConsignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WineOnConsignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineOnConsigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineOnConsigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WineOnConsigneds
    **/
    _count?: true | WineOnConsignedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WineOnConsignedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WineOnConsignedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WineOnConsignedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WineOnConsignedMaxAggregateInputType
  }

  export type GetWineOnConsignedAggregateType<T extends WineOnConsignedAggregateArgs> = {
        [P in keyof T & keyof AggregateWineOnConsigned]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWineOnConsigned[P]>
      : GetScalarType<T[P], AggregateWineOnConsigned[P]>
  }




  export type WineOnConsignedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WineOnConsignedWhereInput
    orderBy?: WineOnConsignedOrderByWithAggregationInput | WineOnConsignedOrderByWithAggregationInput[]
    by: WineOnConsignedScalarFieldEnum[] | WineOnConsignedScalarFieldEnum
    having?: WineOnConsignedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WineOnConsignedCountAggregateInputType | true
    _avg?: WineOnConsignedAvgAggregateInputType
    _sum?: WineOnConsignedSumAggregateInputType
    _min?: WineOnConsignedMinAggregateInputType
    _max?: WineOnConsignedMaxAggregateInputType
  }

  export type WineOnConsignedGroupByOutputType = {
    consignedId: string
    wineId: string
    balance: number
    count: number | null
    _count: WineOnConsignedCountAggregateOutputType | null
    _avg: WineOnConsignedAvgAggregateOutputType | null
    _sum: WineOnConsignedSumAggregateOutputType | null
    _min: WineOnConsignedMinAggregateOutputType | null
    _max: WineOnConsignedMaxAggregateOutputType | null
  }

  type GetWineOnConsignedGroupByPayload<T extends WineOnConsignedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WineOnConsignedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WineOnConsignedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WineOnConsignedGroupByOutputType[P]>
            : GetScalarType<T[P], WineOnConsignedGroupByOutputType[P]>
        }
      >
    >


  export type WineOnConsignedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    consignedId?: boolean
    wineId?: boolean
    balance?: boolean
    count?: boolean
    consigned?: boolean | ConsignedDefaultArgs<ExtArgs>
    wines?: boolean | WinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wineOnConsigned"]>

  export type WineOnConsignedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    consignedId?: boolean
    wineId?: boolean
    balance?: boolean
    count?: boolean
    consigned?: boolean | ConsignedDefaultArgs<ExtArgs>
    wines?: boolean | WinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wineOnConsigned"]>

  export type WineOnConsignedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    consignedId?: boolean
    wineId?: boolean
    balance?: boolean
    count?: boolean
    consigned?: boolean | ConsignedDefaultArgs<ExtArgs>
    wines?: boolean | WinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wineOnConsigned"]>

  export type WineOnConsignedSelectScalar = {
    consignedId?: boolean
    wineId?: boolean
    balance?: boolean
    count?: boolean
  }

  export type WineOnConsignedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"consignedId" | "wineId" | "balance" | "count", ExtArgs["result"]["wineOnConsigned"]>
  export type WineOnConsignedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consigned?: boolean | ConsignedDefaultArgs<ExtArgs>
    wines?: boolean | WinesDefaultArgs<ExtArgs>
  }
  export type WineOnConsignedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consigned?: boolean | ConsignedDefaultArgs<ExtArgs>
    wines?: boolean | WinesDefaultArgs<ExtArgs>
  }
  export type WineOnConsignedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consigned?: boolean | ConsignedDefaultArgs<ExtArgs>
    wines?: boolean | WinesDefaultArgs<ExtArgs>
  }

  export type $WineOnConsignedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WineOnConsigned"
    objects: {
      consigned: Prisma.$ConsignedPayload<ExtArgs>
      wines: Prisma.$WinesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      consignedId: string
      wineId: string
      balance: number
      count: number | null
    }, ExtArgs["result"]["wineOnConsigned"]>
    composites: {}
  }

  type WineOnConsignedGetPayload<S extends boolean | null | undefined | WineOnConsignedDefaultArgs> = $Result.GetResult<Prisma.$WineOnConsignedPayload, S>

  type WineOnConsignedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WineOnConsignedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WineOnConsignedCountAggregateInputType | true
    }

  export interface WineOnConsignedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WineOnConsigned'], meta: { name: 'WineOnConsigned' } }
    /**
     * Find zero or one WineOnConsigned that matches the filter.
     * @param {WineOnConsignedFindUniqueArgs} args - Arguments to find a WineOnConsigned
     * @example
     * // Get one WineOnConsigned
     * const wineOnConsigned = await prisma.wineOnConsigned.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WineOnConsignedFindUniqueArgs>(args: SelectSubset<T, WineOnConsignedFindUniqueArgs<ExtArgs>>): Prisma__WineOnConsignedClient<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WineOnConsigned that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WineOnConsignedFindUniqueOrThrowArgs} args - Arguments to find a WineOnConsigned
     * @example
     * // Get one WineOnConsigned
     * const wineOnConsigned = await prisma.wineOnConsigned.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WineOnConsignedFindUniqueOrThrowArgs>(args: SelectSubset<T, WineOnConsignedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WineOnConsignedClient<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WineOnConsigned that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineOnConsignedFindFirstArgs} args - Arguments to find a WineOnConsigned
     * @example
     * // Get one WineOnConsigned
     * const wineOnConsigned = await prisma.wineOnConsigned.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WineOnConsignedFindFirstArgs>(args?: SelectSubset<T, WineOnConsignedFindFirstArgs<ExtArgs>>): Prisma__WineOnConsignedClient<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WineOnConsigned that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineOnConsignedFindFirstOrThrowArgs} args - Arguments to find a WineOnConsigned
     * @example
     * // Get one WineOnConsigned
     * const wineOnConsigned = await prisma.wineOnConsigned.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WineOnConsignedFindFirstOrThrowArgs>(args?: SelectSubset<T, WineOnConsignedFindFirstOrThrowArgs<ExtArgs>>): Prisma__WineOnConsignedClient<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WineOnConsigneds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineOnConsignedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WineOnConsigneds
     * const wineOnConsigneds = await prisma.wineOnConsigned.findMany()
     * 
     * // Get first 10 WineOnConsigneds
     * const wineOnConsigneds = await prisma.wineOnConsigned.findMany({ take: 10 })
     * 
     * // Only select the `consignedId`
     * const wineOnConsignedWithConsignedIdOnly = await prisma.wineOnConsigned.findMany({ select: { consignedId: true } })
     * 
     */
    findMany<T extends WineOnConsignedFindManyArgs>(args?: SelectSubset<T, WineOnConsignedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WineOnConsigned.
     * @param {WineOnConsignedCreateArgs} args - Arguments to create a WineOnConsigned.
     * @example
     * // Create one WineOnConsigned
     * const WineOnConsigned = await prisma.wineOnConsigned.create({
     *   data: {
     *     // ... data to create a WineOnConsigned
     *   }
     * })
     * 
     */
    create<T extends WineOnConsignedCreateArgs>(args: SelectSubset<T, WineOnConsignedCreateArgs<ExtArgs>>): Prisma__WineOnConsignedClient<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WineOnConsigneds.
     * @param {WineOnConsignedCreateManyArgs} args - Arguments to create many WineOnConsigneds.
     * @example
     * // Create many WineOnConsigneds
     * const wineOnConsigned = await prisma.wineOnConsigned.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WineOnConsignedCreateManyArgs>(args?: SelectSubset<T, WineOnConsignedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WineOnConsigneds and returns the data saved in the database.
     * @param {WineOnConsignedCreateManyAndReturnArgs} args - Arguments to create many WineOnConsigneds.
     * @example
     * // Create many WineOnConsigneds
     * const wineOnConsigned = await prisma.wineOnConsigned.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WineOnConsigneds and only return the `consignedId`
     * const wineOnConsignedWithConsignedIdOnly = await prisma.wineOnConsigned.createManyAndReturn({
     *   select: { consignedId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WineOnConsignedCreateManyAndReturnArgs>(args?: SelectSubset<T, WineOnConsignedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WineOnConsigned.
     * @param {WineOnConsignedDeleteArgs} args - Arguments to delete one WineOnConsigned.
     * @example
     * // Delete one WineOnConsigned
     * const WineOnConsigned = await prisma.wineOnConsigned.delete({
     *   where: {
     *     // ... filter to delete one WineOnConsigned
     *   }
     * })
     * 
     */
    delete<T extends WineOnConsignedDeleteArgs>(args: SelectSubset<T, WineOnConsignedDeleteArgs<ExtArgs>>): Prisma__WineOnConsignedClient<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WineOnConsigned.
     * @param {WineOnConsignedUpdateArgs} args - Arguments to update one WineOnConsigned.
     * @example
     * // Update one WineOnConsigned
     * const wineOnConsigned = await prisma.wineOnConsigned.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WineOnConsignedUpdateArgs>(args: SelectSubset<T, WineOnConsignedUpdateArgs<ExtArgs>>): Prisma__WineOnConsignedClient<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WineOnConsigneds.
     * @param {WineOnConsignedDeleteManyArgs} args - Arguments to filter WineOnConsigneds to delete.
     * @example
     * // Delete a few WineOnConsigneds
     * const { count } = await prisma.wineOnConsigned.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WineOnConsignedDeleteManyArgs>(args?: SelectSubset<T, WineOnConsignedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WineOnConsigneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineOnConsignedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WineOnConsigneds
     * const wineOnConsigned = await prisma.wineOnConsigned.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WineOnConsignedUpdateManyArgs>(args: SelectSubset<T, WineOnConsignedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WineOnConsigneds and returns the data updated in the database.
     * @param {WineOnConsignedUpdateManyAndReturnArgs} args - Arguments to update many WineOnConsigneds.
     * @example
     * // Update many WineOnConsigneds
     * const wineOnConsigned = await prisma.wineOnConsigned.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WineOnConsigneds and only return the `consignedId`
     * const wineOnConsignedWithConsignedIdOnly = await prisma.wineOnConsigned.updateManyAndReturn({
     *   select: { consignedId: true },
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
    updateManyAndReturn<T extends WineOnConsignedUpdateManyAndReturnArgs>(args: SelectSubset<T, WineOnConsignedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WineOnConsigned.
     * @param {WineOnConsignedUpsertArgs} args - Arguments to update or create a WineOnConsigned.
     * @example
     * // Update or create a WineOnConsigned
     * const wineOnConsigned = await prisma.wineOnConsigned.upsert({
     *   create: {
     *     // ... data to create a WineOnConsigned
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WineOnConsigned we want to update
     *   }
     * })
     */
    upsert<T extends WineOnConsignedUpsertArgs>(args: SelectSubset<T, WineOnConsignedUpsertArgs<ExtArgs>>): Prisma__WineOnConsignedClient<$Result.GetResult<Prisma.$WineOnConsignedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WineOnConsigneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineOnConsignedCountArgs} args - Arguments to filter WineOnConsigneds to count.
     * @example
     * // Count the number of WineOnConsigneds
     * const count = await prisma.wineOnConsigned.count({
     *   where: {
     *     // ... the filter for the WineOnConsigneds we want to count
     *   }
     * })
    **/
    count<T extends WineOnConsignedCountArgs>(
      args?: Subset<T, WineOnConsignedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WineOnConsignedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WineOnConsigned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineOnConsignedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WineOnConsignedAggregateArgs>(args: Subset<T, WineOnConsignedAggregateArgs>): Prisma.PrismaPromise<GetWineOnConsignedAggregateType<T>>

    /**
     * Group by WineOnConsigned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WineOnConsignedGroupByArgs} args - Group by arguments.
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
      T extends WineOnConsignedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WineOnConsignedGroupByArgs['orderBy'] }
        : { orderBy?: WineOnConsignedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WineOnConsignedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWineOnConsignedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WineOnConsigned model
   */
  readonly fields: WineOnConsignedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WineOnConsigned.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WineOnConsignedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consigned<T extends ConsignedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsignedDefaultArgs<ExtArgs>>): Prisma__ConsignedClient<$Result.GetResult<Prisma.$ConsignedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wines<T extends WinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WinesDefaultArgs<ExtArgs>>): Prisma__WinesClient<$Result.GetResult<Prisma.$WinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WineOnConsigned model
   */
  interface WineOnConsignedFieldRefs {
    readonly consignedId: FieldRef<"WineOnConsigned", 'String'>
    readonly wineId: FieldRef<"WineOnConsigned", 'String'>
    readonly balance: FieldRef<"WineOnConsigned", 'Int'>
    readonly count: FieldRef<"WineOnConsigned", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WineOnConsigned findUnique
   */
  export type WineOnConsignedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * Filter, which WineOnConsigned to fetch.
     */
    where: WineOnConsignedWhereUniqueInput
  }

  /**
   * WineOnConsigned findUniqueOrThrow
   */
  export type WineOnConsignedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * Filter, which WineOnConsigned to fetch.
     */
    where: WineOnConsignedWhereUniqueInput
  }

  /**
   * WineOnConsigned findFirst
   */
  export type WineOnConsignedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * Filter, which WineOnConsigned to fetch.
     */
    where?: WineOnConsignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineOnConsigneds to fetch.
     */
    orderBy?: WineOnConsignedOrderByWithRelationInput | WineOnConsignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WineOnConsigneds.
     */
    cursor?: WineOnConsignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineOnConsigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineOnConsigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WineOnConsigneds.
     */
    distinct?: WineOnConsignedScalarFieldEnum | WineOnConsignedScalarFieldEnum[]
  }

  /**
   * WineOnConsigned findFirstOrThrow
   */
  export type WineOnConsignedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * Filter, which WineOnConsigned to fetch.
     */
    where?: WineOnConsignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineOnConsigneds to fetch.
     */
    orderBy?: WineOnConsignedOrderByWithRelationInput | WineOnConsignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WineOnConsigneds.
     */
    cursor?: WineOnConsignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineOnConsigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineOnConsigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WineOnConsigneds.
     */
    distinct?: WineOnConsignedScalarFieldEnum | WineOnConsignedScalarFieldEnum[]
  }

  /**
   * WineOnConsigned findMany
   */
  export type WineOnConsignedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * Filter, which WineOnConsigneds to fetch.
     */
    where?: WineOnConsignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WineOnConsigneds to fetch.
     */
    orderBy?: WineOnConsignedOrderByWithRelationInput | WineOnConsignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WineOnConsigneds.
     */
    cursor?: WineOnConsignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WineOnConsigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WineOnConsigneds.
     */
    skip?: number
    distinct?: WineOnConsignedScalarFieldEnum | WineOnConsignedScalarFieldEnum[]
  }

  /**
   * WineOnConsigned create
   */
  export type WineOnConsignedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * The data needed to create a WineOnConsigned.
     */
    data: XOR<WineOnConsignedCreateInput, WineOnConsignedUncheckedCreateInput>
  }

  /**
   * WineOnConsigned createMany
   */
  export type WineOnConsignedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WineOnConsigneds.
     */
    data: WineOnConsignedCreateManyInput | WineOnConsignedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WineOnConsigned createManyAndReturn
   */
  export type WineOnConsignedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * The data used to create many WineOnConsigneds.
     */
    data: WineOnConsignedCreateManyInput | WineOnConsignedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WineOnConsigned update
   */
  export type WineOnConsignedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * The data needed to update a WineOnConsigned.
     */
    data: XOR<WineOnConsignedUpdateInput, WineOnConsignedUncheckedUpdateInput>
    /**
     * Choose, which WineOnConsigned to update.
     */
    where: WineOnConsignedWhereUniqueInput
  }

  /**
   * WineOnConsigned updateMany
   */
  export type WineOnConsignedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WineOnConsigneds.
     */
    data: XOR<WineOnConsignedUpdateManyMutationInput, WineOnConsignedUncheckedUpdateManyInput>
    /**
     * Filter which WineOnConsigneds to update
     */
    where?: WineOnConsignedWhereInput
    /**
     * Limit how many WineOnConsigneds to update.
     */
    limit?: number
  }

  /**
   * WineOnConsigned updateManyAndReturn
   */
  export type WineOnConsignedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * The data used to update WineOnConsigneds.
     */
    data: XOR<WineOnConsignedUpdateManyMutationInput, WineOnConsignedUncheckedUpdateManyInput>
    /**
     * Filter which WineOnConsigneds to update
     */
    where?: WineOnConsignedWhereInput
    /**
     * Limit how many WineOnConsigneds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WineOnConsigned upsert
   */
  export type WineOnConsignedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * The filter to search for the WineOnConsigned to update in case it exists.
     */
    where: WineOnConsignedWhereUniqueInput
    /**
     * In case the WineOnConsigned found by the `where` argument doesn't exist, create a new WineOnConsigned with this data.
     */
    create: XOR<WineOnConsignedCreateInput, WineOnConsignedUncheckedCreateInput>
    /**
     * In case the WineOnConsigned was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WineOnConsignedUpdateInput, WineOnConsignedUncheckedUpdateInput>
  }

  /**
   * WineOnConsigned delete
   */
  export type WineOnConsignedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
    /**
     * Filter which WineOnConsigned to delete.
     */
    where: WineOnConsignedWhereUniqueInput
  }

  /**
   * WineOnConsigned deleteMany
   */
  export type WineOnConsignedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WineOnConsigneds to delete
     */
    where?: WineOnConsignedWhereInput
    /**
     * Limit how many WineOnConsigneds to delete.
     */
    limit?: number
  }

  /**
   * WineOnConsigned without action
   */
  export type WineOnConsignedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WineOnConsigned
     */
    select?: WineOnConsignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WineOnConsigned
     */
    omit?: WineOnConsignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WineOnConsignedInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    register: 'register'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


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


  export const ConsignedScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    status: 'status',
    completedIn: 'completedIn',
    createdAt: 'createdAt'
  };

  export type ConsignedScalarFieldEnum = (typeof ConsignedScalarFieldEnum)[keyof typeof ConsignedScalarFieldEnum]


  export const WineOnConsignedScalarFieldEnum: {
    consignedId: 'consignedId',
    wineId: 'wineId',
    balance: 'balance',
    count: 'count'
  };

  export type WineOnConsignedScalarFieldEnum = (typeof WineOnConsignedScalarFieldEnum)[keyof typeof WineOnConsignedScalarFieldEnum]


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
   * Reference to a field of type 'ConsignedStatus'
   */
  export type EnumConsignedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsignedStatus'>
    


  /**
   * Reference to a field of type 'ConsignedStatus[]'
   */
  export type ListEnumConsignedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsignedStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    register?: StringFilter<"Customer"> | string
    Consigned?: ConsignedListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
    Consigned?: ConsignedOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    register?: StringFilter<"Customer"> | string
    Consigned?: ConsignedListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    register?: StringWithAggregatesFilter<"Customer"> | string
  }

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
    winesOnConsigned?: WineOnConsignedListRelationFilter
  }

  export type WinesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    price?: SortOrder
    typeId?: SortOrder
    type?: WineTypeOrderByWithRelationInput
    winesOnConsigned?: WineOnConsignedOrderByRelationAggregateInput
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
    winesOnConsigned?: WineOnConsignedListRelationFilter
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

  export type ConsignedWhereInput = {
    AND?: ConsignedWhereInput | ConsignedWhereInput[]
    OR?: ConsignedWhereInput[]
    NOT?: ConsignedWhereInput | ConsignedWhereInput[]
    id?: StringFilter<"Consigned"> | string
    customerId?: StringFilter<"Consigned"> | string
    status?: EnumConsignedStatusFilter<"Consigned"> | $Enums.ConsignedStatus
    completedIn?: DateTimeNullableFilter<"Consigned"> | Date | string | null
    createdAt?: DateTimeFilter<"Consigned"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    winesOnConsigned?: WineOnConsignedListRelationFilter
  }

  export type ConsignedOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    completedIn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    winesOnConsigned?: WineOnConsignedOrderByRelationAggregateInput
  }

  export type ConsignedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsignedWhereInput | ConsignedWhereInput[]
    OR?: ConsignedWhereInput[]
    NOT?: ConsignedWhereInput | ConsignedWhereInput[]
    customerId?: StringFilter<"Consigned"> | string
    status?: EnumConsignedStatusFilter<"Consigned"> | $Enums.ConsignedStatus
    completedIn?: DateTimeNullableFilter<"Consigned"> | Date | string | null
    createdAt?: DateTimeFilter<"Consigned"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    winesOnConsigned?: WineOnConsignedListRelationFilter
  }, "id">

  export type ConsignedOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    completedIn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ConsignedCountOrderByAggregateInput
    _max?: ConsignedMaxOrderByAggregateInput
    _min?: ConsignedMinOrderByAggregateInput
  }

  export type ConsignedScalarWhereWithAggregatesInput = {
    AND?: ConsignedScalarWhereWithAggregatesInput | ConsignedScalarWhereWithAggregatesInput[]
    OR?: ConsignedScalarWhereWithAggregatesInput[]
    NOT?: ConsignedScalarWhereWithAggregatesInput | ConsignedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consigned"> | string
    customerId?: StringWithAggregatesFilter<"Consigned"> | string
    status?: EnumConsignedStatusWithAggregatesFilter<"Consigned"> | $Enums.ConsignedStatus
    completedIn?: DateTimeNullableWithAggregatesFilter<"Consigned"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Consigned"> | Date | string
  }

  export type WineOnConsignedWhereInput = {
    AND?: WineOnConsignedWhereInput | WineOnConsignedWhereInput[]
    OR?: WineOnConsignedWhereInput[]
    NOT?: WineOnConsignedWhereInput | WineOnConsignedWhereInput[]
    consignedId?: StringFilter<"WineOnConsigned"> | string
    wineId?: StringFilter<"WineOnConsigned"> | string
    balance?: IntFilter<"WineOnConsigned"> | number
    count?: IntNullableFilter<"WineOnConsigned"> | number | null
    consigned?: XOR<ConsignedScalarRelationFilter, ConsignedWhereInput>
    wines?: XOR<WinesScalarRelationFilter, WinesWhereInput>
  }

  export type WineOnConsignedOrderByWithRelationInput = {
    consignedId?: SortOrder
    wineId?: SortOrder
    balance?: SortOrder
    count?: SortOrderInput | SortOrder
    consigned?: ConsignedOrderByWithRelationInput
    wines?: WinesOrderByWithRelationInput
  }

  export type WineOnConsignedWhereUniqueInput = Prisma.AtLeast<{
    consignedId_wineId?: WineOnConsignedConsignedIdWineIdCompoundUniqueInput
    AND?: WineOnConsignedWhereInput | WineOnConsignedWhereInput[]
    OR?: WineOnConsignedWhereInput[]
    NOT?: WineOnConsignedWhereInput | WineOnConsignedWhereInput[]
    consignedId?: StringFilter<"WineOnConsigned"> | string
    wineId?: StringFilter<"WineOnConsigned"> | string
    balance?: IntFilter<"WineOnConsigned"> | number
    count?: IntNullableFilter<"WineOnConsigned"> | number | null
    consigned?: XOR<ConsignedScalarRelationFilter, ConsignedWhereInput>
    wines?: XOR<WinesScalarRelationFilter, WinesWhereInput>
  }, "consignedId_wineId">

  export type WineOnConsignedOrderByWithAggregationInput = {
    consignedId?: SortOrder
    wineId?: SortOrder
    balance?: SortOrder
    count?: SortOrderInput | SortOrder
    _count?: WineOnConsignedCountOrderByAggregateInput
    _avg?: WineOnConsignedAvgOrderByAggregateInput
    _max?: WineOnConsignedMaxOrderByAggregateInput
    _min?: WineOnConsignedMinOrderByAggregateInput
    _sum?: WineOnConsignedSumOrderByAggregateInput
  }

  export type WineOnConsignedScalarWhereWithAggregatesInput = {
    AND?: WineOnConsignedScalarWhereWithAggregatesInput | WineOnConsignedScalarWhereWithAggregatesInput[]
    OR?: WineOnConsignedScalarWhereWithAggregatesInput[]
    NOT?: WineOnConsignedScalarWhereWithAggregatesInput | WineOnConsignedScalarWhereWithAggregatesInput[]
    consignedId?: StringWithAggregatesFilter<"WineOnConsigned"> | string
    wineId?: StringWithAggregatesFilter<"WineOnConsigned"> | string
    balance?: IntWithAggregatesFilter<"WineOnConsigned"> | number
    count?: IntNullableWithAggregatesFilter<"WineOnConsigned"> | number | null
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    register: string
    Consigned?: ConsignedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    register: string
    Consigned?: ConsignedUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    Consigned?: ConsignedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    Consigned?: ConsignedUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    register: string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
  }

  export type WinesCreateInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    type: WineTypeCreateNestedOneWithoutWinesInput
    winesOnConsigned?: WineOnConsignedCreateNestedManyWithoutWinesInput
  }

  export type WinesUncheckedCreateInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    typeId: string
    winesOnConsigned?: WineOnConsignedUncheckedCreateNestedManyWithoutWinesInput
  }

  export type WinesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    type?: WineTypeUpdateOneRequiredWithoutWinesNestedInput
    winesOnConsigned?: WineOnConsignedUpdateManyWithoutWinesNestedInput
  }

  export type WinesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    typeId?: StringFieldUpdateOperationsInput | string
    winesOnConsigned?: WineOnConsignedUncheckedUpdateManyWithoutWinesNestedInput
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

  export type ConsignedCreateInput = {
    id?: string
    status?: $Enums.ConsignedStatus
    completedIn?: Date | string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutConsignedInput
    winesOnConsigned?: WineOnConsignedCreateNestedManyWithoutConsignedInput
  }

  export type ConsignedUncheckedCreateInput = {
    id?: string
    customerId: string
    status?: $Enums.ConsignedStatus
    completedIn?: Date | string | null
    createdAt?: Date | string
    winesOnConsigned?: WineOnConsignedUncheckedCreateNestedManyWithoutConsignedInput
  }

  export type ConsignedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutConsignedNestedInput
    winesOnConsigned?: WineOnConsignedUpdateManyWithoutConsignedNestedInput
  }

  export type ConsignedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winesOnConsigned?: WineOnConsignedUncheckedUpdateManyWithoutConsignedNestedInput
  }

  export type ConsignedCreateManyInput = {
    id?: string
    customerId: string
    status?: $Enums.ConsignedStatus
    completedIn?: Date | string | null
    createdAt?: Date | string
  }

  export type ConsignedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsignedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WineOnConsignedCreateInput = {
    balance: number
    count?: number | null
    consigned: ConsignedCreateNestedOneWithoutWinesOnConsignedInput
    wines: WinesCreateNestedOneWithoutWinesOnConsignedInput
  }

  export type WineOnConsignedUncheckedCreateInput = {
    consignedId: string
    wineId: string
    balance: number
    count?: number | null
  }

  export type WineOnConsignedUpdateInput = {
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    consigned?: ConsignedUpdateOneRequiredWithoutWinesOnConsignedNestedInput
    wines?: WinesUpdateOneRequiredWithoutWinesOnConsignedNestedInput
  }

  export type WineOnConsignedUncheckedUpdateInput = {
    consignedId?: StringFieldUpdateOperationsInput | string
    wineId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WineOnConsignedCreateManyInput = {
    consignedId: string
    wineId: string
    balance: number
    count?: number | null
  }

  export type WineOnConsignedUpdateManyMutationInput = {
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WineOnConsignedUncheckedUpdateManyInput = {
    consignedId?: StringFieldUpdateOperationsInput | string
    wineId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type ConsignedListRelationFilter = {
    every?: ConsignedWhereInput
    some?: ConsignedWhereInput
    none?: ConsignedWhereInput
  }

  export type ConsignedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
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

  export type WineOnConsignedListRelationFilter = {
    every?: WineOnConsignedWhereInput
    some?: WineOnConsignedWhereInput
    none?: WineOnConsignedWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WineOnConsignedOrderByRelationAggregateInput = {
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

  export type EnumConsignedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsignedStatus | EnumConsignedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsignedStatus[] | ListEnumConsignedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsignedStatus[] | ListEnumConsignedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsignedStatusFilter<$PrismaModel> | $Enums.ConsignedStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ConsignedCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    completedIn?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsignedMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    completedIn?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsignedMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    completedIn?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumConsignedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsignedStatus | EnumConsignedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsignedStatus[] | ListEnumConsignedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsignedStatus[] | ListEnumConsignedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsignedStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsignedStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsignedStatusFilter<$PrismaModel>
    _max?: NestedEnumConsignedStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type ConsignedScalarRelationFilter = {
    is?: ConsignedWhereInput
    isNot?: ConsignedWhereInput
  }

  export type WinesScalarRelationFilter = {
    is?: WinesWhereInput
    isNot?: WinesWhereInput
  }

  export type WineOnConsignedConsignedIdWineIdCompoundUniqueInput = {
    consignedId: string
    wineId: string
  }

  export type WineOnConsignedCountOrderByAggregateInput = {
    consignedId?: SortOrder
    wineId?: SortOrder
    balance?: SortOrder
    count?: SortOrder
  }

  export type WineOnConsignedAvgOrderByAggregateInput = {
    balance?: SortOrder
    count?: SortOrder
  }

  export type WineOnConsignedMaxOrderByAggregateInput = {
    consignedId?: SortOrder
    wineId?: SortOrder
    balance?: SortOrder
    count?: SortOrder
  }

  export type WineOnConsignedMinOrderByAggregateInput = {
    consignedId?: SortOrder
    wineId?: SortOrder
    balance?: SortOrder
    count?: SortOrder
  }

  export type WineOnConsignedSumOrderByAggregateInput = {
    balance?: SortOrder
    count?: SortOrder
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

  export type ConsignedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ConsignedCreateWithoutCustomerInput, ConsignedUncheckedCreateWithoutCustomerInput> | ConsignedCreateWithoutCustomerInput[] | ConsignedUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ConsignedCreateOrConnectWithoutCustomerInput | ConsignedCreateOrConnectWithoutCustomerInput[]
    createMany?: ConsignedCreateManyCustomerInputEnvelope
    connect?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
  }

  export type ConsignedUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ConsignedCreateWithoutCustomerInput, ConsignedUncheckedCreateWithoutCustomerInput> | ConsignedCreateWithoutCustomerInput[] | ConsignedUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ConsignedCreateOrConnectWithoutCustomerInput | ConsignedCreateOrConnectWithoutCustomerInput[]
    createMany?: ConsignedCreateManyCustomerInputEnvelope
    connect?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ConsignedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ConsignedCreateWithoutCustomerInput, ConsignedUncheckedCreateWithoutCustomerInput> | ConsignedCreateWithoutCustomerInput[] | ConsignedUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ConsignedCreateOrConnectWithoutCustomerInput | ConsignedCreateOrConnectWithoutCustomerInput[]
    upsert?: ConsignedUpsertWithWhereUniqueWithoutCustomerInput | ConsignedUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ConsignedCreateManyCustomerInputEnvelope
    set?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
    disconnect?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
    delete?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
    connect?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
    update?: ConsignedUpdateWithWhereUniqueWithoutCustomerInput | ConsignedUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ConsignedUpdateManyWithWhereWithoutCustomerInput | ConsignedUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ConsignedScalarWhereInput | ConsignedScalarWhereInput[]
  }

  export type ConsignedUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ConsignedCreateWithoutCustomerInput, ConsignedUncheckedCreateWithoutCustomerInput> | ConsignedCreateWithoutCustomerInput[] | ConsignedUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ConsignedCreateOrConnectWithoutCustomerInput | ConsignedCreateOrConnectWithoutCustomerInput[]
    upsert?: ConsignedUpsertWithWhereUniqueWithoutCustomerInput | ConsignedUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ConsignedCreateManyCustomerInputEnvelope
    set?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
    disconnect?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
    delete?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
    connect?: ConsignedWhereUniqueInput | ConsignedWhereUniqueInput[]
    update?: ConsignedUpdateWithWhereUniqueWithoutCustomerInput | ConsignedUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ConsignedUpdateManyWithWhereWithoutCustomerInput | ConsignedUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ConsignedScalarWhereInput | ConsignedScalarWhereInput[]
  }

  export type WineTypeCreateNestedOneWithoutWinesInput = {
    create?: XOR<WineTypeCreateWithoutWinesInput, WineTypeUncheckedCreateWithoutWinesInput>
    connectOrCreate?: WineTypeCreateOrConnectWithoutWinesInput
    connect?: WineTypeWhereUniqueInput
  }

  export type WineOnConsignedCreateNestedManyWithoutWinesInput = {
    create?: XOR<WineOnConsignedCreateWithoutWinesInput, WineOnConsignedUncheckedCreateWithoutWinesInput> | WineOnConsignedCreateWithoutWinesInput[] | WineOnConsignedUncheckedCreateWithoutWinesInput[]
    connectOrCreate?: WineOnConsignedCreateOrConnectWithoutWinesInput | WineOnConsignedCreateOrConnectWithoutWinesInput[]
    createMany?: WineOnConsignedCreateManyWinesInputEnvelope
    connect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
  }

  export type WineOnConsignedUncheckedCreateNestedManyWithoutWinesInput = {
    create?: XOR<WineOnConsignedCreateWithoutWinesInput, WineOnConsignedUncheckedCreateWithoutWinesInput> | WineOnConsignedCreateWithoutWinesInput[] | WineOnConsignedUncheckedCreateWithoutWinesInput[]
    connectOrCreate?: WineOnConsignedCreateOrConnectWithoutWinesInput | WineOnConsignedCreateOrConnectWithoutWinesInput[]
    createMany?: WineOnConsignedCreateManyWinesInputEnvelope
    connect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
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

  export type WineOnConsignedUpdateManyWithoutWinesNestedInput = {
    create?: XOR<WineOnConsignedCreateWithoutWinesInput, WineOnConsignedUncheckedCreateWithoutWinesInput> | WineOnConsignedCreateWithoutWinesInput[] | WineOnConsignedUncheckedCreateWithoutWinesInput[]
    connectOrCreate?: WineOnConsignedCreateOrConnectWithoutWinesInput | WineOnConsignedCreateOrConnectWithoutWinesInput[]
    upsert?: WineOnConsignedUpsertWithWhereUniqueWithoutWinesInput | WineOnConsignedUpsertWithWhereUniqueWithoutWinesInput[]
    createMany?: WineOnConsignedCreateManyWinesInputEnvelope
    set?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    disconnect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    delete?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    connect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    update?: WineOnConsignedUpdateWithWhereUniqueWithoutWinesInput | WineOnConsignedUpdateWithWhereUniqueWithoutWinesInput[]
    updateMany?: WineOnConsignedUpdateManyWithWhereWithoutWinesInput | WineOnConsignedUpdateManyWithWhereWithoutWinesInput[]
    deleteMany?: WineOnConsignedScalarWhereInput | WineOnConsignedScalarWhereInput[]
  }

  export type WineOnConsignedUncheckedUpdateManyWithoutWinesNestedInput = {
    create?: XOR<WineOnConsignedCreateWithoutWinesInput, WineOnConsignedUncheckedCreateWithoutWinesInput> | WineOnConsignedCreateWithoutWinesInput[] | WineOnConsignedUncheckedCreateWithoutWinesInput[]
    connectOrCreate?: WineOnConsignedCreateOrConnectWithoutWinesInput | WineOnConsignedCreateOrConnectWithoutWinesInput[]
    upsert?: WineOnConsignedUpsertWithWhereUniqueWithoutWinesInput | WineOnConsignedUpsertWithWhereUniqueWithoutWinesInput[]
    createMany?: WineOnConsignedCreateManyWinesInputEnvelope
    set?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    disconnect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    delete?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    connect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    update?: WineOnConsignedUpdateWithWhereUniqueWithoutWinesInput | WineOnConsignedUpdateWithWhereUniqueWithoutWinesInput[]
    updateMany?: WineOnConsignedUpdateManyWithWhereWithoutWinesInput | WineOnConsignedUpdateManyWithWhereWithoutWinesInput[]
    deleteMany?: WineOnConsignedScalarWhereInput | WineOnConsignedScalarWhereInput[]
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

  export type CustomerCreateNestedOneWithoutConsignedInput = {
    create?: XOR<CustomerCreateWithoutConsignedInput, CustomerUncheckedCreateWithoutConsignedInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutConsignedInput
    connect?: CustomerWhereUniqueInput
  }

  export type WineOnConsignedCreateNestedManyWithoutConsignedInput = {
    create?: XOR<WineOnConsignedCreateWithoutConsignedInput, WineOnConsignedUncheckedCreateWithoutConsignedInput> | WineOnConsignedCreateWithoutConsignedInput[] | WineOnConsignedUncheckedCreateWithoutConsignedInput[]
    connectOrCreate?: WineOnConsignedCreateOrConnectWithoutConsignedInput | WineOnConsignedCreateOrConnectWithoutConsignedInput[]
    createMany?: WineOnConsignedCreateManyConsignedInputEnvelope
    connect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
  }

  export type WineOnConsignedUncheckedCreateNestedManyWithoutConsignedInput = {
    create?: XOR<WineOnConsignedCreateWithoutConsignedInput, WineOnConsignedUncheckedCreateWithoutConsignedInput> | WineOnConsignedCreateWithoutConsignedInput[] | WineOnConsignedUncheckedCreateWithoutConsignedInput[]
    connectOrCreate?: WineOnConsignedCreateOrConnectWithoutConsignedInput | WineOnConsignedCreateOrConnectWithoutConsignedInput[]
    createMany?: WineOnConsignedCreateManyConsignedInputEnvelope
    connect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
  }

  export type EnumConsignedStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConsignedStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneRequiredWithoutConsignedNestedInput = {
    create?: XOR<CustomerCreateWithoutConsignedInput, CustomerUncheckedCreateWithoutConsignedInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutConsignedInput
    upsert?: CustomerUpsertWithoutConsignedInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutConsignedInput, CustomerUpdateWithoutConsignedInput>, CustomerUncheckedUpdateWithoutConsignedInput>
  }

  export type WineOnConsignedUpdateManyWithoutConsignedNestedInput = {
    create?: XOR<WineOnConsignedCreateWithoutConsignedInput, WineOnConsignedUncheckedCreateWithoutConsignedInput> | WineOnConsignedCreateWithoutConsignedInput[] | WineOnConsignedUncheckedCreateWithoutConsignedInput[]
    connectOrCreate?: WineOnConsignedCreateOrConnectWithoutConsignedInput | WineOnConsignedCreateOrConnectWithoutConsignedInput[]
    upsert?: WineOnConsignedUpsertWithWhereUniqueWithoutConsignedInput | WineOnConsignedUpsertWithWhereUniqueWithoutConsignedInput[]
    createMany?: WineOnConsignedCreateManyConsignedInputEnvelope
    set?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    disconnect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    delete?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    connect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    update?: WineOnConsignedUpdateWithWhereUniqueWithoutConsignedInput | WineOnConsignedUpdateWithWhereUniqueWithoutConsignedInput[]
    updateMany?: WineOnConsignedUpdateManyWithWhereWithoutConsignedInput | WineOnConsignedUpdateManyWithWhereWithoutConsignedInput[]
    deleteMany?: WineOnConsignedScalarWhereInput | WineOnConsignedScalarWhereInput[]
  }

  export type WineOnConsignedUncheckedUpdateManyWithoutConsignedNestedInput = {
    create?: XOR<WineOnConsignedCreateWithoutConsignedInput, WineOnConsignedUncheckedCreateWithoutConsignedInput> | WineOnConsignedCreateWithoutConsignedInput[] | WineOnConsignedUncheckedCreateWithoutConsignedInput[]
    connectOrCreate?: WineOnConsignedCreateOrConnectWithoutConsignedInput | WineOnConsignedCreateOrConnectWithoutConsignedInput[]
    upsert?: WineOnConsignedUpsertWithWhereUniqueWithoutConsignedInput | WineOnConsignedUpsertWithWhereUniqueWithoutConsignedInput[]
    createMany?: WineOnConsignedCreateManyConsignedInputEnvelope
    set?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    disconnect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    delete?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    connect?: WineOnConsignedWhereUniqueInput | WineOnConsignedWhereUniqueInput[]
    update?: WineOnConsignedUpdateWithWhereUniqueWithoutConsignedInput | WineOnConsignedUpdateWithWhereUniqueWithoutConsignedInput[]
    updateMany?: WineOnConsignedUpdateManyWithWhereWithoutConsignedInput | WineOnConsignedUpdateManyWithWhereWithoutConsignedInput[]
    deleteMany?: WineOnConsignedScalarWhereInput | WineOnConsignedScalarWhereInput[]
  }

  export type ConsignedCreateNestedOneWithoutWinesOnConsignedInput = {
    create?: XOR<ConsignedCreateWithoutWinesOnConsignedInput, ConsignedUncheckedCreateWithoutWinesOnConsignedInput>
    connectOrCreate?: ConsignedCreateOrConnectWithoutWinesOnConsignedInput
    connect?: ConsignedWhereUniqueInput
  }

  export type WinesCreateNestedOneWithoutWinesOnConsignedInput = {
    create?: XOR<WinesCreateWithoutWinesOnConsignedInput, WinesUncheckedCreateWithoutWinesOnConsignedInput>
    connectOrCreate?: WinesCreateOrConnectWithoutWinesOnConsignedInput
    connect?: WinesWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConsignedUpdateOneRequiredWithoutWinesOnConsignedNestedInput = {
    create?: XOR<ConsignedCreateWithoutWinesOnConsignedInput, ConsignedUncheckedCreateWithoutWinesOnConsignedInput>
    connectOrCreate?: ConsignedCreateOrConnectWithoutWinesOnConsignedInput
    upsert?: ConsignedUpsertWithoutWinesOnConsignedInput
    connect?: ConsignedWhereUniqueInput
    update?: XOR<XOR<ConsignedUpdateToOneWithWhereWithoutWinesOnConsignedInput, ConsignedUpdateWithoutWinesOnConsignedInput>, ConsignedUncheckedUpdateWithoutWinesOnConsignedInput>
  }

  export type WinesUpdateOneRequiredWithoutWinesOnConsignedNestedInput = {
    create?: XOR<WinesCreateWithoutWinesOnConsignedInput, WinesUncheckedCreateWithoutWinesOnConsignedInput>
    connectOrCreate?: WinesCreateOrConnectWithoutWinesOnConsignedInput
    upsert?: WinesUpsertWithoutWinesOnConsignedInput
    connect?: WinesWhereUniqueInput
    update?: XOR<XOR<WinesUpdateToOneWithWhereWithoutWinesOnConsignedInput, WinesUpdateWithoutWinesOnConsignedInput>, WinesUncheckedUpdateWithoutWinesOnConsignedInput>
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

  export type NestedEnumConsignedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsignedStatus | EnumConsignedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsignedStatus[] | ListEnumConsignedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsignedStatus[] | ListEnumConsignedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsignedStatusFilter<$PrismaModel> | $Enums.ConsignedStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumConsignedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsignedStatus | EnumConsignedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsignedStatus[] | ListEnumConsignedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsignedStatus[] | ListEnumConsignedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsignedStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsignedStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsignedStatusFilter<$PrismaModel>
    _max?: NestedEnumConsignedStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type ConsignedCreateWithoutCustomerInput = {
    id?: string
    status?: $Enums.ConsignedStatus
    completedIn?: Date | string | null
    createdAt?: Date | string
    winesOnConsigned?: WineOnConsignedCreateNestedManyWithoutConsignedInput
  }

  export type ConsignedUncheckedCreateWithoutCustomerInput = {
    id?: string
    status?: $Enums.ConsignedStatus
    completedIn?: Date | string | null
    createdAt?: Date | string
    winesOnConsigned?: WineOnConsignedUncheckedCreateNestedManyWithoutConsignedInput
  }

  export type ConsignedCreateOrConnectWithoutCustomerInput = {
    where: ConsignedWhereUniqueInput
    create: XOR<ConsignedCreateWithoutCustomerInput, ConsignedUncheckedCreateWithoutCustomerInput>
  }

  export type ConsignedCreateManyCustomerInputEnvelope = {
    data: ConsignedCreateManyCustomerInput | ConsignedCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ConsignedUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ConsignedWhereUniqueInput
    update: XOR<ConsignedUpdateWithoutCustomerInput, ConsignedUncheckedUpdateWithoutCustomerInput>
    create: XOR<ConsignedCreateWithoutCustomerInput, ConsignedUncheckedCreateWithoutCustomerInput>
  }

  export type ConsignedUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ConsignedWhereUniqueInput
    data: XOR<ConsignedUpdateWithoutCustomerInput, ConsignedUncheckedUpdateWithoutCustomerInput>
  }

  export type ConsignedUpdateManyWithWhereWithoutCustomerInput = {
    where: ConsignedScalarWhereInput
    data: XOR<ConsignedUpdateManyMutationInput, ConsignedUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ConsignedScalarWhereInput = {
    AND?: ConsignedScalarWhereInput | ConsignedScalarWhereInput[]
    OR?: ConsignedScalarWhereInput[]
    NOT?: ConsignedScalarWhereInput | ConsignedScalarWhereInput[]
    id?: StringFilter<"Consigned"> | string
    customerId?: StringFilter<"Consigned"> | string
    status?: EnumConsignedStatusFilter<"Consigned"> | $Enums.ConsignedStatus
    completedIn?: DateTimeNullableFilter<"Consigned"> | Date | string | null
    createdAt?: DateTimeFilter<"Consigned"> | Date | string
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

  export type WineOnConsignedCreateWithoutWinesInput = {
    balance: number
    count?: number | null
    consigned: ConsignedCreateNestedOneWithoutWinesOnConsignedInput
  }

  export type WineOnConsignedUncheckedCreateWithoutWinesInput = {
    consignedId: string
    balance: number
    count?: number | null
  }

  export type WineOnConsignedCreateOrConnectWithoutWinesInput = {
    where: WineOnConsignedWhereUniqueInput
    create: XOR<WineOnConsignedCreateWithoutWinesInput, WineOnConsignedUncheckedCreateWithoutWinesInput>
  }

  export type WineOnConsignedCreateManyWinesInputEnvelope = {
    data: WineOnConsignedCreateManyWinesInput | WineOnConsignedCreateManyWinesInput[]
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

  export type WineOnConsignedUpsertWithWhereUniqueWithoutWinesInput = {
    where: WineOnConsignedWhereUniqueInput
    update: XOR<WineOnConsignedUpdateWithoutWinesInput, WineOnConsignedUncheckedUpdateWithoutWinesInput>
    create: XOR<WineOnConsignedCreateWithoutWinesInput, WineOnConsignedUncheckedCreateWithoutWinesInput>
  }

  export type WineOnConsignedUpdateWithWhereUniqueWithoutWinesInput = {
    where: WineOnConsignedWhereUniqueInput
    data: XOR<WineOnConsignedUpdateWithoutWinesInput, WineOnConsignedUncheckedUpdateWithoutWinesInput>
  }

  export type WineOnConsignedUpdateManyWithWhereWithoutWinesInput = {
    where: WineOnConsignedScalarWhereInput
    data: XOR<WineOnConsignedUpdateManyMutationInput, WineOnConsignedUncheckedUpdateManyWithoutWinesInput>
  }

  export type WineOnConsignedScalarWhereInput = {
    AND?: WineOnConsignedScalarWhereInput | WineOnConsignedScalarWhereInput[]
    OR?: WineOnConsignedScalarWhereInput[]
    NOT?: WineOnConsignedScalarWhereInput | WineOnConsignedScalarWhereInput[]
    consignedId?: StringFilter<"WineOnConsigned"> | string
    wineId?: StringFilter<"WineOnConsigned"> | string
    balance?: IntFilter<"WineOnConsigned"> | number
    count?: IntNullableFilter<"WineOnConsigned"> | number | null
  }

  export type WinesCreateWithoutTypeInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    winesOnConsigned?: WineOnConsignedCreateNestedManyWithoutWinesInput
  }

  export type WinesUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    winesOnConsigned?: WineOnConsignedUncheckedCreateNestedManyWithoutWinesInput
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

  export type CustomerCreateWithoutConsignedInput = {
    id?: string
    name: string
    register: string
  }

  export type CustomerUncheckedCreateWithoutConsignedInput = {
    id?: string
    name: string
    register: string
  }

  export type CustomerCreateOrConnectWithoutConsignedInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutConsignedInput, CustomerUncheckedCreateWithoutConsignedInput>
  }

  export type WineOnConsignedCreateWithoutConsignedInput = {
    balance: number
    count?: number | null
    wines: WinesCreateNestedOneWithoutWinesOnConsignedInput
  }

  export type WineOnConsignedUncheckedCreateWithoutConsignedInput = {
    wineId: string
    balance: number
    count?: number | null
  }

  export type WineOnConsignedCreateOrConnectWithoutConsignedInput = {
    where: WineOnConsignedWhereUniqueInput
    create: XOR<WineOnConsignedCreateWithoutConsignedInput, WineOnConsignedUncheckedCreateWithoutConsignedInput>
  }

  export type WineOnConsignedCreateManyConsignedInputEnvelope = {
    data: WineOnConsignedCreateManyConsignedInput | WineOnConsignedCreateManyConsignedInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutConsignedInput = {
    update: XOR<CustomerUpdateWithoutConsignedInput, CustomerUncheckedUpdateWithoutConsignedInput>
    create: XOR<CustomerCreateWithoutConsignedInput, CustomerUncheckedCreateWithoutConsignedInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutConsignedInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutConsignedInput, CustomerUncheckedUpdateWithoutConsignedInput>
  }

  export type CustomerUpdateWithoutConsignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutConsignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
  }

  export type WineOnConsignedUpsertWithWhereUniqueWithoutConsignedInput = {
    where: WineOnConsignedWhereUniqueInput
    update: XOR<WineOnConsignedUpdateWithoutConsignedInput, WineOnConsignedUncheckedUpdateWithoutConsignedInput>
    create: XOR<WineOnConsignedCreateWithoutConsignedInput, WineOnConsignedUncheckedCreateWithoutConsignedInput>
  }

  export type WineOnConsignedUpdateWithWhereUniqueWithoutConsignedInput = {
    where: WineOnConsignedWhereUniqueInput
    data: XOR<WineOnConsignedUpdateWithoutConsignedInput, WineOnConsignedUncheckedUpdateWithoutConsignedInput>
  }

  export type WineOnConsignedUpdateManyWithWhereWithoutConsignedInput = {
    where: WineOnConsignedScalarWhereInput
    data: XOR<WineOnConsignedUpdateManyMutationInput, WineOnConsignedUncheckedUpdateManyWithoutConsignedInput>
  }

  export type ConsignedCreateWithoutWinesOnConsignedInput = {
    id?: string
    status?: $Enums.ConsignedStatus
    completedIn?: Date | string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutConsignedInput
  }

  export type ConsignedUncheckedCreateWithoutWinesOnConsignedInput = {
    id?: string
    customerId: string
    status?: $Enums.ConsignedStatus
    completedIn?: Date | string | null
    createdAt?: Date | string
  }

  export type ConsignedCreateOrConnectWithoutWinesOnConsignedInput = {
    where: ConsignedWhereUniqueInput
    create: XOR<ConsignedCreateWithoutWinesOnConsignedInput, ConsignedUncheckedCreateWithoutWinesOnConsignedInput>
  }

  export type WinesCreateWithoutWinesOnConsignedInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    type: WineTypeCreateNestedOneWithoutWinesInput
  }

  export type WinesUncheckedCreateWithoutWinesOnConsignedInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    price: number
    typeId: string
  }

  export type WinesCreateOrConnectWithoutWinesOnConsignedInput = {
    where: WinesWhereUniqueInput
    create: XOR<WinesCreateWithoutWinesOnConsignedInput, WinesUncheckedCreateWithoutWinesOnConsignedInput>
  }

  export type ConsignedUpsertWithoutWinesOnConsignedInput = {
    update: XOR<ConsignedUpdateWithoutWinesOnConsignedInput, ConsignedUncheckedUpdateWithoutWinesOnConsignedInput>
    create: XOR<ConsignedCreateWithoutWinesOnConsignedInput, ConsignedUncheckedCreateWithoutWinesOnConsignedInput>
    where?: ConsignedWhereInput
  }

  export type ConsignedUpdateToOneWithWhereWithoutWinesOnConsignedInput = {
    where?: ConsignedWhereInput
    data: XOR<ConsignedUpdateWithoutWinesOnConsignedInput, ConsignedUncheckedUpdateWithoutWinesOnConsignedInput>
  }

  export type ConsignedUpdateWithoutWinesOnConsignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutConsignedNestedInput
  }

  export type ConsignedUncheckedUpdateWithoutWinesOnConsignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinesUpsertWithoutWinesOnConsignedInput = {
    update: XOR<WinesUpdateWithoutWinesOnConsignedInput, WinesUncheckedUpdateWithoutWinesOnConsignedInput>
    create: XOR<WinesCreateWithoutWinesOnConsignedInput, WinesUncheckedCreateWithoutWinesOnConsignedInput>
    where?: WinesWhereInput
  }

  export type WinesUpdateToOneWithWhereWithoutWinesOnConsignedInput = {
    where?: WinesWhereInput
    data: XOR<WinesUpdateWithoutWinesOnConsignedInput, WinesUncheckedUpdateWithoutWinesOnConsignedInput>
  }

  export type WinesUpdateWithoutWinesOnConsignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    type?: WineTypeUpdateOneRequiredWithoutWinesNestedInput
  }

  export type WinesUncheckedUpdateWithoutWinesOnConsignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsignedCreateManyCustomerInput = {
    id?: string
    status?: $Enums.ConsignedStatus
    completedIn?: Date | string | null
    createdAt?: Date | string
  }

  export type ConsignedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winesOnConsigned?: WineOnConsignedUpdateManyWithoutConsignedNestedInput
  }

  export type ConsignedUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winesOnConsigned?: WineOnConsignedUncheckedUpdateManyWithoutConsignedNestedInput
  }

  export type ConsignedUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConsignedStatusFieldUpdateOperationsInput | $Enums.ConsignedStatus
    completedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WineOnConsignedCreateManyWinesInput = {
    consignedId: string
    balance: number
    count?: number | null
  }

  export type WineOnConsignedUpdateWithoutWinesInput = {
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    consigned?: ConsignedUpdateOneRequiredWithoutWinesOnConsignedNestedInput
  }

  export type WineOnConsignedUncheckedUpdateWithoutWinesInput = {
    consignedId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WineOnConsignedUncheckedUpdateManyWithoutWinesInput = {
    consignedId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
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
    winesOnConsigned?: WineOnConsignedUpdateManyWithoutWinesNestedInput
  }

  export type WinesUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    winesOnConsigned?: WineOnConsignedUncheckedUpdateManyWithoutWinesNestedInput
  }

  export type WinesUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
  }

  export type WineOnConsignedCreateManyConsignedInput = {
    wineId: string
    balance: number
    count?: number | null
  }

  export type WineOnConsignedUpdateWithoutConsignedInput = {
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
    wines?: WinesUpdateOneRequiredWithoutWinesOnConsignedNestedInput
  }

  export type WineOnConsignedUncheckedUpdateWithoutConsignedInput = {
    wineId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WineOnConsignedUncheckedUpdateManyWithoutConsignedInput = {
    wineId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    count?: NullableIntFieldUpdateOperationsInput | number | null
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