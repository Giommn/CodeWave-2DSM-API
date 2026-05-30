
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Orgaos
 * 
 */
export type Orgaos = $Result.DefaultSelection<Prisma.$OrgaosPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Norma
 * 
 */
export type Norma = $Result.DefaultSelection<Prisma.$NormaPayload>
/**
 * Model Notas
 * 
 */
export type Notas = $Result.DefaultSelection<Prisma.$NotasPayload>
/**
 * Model Norma_Categoria
 * 
 */
export type Norma_Categoria = $Result.DefaultSelection<Prisma.$Norma_CategoriaPayload>
/**
 * Model Normas_Referenciadas
 * 
 */
export type Normas_Referenciadas = $Result.DefaultSelection<Prisma.$Normas_ReferenciadasPayload>
/**
 * Model Normas_Versoes
 * 
 */
export type Normas_Versoes = $Result.DefaultSelection<Prisma.$Normas_VersoesPayload>
/**
 * Model Mfa
 * 
 */
export type Mfa = $Result.DefaultSelection<Prisma.$MfaPayload>
/**
 * Model Historico_Acesso_Normas
 * 
 */
export type Historico_Acesso_Normas = $Result.DefaultSelection<Prisma.$Historico_Acesso_NormasPayload>
/**
 * Model PedidosdeAlteracao
 * 
 */
export type PedidosdeAlteracao = $Result.DefaultSelection<Prisma.$PedidosdeAlteracaoPayload>
/**
 * Model Favoritos
 * 
 */
export type Favoritos = $Result.DefaultSelection<Prisma.$FavoritosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NivelUser: {
  ADM: 'ADM',
  USER: 'USER',
  CHECKER: 'CHECKER'
};

export type NivelUser = (typeof NivelUser)[keyof typeof NivelUser]


export const AcaoDeAlteracao: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE'
};

export type AcaoDeAlteracao = (typeof AcaoDeAlteracao)[keyof typeof AcaoDeAlteracao]


export const NotaOrNorma: {
  NORMA: 'NORMA',
  NOTA: 'NOTA'
};

export type NotaOrNorma = (typeof NotaOrNorma)[keyof typeof NotaOrNorma]


export const Status: {
  PENDENTE: 'PENDENTE',
  REJEITADO: 'REJEITADO',
  APROVADO: 'APROVADO'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type NivelUser = $Enums.NivelUser

export const NivelUser: typeof $Enums.NivelUser

export type AcaoDeAlteracao = $Enums.AcaoDeAlteracao

export const AcaoDeAlteracao: typeof $Enums.AcaoDeAlteracao

export type NotaOrNorma = $Enums.NotaOrNorma

export const NotaOrNorma: typeof $Enums.NotaOrNorma

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orgaos`: Exposes CRUD operations for the **Orgaos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orgaos
    * const orgaos = await prisma.orgaos.findMany()
    * ```
    */
  get orgaos(): Prisma.OrgaosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.norma`: Exposes CRUD operations for the **Norma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Normas
    * const normas = await prisma.norma.findMany()
    * ```
    */
  get norma(): Prisma.NormaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notas`: Exposes CRUD operations for the **Notas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notas
    * const notas = await prisma.notas.findMany()
    * ```
    */
  get notas(): Prisma.NotasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.norma_Categoria`: Exposes CRUD operations for the **Norma_Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Norma_Categorias
    * const norma_Categorias = await prisma.norma_Categoria.findMany()
    * ```
    */
  get norma_Categoria(): Prisma.Norma_CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.normas_Referenciadas`: Exposes CRUD operations for the **Normas_Referenciadas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Normas_Referenciadas
    * const normas_Referenciadas = await prisma.normas_Referenciadas.findMany()
    * ```
    */
  get normas_Referenciadas(): Prisma.Normas_ReferenciadasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.normas_Versoes`: Exposes CRUD operations for the **Normas_Versoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Normas_Versoes
    * const normas_Versoes = await prisma.normas_Versoes.findMany()
    * ```
    */
  get normas_Versoes(): Prisma.Normas_VersoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mfa`: Exposes CRUD operations for the **Mfa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mfas
    * const mfas = await prisma.mfa.findMany()
    * ```
    */
  get mfa(): Prisma.MfaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico_Acesso_Normas`: Exposes CRUD operations for the **Historico_Acesso_Normas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historico_Acesso_Normas
    * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.findMany()
    * ```
    */
  get historico_Acesso_Normas(): Prisma.Historico_Acesso_NormasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidosdeAlteracao`: Exposes CRUD operations for the **PedidosdeAlteracao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidosdeAlteracaos
    * const pedidosdeAlteracaos = await prisma.pedidosdeAlteracao.findMany()
    * ```
    */
  get pedidosdeAlteracao(): Prisma.PedidosdeAlteracaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoritos`: Exposes CRUD operations for the **Favoritos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favoritos.findMany()
    * ```
    */
  get favoritos(): Prisma.FavoritosDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Users: 'Users',
    Orgaos: 'Orgaos',
    Categoria: 'Categoria',
    Norma: 'Norma',
    Notas: 'Notas',
    Norma_Categoria: 'Norma_Categoria',
    Normas_Referenciadas: 'Normas_Referenciadas',
    Normas_Versoes: 'Normas_Versoes',
    Mfa: 'Mfa',
    Historico_Acesso_Normas: 'Historico_Acesso_Normas',
    PedidosdeAlteracao: 'PedidosdeAlteracao',
    Favoritos: 'Favoritos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "orgaos" | "categoria" | "norma" | "notas" | "norma_Categoria" | "normas_Referenciadas" | "normas_Versoes" | "mfa" | "historico_Acesso_Normas" | "pedidosdeAlteracao" | "favoritos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Orgaos: {
        payload: Prisma.$OrgaosPayload<ExtArgs>
        fields: Prisma.OrgaosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgaosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgaosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload>
          }
          findFirst: {
            args: Prisma.OrgaosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgaosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload>
          }
          findMany: {
            args: Prisma.OrgaosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload>[]
          }
          create: {
            args: Prisma.OrgaosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload>
          }
          createMany: {
            args: Prisma.OrgaosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrgaosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload>
          }
          update: {
            args: Prisma.OrgaosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload>
          }
          deleteMany: {
            args: Prisma.OrgaosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgaosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrgaosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgaosPayload>
          }
          aggregate: {
            args: Prisma.OrgaosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrgaos>
          }
          groupBy: {
            args: Prisma.OrgaosGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgaosGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgaosCountArgs<ExtArgs>
            result: $Utils.Optional<OrgaosCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Norma: {
        payload: Prisma.$NormaPayload<ExtArgs>
        fields: Prisma.NormaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NormaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NormaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload>
          }
          findFirst: {
            args: Prisma.NormaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NormaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload>
          }
          findMany: {
            args: Prisma.NormaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload>[]
          }
          create: {
            args: Prisma.NormaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload>
          }
          createMany: {
            args: Prisma.NormaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NormaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload>
          }
          update: {
            args: Prisma.NormaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload>
          }
          deleteMany: {
            args: Prisma.NormaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NormaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NormaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NormaPayload>
          }
          aggregate: {
            args: Prisma.NormaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNorma>
          }
          groupBy: {
            args: Prisma.NormaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NormaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NormaCountArgs<ExtArgs>
            result: $Utils.Optional<NormaCountAggregateOutputType> | number
          }
        }
      }
      Notas: {
        payload: Prisma.$NotasPayload<ExtArgs>
        fields: Prisma.NotasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload>
          }
          findFirst: {
            args: Prisma.NotasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload>
          }
          findMany: {
            args: Prisma.NotasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload>[]
          }
          create: {
            args: Prisma.NotasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload>
          }
          createMany: {
            args: Prisma.NotasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload>
          }
          update: {
            args: Prisma.NotasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload>
          }
          deleteMany: {
            args: Prisma.NotasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotasPayload>
          }
          aggregate: {
            args: Prisma.NotasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotas>
          }
          groupBy: {
            args: Prisma.NotasGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotasGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotasCountArgs<ExtArgs>
            result: $Utils.Optional<NotasCountAggregateOutputType> | number
          }
        }
      }
      Norma_Categoria: {
        payload: Prisma.$Norma_CategoriaPayload<ExtArgs>
        fields: Prisma.Norma_CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Norma_CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Norma_CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload>
          }
          findFirst: {
            args: Prisma.Norma_CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Norma_CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload>
          }
          findMany: {
            args: Prisma.Norma_CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload>[]
          }
          create: {
            args: Prisma.Norma_CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload>
          }
          createMany: {
            args: Prisma.Norma_CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Norma_CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload>
          }
          update: {
            args: Prisma.Norma_CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.Norma_CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Norma_CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Norma_CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Norma_CategoriaPayload>
          }
          aggregate: {
            args: Prisma.Norma_CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNorma_Categoria>
          }
          groupBy: {
            args: Prisma.Norma_CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Norma_CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Norma_CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<Norma_CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Normas_Referenciadas: {
        payload: Prisma.$Normas_ReferenciadasPayload<ExtArgs>
        fields: Prisma.Normas_ReferenciadasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Normas_ReferenciadasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Normas_ReferenciadasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload>
          }
          findFirst: {
            args: Prisma.Normas_ReferenciadasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Normas_ReferenciadasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload>
          }
          findMany: {
            args: Prisma.Normas_ReferenciadasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload>[]
          }
          create: {
            args: Prisma.Normas_ReferenciadasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload>
          }
          createMany: {
            args: Prisma.Normas_ReferenciadasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Normas_ReferenciadasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload>
          }
          update: {
            args: Prisma.Normas_ReferenciadasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload>
          }
          deleteMany: {
            args: Prisma.Normas_ReferenciadasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Normas_ReferenciadasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Normas_ReferenciadasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_ReferenciadasPayload>
          }
          aggregate: {
            args: Prisma.Normas_ReferenciadasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNormas_Referenciadas>
          }
          groupBy: {
            args: Prisma.Normas_ReferenciadasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Normas_ReferenciadasGroupByOutputType>[]
          }
          count: {
            args: Prisma.Normas_ReferenciadasCountArgs<ExtArgs>
            result: $Utils.Optional<Normas_ReferenciadasCountAggregateOutputType> | number
          }
        }
      }
      Normas_Versoes: {
        payload: Prisma.$Normas_VersoesPayload<ExtArgs>
        fields: Prisma.Normas_VersoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Normas_VersoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Normas_VersoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload>
          }
          findFirst: {
            args: Prisma.Normas_VersoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Normas_VersoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload>
          }
          findMany: {
            args: Prisma.Normas_VersoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload>[]
          }
          create: {
            args: Prisma.Normas_VersoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload>
          }
          createMany: {
            args: Prisma.Normas_VersoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Normas_VersoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload>
          }
          update: {
            args: Prisma.Normas_VersoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload>
          }
          deleteMany: {
            args: Prisma.Normas_VersoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Normas_VersoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Normas_VersoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Normas_VersoesPayload>
          }
          aggregate: {
            args: Prisma.Normas_VersoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNormas_Versoes>
          }
          groupBy: {
            args: Prisma.Normas_VersoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Normas_VersoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Normas_VersoesCountArgs<ExtArgs>
            result: $Utils.Optional<Normas_VersoesCountAggregateOutputType> | number
          }
        }
      }
      Mfa: {
        payload: Prisma.$MfaPayload<ExtArgs>
        fields: Prisma.MfaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MfaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MfaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload>
          }
          findFirst: {
            args: Prisma.MfaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MfaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload>
          }
          findMany: {
            args: Prisma.MfaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload>[]
          }
          create: {
            args: Prisma.MfaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload>
          }
          createMany: {
            args: Prisma.MfaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MfaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload>
          }
          update: {
            args: Prisma.MfaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload>
          }
          deleteMany: {
            args: Prisma.MfaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MfaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MfaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaPayload>
          }
          aggregate: {
            args: Prisma.MfaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMfa>
          }
          groupBy: {
            args: Prisma.MfaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MfaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MfaCountArgs<ExtArgs>
            result: $Utils.Optional<MfaCountAggregateOutputType> | number
          }
        }
      }
      Historico_Acesso_Normas: {
        payload: Prisma.$Historico_Acesso_NormasPayload<ExtArgs>
        fields: Prisma.Historico_Acesso_NormasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Historico_Acesso_NormasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Historico_Acesso_NormasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload>
          }
          findFirst: {
            args: Prisma.Historico_Acesso_NormasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Historico_Acesso_NormasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload>
          }
          findMany: {
            args: Prisma.Historico_Acesso_NormasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload>[]
          }
          create: {
            args: Prisma.Historico_Acesso_NormasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload>
          }
          createMany: {
            args: Prisma.Historico_Acesso_NormasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Historico_Acesso_NormasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload>
          }
          update: {
            args: Prisma.Historico_Acesso_NormasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload>
          }
          deleteMany: {
            args: Prisma.Historico_Acesso_NormasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Historico_Acesso_NormasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Historico_Acesso_NormasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historico_Acesso_NormasPayload>
          }
          aggregate: {
            args: Prisma.Historico_Acesso_NormasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico_Acesso_Normas>
          }
          groupBy: {
            args: Prisma.Historico_Acesso_NormasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historico_Acesso_NormasGroupByOutputType>[]
          }
          count: {
            args: Prisma.Historico_Acesso_NormasCountArgs<ExtArgs>
            result: $Utils.Optional<Historico_Acesso_NormasCountAggregateOutputType> | number
          }
        }
      }
      PedidosdeAlteracao: {
        payload: Prisma.$PedidosdeAlteracaoPayload<ExtArgs>
        fields: Prisma.PedidosdeAlteracaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidosdeAlteracaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidosdeAlteracaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload>
          }
          findFirst: {
            args: Prisma.PedidosdeAlteracaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidosdeAlteracaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload>
          }
          findMany: {
            args: Prisma.PedidosdeAlteracaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload>[]
          }
          create: {
            args: Prisma.PedidosdeAlteracaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload>
          }
          createMany: {
            args: Prisma.PedidosdeAlteracaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidosdeAlteracaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload>
          }
          update: {
            args: Prisma.PedidosdeAlteracaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload>
          }
          deleteMany: {
            args: Prisma.PedidosdeAlteracaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidosdeAlteracaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidosdeAlteracaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosdeAlteracaoPayload>
          }
          aggregate: {
            args: Prisma.PedidosdeAlteracaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidosdeAlteracao>
          }
          groupBy: {
            args: Prisma.PedidosdeAlteracaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidosdeAlteracaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidosdeAlteracaoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidosdeAlteracaoCountAggregateOutputType> | number
          }
        }
      }
      Favoritos: {
        payload: Prisma.$FavoritosPayload<ExtArgs>
        fields: Prisma.FavoritosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload>
          }
          findFirst: {
            args: Prisma.FavoritosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload>
          }
          findMany: {
            args: Prisma.FavoritosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload>[]
          }
          create: {
            args: Prisma.FavoritosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload>
          }
          createMany: {
            args: Prisma.FavoritosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoritosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload>
          }
          update: {
            args: Prisma.FavoritosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload>
          }
          deleteMany: {
            args: Prisma.FavoritosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoritosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritosPayload>
          }
          aggregate: {
            args: Prisma.FavoritosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoritos>
          }
          groupBy: {
            args: Prisma.FavoritosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritosGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritosCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritosCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    orgaos?: OrgaosOmit
    categoria?: CategoriaOmit
    norma?: NormaOmit
    notas?: NotasOmit
    norma_Categoria?: Norma_CategoriaOmit
    normas_Referenciadas?: Normas_ReferenciadasOmit
    normas_Versoes?: Normas_VersoesOmit
    mfa?: MfaOmit
    historico_Acesso_Normas?: Historico_Acesso_NormasOmit
    pedidosdeAlteracao?: PedidosdeAlteracaoOmit
    favoritos?: FavoritosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    orgaos: number
    categoria: number
    normas: number
    notas: number
    mfa: number
    favoritos: number
    historicoAcessoNormas: number
    pedidos: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orgaos?: boolean | UsersCountOutputTypeCountOrgaosArgs
    categoria?: boolean | UsersCountOutputTypeCountCategoriaArgs
    normas?: boolean | UsersCountOutputTypeCountNormasArgs
    notas?: boolean | UsersCountOutputTypeCountNotasArgs
    mfa?: boolean | UsersCountOutputTypeCountMfaArgs
    favoritos?: boolean | UsersCountOutputTypeCountFavoritosArgs
    historicoAcessoNormas?: boolean | UsersCountOutputTypeCountHistoricoAcessoNormasArgs
    pedidos?: boolean | UsersCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrgaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgaosWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNormasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NormaWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotasWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMfaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfaWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritosWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountHistoricoAcessoNormasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historico_Acesso_NormasWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidosdeAlteracaoWhereInput
  }


  /**
   * Count Type OrgaosCountOutputType
   */

  export type OrgaosCountOutputType = {
    normas: number
  }

  export type OrgaosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    normas?: boolean | OrgaosCountOutputTypeCountNormasArgs
  }

  // Custom InputTypes
  /**
   * OrgaosCountOutputType without action
   */
  export type OrgaosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgaosCountOutputType
     */
    select?: OrgaosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrgaosCountOutputType without action
   */
  export type OrgaosCountOutputTypeCountNormasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NormaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    norma_cat: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    norma_cat?: boolean | CategoriaCountOutputTypeCountNorma_catArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountNorma_catArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Norma_CategoriaWhereInput
  }


  /**
   * Count Type NormaCountOutputType
   */

  export type NormaCountOutputType = {
    notas: number
    normas_origem: number
    normas_destino: number
    versoes: number
    HistoricoAcessoNormas: number
    favoritos: number
    categoria: number
    pedidos: number
  }

  export type NormaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notas?: boolean | NormaCountOutputTypeCountNotasArgs
    normas_origem?: boolean | NormaCountOutputTypeCountNormas_origemArgs
    normas_destino?: boolean | NormaCountOutputTypeCountNormas_destinoArgs
    versoes?: boolean | NormaCountOutputTypeCountVersoesArgs
    HistoricoAcessoNormas?: boolean | NormaCountOutputTypeCountHistoricoAcessoNormasArgs
    favoritos?: boolean | NormaCountOutputTypeCountFavoritosArgs
    categoria?: boolean | NormaCountOutputTypeCountCategoriaArgs
    pedidos?: boolean | NormaCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NormaCountOutputType
     */
    select?: NormaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotasWhereInput
  }

  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeCountNormas_origemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Normas_ReferenciadasWhereInput
  }

  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeCountNormas_destinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Normas_ReferenciadasWhereInput
  }

  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeCountVersoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Normas_VersoesWhereInput
  }

  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeCountHistoricoAcessoNormasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historico_Acesso_NormasWhereInput
  }

  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritosWhereInput
  }

  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeCountCategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Norma_CategoriaWhereInput
  }

  /**
   * NormaCountOutputType without action
   */
  export type NormaCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidosdeAlteracaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UsersSumAggregateOutputType = {
    id_user: number | null
  }

  export type UsersMinAggregateOutputType = {
    id_user: number | null
    user_name: string | null
    email: string | null
    user_senha_hash: string | null
    data_criacao: Date | null
    nivel_user: $Enums.NivelUser | null
  }

  export type UsersMaxAggregateOutputType = {
    id_user: number | null
    user_name: string | null
    email: string | null
    user_senha_hash: string | null
    data_criacao: Date | null
    nivel_user: $Enums.NivelUser | null
  }

  export type UsersCountAggregateOutputType = {
    id_user: number
    user_name: number
    email: number
    user_senha_hash: number
    data_criacao: number
    nivel_user: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id_user?: true
  }

  export type UsersSumAggregateInputType = {
    id_user?: true
  }

  export type UsersMinAggregateInputType = {
    id_user?: true
    user_name?: true
    email?: true
    user_senha_hash?: true
    data_criacao?: true
    nivel_user?: true
  }

  export type UsersMaxAggregateInputType = {
    id_user?: true
    user_name?: true
    email?: true
    user_senha_hash?: true
    data_criacao?: true
    nivel_user?: true
  }

  export type UsersCountAggregateInputType = {
    id_user?: true
    user_name?: true
    email?: true
    user_senha_hash?: true
    data_criacao?: true
    nivel_user?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_user: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao: Date
    nivel_user: $Enums.NivelUser
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    user_name?: boolean
    email?: boolean
    user_senha_hash?: boolean
    data_criacao?: boolean
    nivel_user?: boolean
    orgaos?: boolean | Users$orgaosArgs<ExtArgs>
    categoria?: boolean | Users$categoriaArgs<ExtArgs>
    normas?: boolean | Users$normasArgs<ExtArgs>
    notas?: boolean | Users$notasArgs<ExtArgs>
    mfa?: boolean | Users$mfaArgs<ExtArgs>
    favoritos?: boolean | Users$favoritosArgs<ExtArgs>
    historicoAcessoNormas?: boolean | Users$historicoAcessoNormasArgs<ExtArgs>
    pedidos?: boolean | Users$pedidosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id_user?: boolean
    user_name?: boolean
    email?: boolean
    user_senha_hash?: boolean
    data_criacao?: boolean
    nivel_user?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "user_name" | "email" | "user_senha_hash" | "data_criacao" | "nivel_user", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orgaos?: boolean | Users$orgaosArgs<ExtArgs>
    categoria?: boolean | Users$categoriaArgs<ExtArgs>
    normas?: boolean | Users$normasArgs<ExtArgs>
    notas?: boolean | Users$notasArgs<ExtArgs>
    mfa?: boolean | Users$mfaArgs<ExtArgs>
    favoritos?: boolean | Users$favoritosArgs<ExtArgs>
    historicoAcessoNormas?: boolean | Users$historicoAcessoNormasArgs<ExtArgs>
    pedidos?: boolean | Users$pedidosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      orgaos: Prisma.$OrgaosPayload<ExtArgs>[]
      categoria: Prisma.$CategoriaPayload<ExtArgs>[]
      normas: Prisma.$NormaPayload<ExtArgs>[]
      notas: Prisma.$NotasPayload<ExtArgs>[]
      mfa: Prisma.$MfaPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritosPayload<ExtArgs>[]
      historicoAcessoNormas: Prisma.$Historico_Acesso_NormasPayload<ExtArgs>[]
      pedidos: Prisma.$PedidosdeAlteracaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      user_name: string
      email: string
      user_senha_hash: string
      data_criacao: Date
      nivel_user: $Enums.NivelUser
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const usersWithId_userOnly = await prisma.users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orgaos<T extends Users$orgaosArgs<ExtArgs> = {}>(args?: Subset<T, Users$orgaosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends Users$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Users$categoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    normas<T extends Users$normasArgs<ExtArgs> = {}>(args?: Subset<T, Users$normasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notas<T extends Users$notasArgs<ExtArgs> = {}>(args?: Subset<T, Users$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mfa<T extends Users$mfaArgs<ExtArgs> = {}>(args?: Subset<T, Users$mfaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Users$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Users$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicoAcessoNormas<T extends Users$historicoAcessoNormasArgs<ExtArgs> = {}>(args?: Subset<T, Users$historicoAcessoNormasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Users$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Users$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id_user: FieldRef<"Users", 'Int'>
    readonly user_name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly user_senha_hash: FieldRef<"Users", 'String'>
    readonly data_criacao: FieldRef<"Users", 'DateTime'>
    readonly nivel_user: FieldRef<"Users", 'NivelUser'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.orgaos
   */
  export type Users$orgaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    where?: OrgaosWhereInput
    orderBy?: OrgaosOrderByWithRelationInput | OrgaosOrderByWithRelationInput[]
    cursor?: OrgaosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrgaosScalarFieldEnum | OrgaosScalarFieldEnum[]
  }

  /**
   * Users.categoria
   */
  export type Users$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Users.normas
   */
  export type Users$normasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    where?: NormaWhereInput
    orderBy?: NormaOrderByWithRelationInput | NormaOrderByWithRelationInput[]
    cursor?: NormaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NormaScalarFieldEnum | NormaScalarFieldEnum[]
  }

  /**
   * Users.notas
   */
  export type Users$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    where?: NotasWhereInput
    orderBy?: NotasOrderByWithRelationInput | NotasOrderByWithRelationInput[]
    cursor?: NotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * Users.mfa
   */
  export type Users$mfaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    where?: MfaWhereInput
    orderBy?: MfaOrderByWithRelationInput | MfaOrderByWithRelationInput[]
    cursor?: MfaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MfaScalarFieldEnum | MfaScalarFieldEnum[]
  }

  /**
   * Users.favoritos
   */
  export type Users$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    where?: FavoritosWhereInput
    orderBy?: FavoritosOrderByWithRelationInput | FavoritosOrderByWithRelationInput[]
    cursor?: FavoritosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * Users.historicoAcessoNormas
   */
  export type Users$historicoAcessoNormasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    where?: Historico_Acesso_NormasWhereInput
    orderBy?: Historico_Acesso_NormasOrderByWithRelationInput | Historico_Acesso_NormasOrderByWithRelationInput[]
    cursor?: Historico_Acesso_NormasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historico_Acesso_NormasScalarFieldEnum | Historico_Acesso_NormasScalarFieldEnum[]
  }

  /**
   * Users.pedidos
   */
  export type Users$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    where?: PedidosdeAlteracaoWhereInput
    orderBy?: PedidosdeAlteracaoOrderByWithRelationInput | PedidosdeAlteracaoOrderByWithRelationInput[]
    cursor?: PedidosdeAlteracaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidosdeAlteracaoScalarFieldEnum | PedidosdeAlteracaoScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Orgaos
   */

  export type AggregateOrgaos = {
    _count: OrgaosCountAggregateOutputType | null
    _avg: OrgaosAvgAggregateOutputType | null
    _sum: OrgaosSumAggregateOutputType | null
    _min: OrgaosMinAggregateOutputType | null
    _max: OrgaosMaxAggregateOutputType | null
  }

  export type OrgaosAvgAggregateOutputType = {
    org_id: number | null
    adm_criador: number | null
  }

  export type OrgaosSumAggregateOutputType = {
    org_id: number | null
    adm_criador: number | null
  }

  export type OrgaosMinAggregateOutputType = {
    org_id: number | null
    org_desc: string | null
    org_sigla: string | null
    adm_criador: number | null
  }

  export type OrgaosMaxAggregateOutputType = {
    org_id: number | null
    org_desc: string | null
    org_sigla: string | null
    adm_criador: number | null
  }

  export type OrgaosCountAggregateOutputType = {
    org_id: number
    org_desc: number
    org_sigla: number
    adm_criador: number
    _all: number
  }


  export type OrgaosAvgAggregateInputType = {
    org_id?: true
    adm_criador?: true
  }

  export type OrgaosSumAggregateInputType = {
    org_id?: true
    adm_criador?: true
  }

  export type OrgaosMinAggregateInputType = {
    org_id?: true
    org_desc?: true
    org_sigla?: true
    adm_criador?: true
  }

  export type OrgaosMaxAggregateInputType = {
    org_id?: true
    org_desc?: true
    org_sigla?: true
    adm_criador?: true
  }

  export type OrgaosCountAggregateInputType = {
    org_id?: true
    org_desc?: true
    org_sigla?: true
    adm_criador?: true
    _all?: true
  }

  export type OrgaosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orgaos to aggregate.
     */
    where?: OrgaosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgaos to fetch.
     */
    orderBy?: OrgaosOrderByWithRelationInput | OrgaosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgaosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orgaos
    **/
    _count?: true | OrgaosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrgaosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrgaosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgaosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgaosMaxAggregateInputType
  }

  export type GetOrgaosAggregateType<T extends OrgaosAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgaos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgaos[P]>
      : GetScalarType<T[P], AggregateOrgaos[P]>
  }




  export type OrgaosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgaosWhereInput
    orderBy?: OrgaosOrderByWithAggregationInput | OrgaosOrderByWithAggregationInput[]
    by: OrgaosScalarFieldEnum[] | OrgaosScalarFieldEnum
    having?: OrgaosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgaosCountAggregateInputType | true
    _avg?: OrgaosAvgAggregateInputType
    _sum?: OrgaosSumAggregateInputType
    _min?: OrgaosMinAggregateInputType
    _max?: OrgaosMaxAggregateInputType
  }

  export type OrgaosGroupByOutputType = {
    org_id: number
    org_desc: string
    org_sigla: string
    adm_criador: number | null
    _count: OrgaosCountAggregateOutputType | null
    _avg: OrgaosAvgAggregateOutputType | null
    _sum: OrgaosSumAggregateOutputType | null
    _min: OrgaosMinAggregateOutputType | null
    _max: OrgaosMaxAggregateOutputType | null
  }

  type GetOrgaosGroupByPayload<T extends OrgaosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgaosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgaosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgaosGroupByOutputType[P]>
            : GetScalarType<T[P], OrgaosGroupByOutputType[P]>
        }
      >
    >


  export type OrgaosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    org_desc?: boolean
    org_sigla?: boolean
    adm_criador?: boolean
    normas?: boolean | Orgaos$normasArgs<ExtArgs>
    usuarios?: boolean | Orgaos$usuariosArgs<ExtArgs>
    _count?: boolean | OrgaosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgaos"]>



  export type OrgaosSelectScalar = {
    org_id?: boolean
    org_desc?: boolean
    org_sigla?: boolean
    adm_criador?: boolean
  }

  export type OrgaosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"org_id" | "org_desc" | "org_sigla" | "adm_criador", ExtArgs["result"]["orgaos"]>
  export type OrgaosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    normas?: boolean | Orgaos$normasArgs<ExtArgs>
    usuarios?: boolean | Orgaos$usuariosArgs<ExtArgs>
    _count?: boolean | OrgaosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrgaosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orgaos"
    objects: {
      normas: Prisma.$NormaPayload<ExtArgs>[]
      usuarios: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      org_id: number
      org_desc: string
      org_sigla: string
      adm_criador: number | null
    }, ExtArgs["result"]["orgaos"]>
    composites: {}
  }

  type OrgaosGetPayload<S extends boolean | null | undefined | OrgaosDefaultArgs> = $Result.GetResult<Prisma.$OrgaosPayload, S>

  type OrgaosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrgaosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrgaosCountAggregateInputType | true
    }

  export interface OrgaosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orgaos'], meta: { name: 'Orgaos' } }
    /**
     * Find zero or one Orgaos that matches the filter.
     * @param {OrgaosFindUniqueArgs} args - Arguments to find a Orgaos
     * @example
     * // Get one Orgaos
     * const orgaos = await prisma.orgaos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgaosFindUniqueArgs>(args: SelectSubset<T, OrgaosFindUniqueArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orgaos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrgaosFindUniqueOrThrowArgs} args - Arguments to find a Orgaos
     * @example
     * // Get one Orgaos
     * const orgaos = await prisma.orgaos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgaosFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgaosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orgaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgaosFindFirstArgs} args - Arguments to find a Orgaos
     * @example
     * // Get one Orgaos
     * const orgaos = await prisma.orgaos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgaosFindFirstArgs>(args?: SelectSubset<T, OrgaosFindFirstArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orgaos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgaosFindFirstOrThrowArgs} args - Arguments to find a Orgaos
     * @example
     * // Get one Orgaos
     * const orgaos = await prisma.orgaos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgaosFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgaosFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orgaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgaosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orgaos
     * const orgaos = await prisma.orgaos.findMany()
     * 
     * // Get first 10 Orgaos
     * const orgaos = await prisma.orgaos.findMany({ take: 10 })
     * 
     * // Only select the `org_id`
     * const orgaosWithOrg_idOnly = await prisma.orgaos.findMany({ select: { org_id: true } })
     * 
     */
    findMany<T extends OrgaosFindManyArgs>(args?: SelectSubset<T, OrgaosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orgaos.
     * @param {OrgaosCreateArgs} args - Arguments to create a Orgaos.
     * @example
     * // Create one Orgaos
     * const Orgaos = await prisma.orgaos.create({
     *   data: {
     *     // ... data to create a Orgaos
     *   }
     * })
     * 
     */
    create<T extends OrgaosCreateArgs>(args: SelectSubset<T, OrgaosCreateArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orgaos.
     * @param {OrgaosCreateManyArgs} args - Arguments to create many Orgaos.
     * @example
     * // Create many Orgaos
     * const orgaos = await prisma.orgaos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgaosCreateManyArgs>(args?: SelectSubset<T, OrgaosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orgaos.
     * @param {OrgaosDeleteArgs} args - Arguments to delete one Orgaos.
     * @example
     * // Delete one Orgaos
     * const Orgaos = await prisma.orgaos.delete({
     *   where: {
     *     // ... filter to delete one Orgaos
     *   }
     * })
     * 
     */
    delete<T extends OrgaosDeleteArgs>(args: SelectSubset<T, OrgaosDeleteArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orgaos.
     * @param {OrgaosUpdateArgs} args - Arguments to update one Orgaos.
     * @example
     * // Update one Orgaos
     * const orgaos = await prisma.orgaos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgaosUpdateArgs>(args: SelectSubset<T, OrgaosUpdateArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orgaos.
     * @param {OrgaosDeleteManyArgs} args - Arguments to filter Orgaos to delete.
     * @example
     * // Delete a few Orgaos
     * const { count } = await prisma.orgaos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgaosDeleteManyArgs>(args?: SelectSubset<T, OrgaosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orgaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgaosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orgaos
     * const orgaos = await prisma.orgaos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgaosUpdateManyArgs>(args: SelectSubset<T, OrgaosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orgaos.
     * @param {OrgaosUpsertArgs} args - Arguments to update or create a Orgaos.
     * @example
     * // Update or create a Orgaos
     * const orgaos = await prisma.orgaos.upsert({
     *   create: {
     *     // ... data to create a Orgaos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orgaos we want to update
     *   }
     * })
     */
    upsert<T extends OrgaosUpsertArgs>(args: SelectSubset<T, OrgaosUpsertArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orgaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgaosCountArgs} args - Arguments to filter Orgaos to count.
     * @example
     * // Count the number of Orgaos
     * const count = await prisma.orgaos.count({
     *   where: {
     *     // ... the filter for the Orgaos we want to count
     *   }
     * })
    **/
    count<T extends OrgaosCountArgs>(
      args?: Subset<T, OrgaosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgaosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orgaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgaosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrgaosAggregateArgs>(args: Subset<T, OrgaosAggregateArgs>): Prisma.PrismaPromise<GetOrgaosAggregateType<T>>

    /**
     * Group by Orgaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgaosGroupByArgs} args - Group by arguments.
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
      T extends OrgaosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgaosGroupByArgs['orderBy'] }
        : { orderBy?: OrgaosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrgaosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgaosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orgaos model
   */
  readonly fields: OrgaosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orgaos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgaosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    normas<T extends Orgaos$normasArgs<ExtArgs> = {}>(args?: Subset<T, Orgaos$normasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Orgaos$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Orgaos$usuariosArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orgaos model
   */
  interface OrgaosFieldRefs {
    readonly org_id: FieldRef<"Orgaos", 'Int'>
    readonly org_desc: FieldRef<"Orgaos", 'String'>
    readonly org_sigla: FieldRef<"Orgaos", 'String'>
    readonly adm_criador: FieldRef<"Orgaos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orgaos findUnique
   */
  export type OrgaosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * Filter, which Orgaos to fetch.
     */
    where: OrgaosWhereUniqueInput
  }

  /**
   * Orgaos findUniqueOrThrow
   */
  export type OrgaosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * Filter, which Orgaos to fetch.
     */
    where: OrgaosWhereUniqueInput
  }

  /**
   * Orgaos findFirst
   */
  export type OrgaosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * Filter, which Orgaos to fetch.
     */
    where?: OrgaosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgaos to fetch.
     */
    orderBy?: OrgaosOrderByWithRelationInput | OrgaosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgaos.
     */
    cursor?: OrgaosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgaos.
     */
    distinct?: OrgaosScalarFieldEnum | OrgaosScalarFieldEnum[]
  }

  /**
   * Orgaos findFirstOrThrow
   */
  export type OrgaosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * Filter, which Orgaos to fetch.
     */
    where?: OrgaosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgaos to fetch.
     */
    orderBy?: OrgaosOrderByWithRelationInput | OrgaosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgaos.
     */
    cursor?: OrgaosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgaos.
     */
    distinct?: OrgaosScalarFieldEnum | OrgaosScalarFieldEnum[]
  }

  /**
   * Orgaos findMany
   */
  export type OrgaosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * Filter, which Orgaos to fetch.
     */
    where?: OrgaosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgaos to fetch.
     */
    orderBy?: OrgaosOrderByWithRelationInput | OrgaosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orgaos.
     */
    cursor?: OrgaosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgaos.
     */
    distinct?: OrgaosScalarFieldEnum | OrgaosScalarFieldEnum[]
  }

  /**
   * Orgaos create
   */
  export type OrgaosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * The data needed to create a Orgaos.
     */
    data: XOR<OrgaosCreateInput, OrgaosUncheckedCreateInput>
  }

  /**
   * Orgaos createMany
   */
  export type OrgaosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orgaos.
     */
    data: OrgaosCreateManyInput | OrgaosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orgaos update
   */
  export type OrgaosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * The data needed to update a Orgaos.
     */
    data: XOR<OrgaosUpdateInput, OrgaosUncheckedUpdateInput>
    /**
     * Choose, which Orgaos to update.
     */
    where: OrgaosWhereUniqueInput
  }

  /**
   * Orgaos updateMany
   */
  export type OrgaosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orgaos.
     */
    data: XOR<OrgaosUpdateManyMutationInput, OrgaosUncheckedUpdateManyInput>
    /**
     * Filter which Orgaos to update
     */
    where?: OrgaosWhereInput
    /**
     * Limit how many Orgaos to update.
     */
    limit?: number
  }

  /**
   * Orgaos upsert
   */
  export type OrgaosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * The filter to search for the Orgaos to update in case it exists.
     */
    where: OrgaosWhereUniqueInput
    /**
     * In case the Orgaos found by the `where` argument doesn't exist, create a new Orgaos with this data.
     */
    create: XOR<OrgaosCreateInput, OrgaosUncheckedCreateInput>
    /**
     * In case the Orgaos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgaosUpdateInput, OrgaosUncheckedUpdateInput>
  }

  /**
   * Orgaos delete
   */
  export type OrgaosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
    /**
     * Filter which Orgaos to delete.
     */
    where: OrgaosWhereUniqueInput
  }

  /**
   * Orgaos deleteMany
   */
  export type OrgaosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orgaos to delete
     */
    where?: OrgaosWhereInput
    /**
     * Limit how many Orgaos to delete.
     */
    limit?: number
  }

  /**
   * Orgaos.normas
   */
  export type Orgaos$normasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    where?: NormaWhereInput
    orderBy?: NormaOrderByWithRelationInput | NormaOrderByWithRelationInput[]
    cursor?: NormaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NormaScalarFieldEnum | NormaScalarFieldEnum[]
  }

  /**
   * Orgaos.usuarios
   */
  export type Orgaos$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Orgaos without action
   */
  export type OrgaosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orgaos
     */
    select?: OrgaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orgaos
     */
    omit?: OrgaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgaosInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    cat_id: number | null
    adm_criador: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    cat_id: number | null
    adm_criador: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    cat_id: number | null
    cat_nome: string | null
    adm_criador: number | null
    data_criacao: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    cat_id: number | null
    cat_nome: string | null
    adm_criador: number | null
    data_criacao: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    cat_id: number
    cat_nome: number
    adm_criador: number
    data_criacao: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    cat_id?: true
    adm_criador?: true
  }

  export type CategoriaSumAggregateInputType = {
    cat_id?: true
    adm_criador?: true
  }

  export type CategoriaMinAggregateInputType = {
    cat_id?: true
    cat_nome?: true
    adm_criador?: true
    data_criacao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    cat_id?: true
    cat_nome?: true
    adm_criador?: true
    data_criacao?: true
  }

  export type CategoriaCountAggregateInputType = {
    cat_id?: true
    cat_nome?: true
    adm_criador?: true
    data_criacao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    cat_id: number
    cat_nome: string
    adm_criador: number
    data_criacao: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cat_id?: boolean
    cat_nome?: boolean
    adm_criador?: boolean
    data_criacao?: boolean
    norma_cat?: boolean | Categoria$norma_catArgs<ExtArgs>
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    cat_id?: boolean
    cat_nome?: boolean
    adm_criador?: boolean
    data_criacao?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cat_id" | "cat_nome" | "adm_criador" | "data_criacao", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    norma_cat?: boolean | Categoria$norma_catArgs<ExtArgs>
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      norma_cat: Prisma.$Norma_CategoriaPayload<ExtArgs>[]
      usuario: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cat_id: number
      cat_nome: string
      adm_criador: number
      data_criacao: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `cat_id`
     * const categoriaWithCat_idOnly = await prisma.categoria.findMany({ select: { cat_id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    norma_cat<T extends Categoria$norma_catArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$norma_catArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly cat_id: FieldRef<"Categoria", 'Int'>
    readonly cat_nome: FieldRef<"Categoria", 'String'>
    readonly adm_criador: FieldRef<"Categoria", 'Int'>
    readonly data_criacao: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.norma_cat
   */
  export type Categoria$norma_catArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    where?: Norma_CategoriaWhereInput
    orderBy?: Norma_CategoriaOrderByWithRelationInput | Norma_CategoriaOrderByWithRelationInput[]
    cursor?: Norma_CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Norma_CategoriaScalarFieldEnum | Norma_CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Norma
   */

  export type AggregateNorma = {
    _count: NormaCountAggregateOutputType | null
    _avg: NormaAvgAggregateOutputType | null
    _sum: NormaSumAggregateOutputType | null
    _min: NormaMinAggregateOutputType | null
    _max: NormaMaxAggregateOutputType | null
  }

  export type NormaAvgAggregateOutputType = {
    id_norm: number | null
    org_criador: number | null
    adm_criador: number | null
  }

  export type NormaSumAggregateOutputType = {
    id_norm: number | null
    org_criador: number | null
    adm_criador: number | null
  }

  export type NormaMinAggregateOutputType = {
    id_norm: number | null
    norm_titulo: string | null
    norm_desc: string | null
    org_criador: number | null
    adm_criador: number | null
    emissao: Date | null
    norm_codigo: string | null
    data_criacao: Date | null
    data_update: Date | null
    pdf_nome_original: string | null
    pdf_caminho: string | null
  }

  export type NormaMaxAggregateOutputType = {
    id_norm: number | null
    norm_titulo: string | null
    norm_desc: string | null
    org_criador: number | null
    adm_criador: number | null
    emissao: Date | null
    norm_codigo: string | null
    data_criacao: Date | null
    data_update: Date | null
    pdf_nome_original: string | null
    pdf_caminho: string | null
  }

  export type NormaCountAggregateOutputType = {
    id_norm: number
    norm_titulo: number
    norm_desc: number
    org_criador: number
    adm_criador: number
    emissao: number
    norm_codigo: number
    data_criacao: number
    data_update: number
    pdf_nome_original: number
    pdf_caminho: number
    _all: number
  }


  export type NormaAvgAggregateInputType = {
    id_norm?: true
    org_criador?: true
    adm_criador?: true
  }

  export type NormaSumAggregateInputType = {
    id_norm?: true
    org_criador?: true
    adm_criador?: true
  }

  export type NormaMinAggregateInputType = {
    id_norm?: true
    norm_titulo?: true
    norm_desc?: true
    org_criador?: true
    adm_criador?: true
    emissao?: true
    norm_codigo?: true
    data_criacao?: true
    data_update?: true
    pdf_nome_original?: true
    pdf_caminho?: true
  }

  export type NormaMaxAggregateInputType = {
    id_norm?: true
    norm_titulo?: true
    norm_desc?: true
    org_criador?: true
    adm_criador?: true
    emissao?: true
    norm_codigo?: true
    data_criacao?: true
    data_update?: true
    pdf_nome_original?: true
    pdf_caminho?: true
  }

  export type NormaCountAggregateInputType = {
    id_norm?: true
    norm_titulo?: true
    norm_desc?: true
    org_criador?: true
    adm_criador?: true
    emissao?: true
    norm_codigo?: true
    data_criacao?: true
    data_update?: true
    pdf_nome_original?: true
    pdf_caminho?: true
    _all?: true
  }

  export type NormaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Norma to aggregate.
     */
    where?: NormaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas to fetch.
     */
    orderBy?: NormaOrderByWithRelationInput | NormaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NormaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Normas
    **/
    _count?: true | NormaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NormaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NormaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NormaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NormaMaxAggregateInputType
  }

  export type GetNormaAggregateType<T extends NormaAggregateArgs> = {
        [P in keyof T & keyof AggregateNorma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNorma[P]>
      : GetScalarType<T[P], AggregateNorma[P]>
  }




  export type NormaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NormaWhereInput
    orderBy?: NormaOrderByWithAggregationInput | NormaOrderByWithAggregationInput[]
    by: NormaScalarFieldEnum[] | NormaScalarFieldEnum
    having?: NormaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NormaCountAggregateInputType | true
    _avg?: NormaAvgAggregateInputType
    _sum?: NormaSumAggregateInputType
    _min?: NormaMinAggregateInputType
    _max?: NormaMaxAggregateInputType
  }

  export type NormaGroupByOutputType = {
    id_norm: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date
    norm_codigo: string
    data_criacao: Date
    data_update: Date
    pdf_nome_original: string
    pdf_caminho: string
    _count: NormaCountAggregateOutputType | null
    _avg: NormaAvgAggregateOutputType | null
    _sum: NormaSumAggregateOutputType | null
    _min: NormaMinAggregateOutputType | null
    _max: NormaMaxAggregateOutputType | null
  }

  type GetNormaGroupByPayload<T extends NormaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NormaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NormaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NormaGroupByOutputType[P]>
            : GetScalarType<T[P], NormaGroupByOutputType[P]>
        }
      >
    >


  export type NormaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_norm?: boolean
    norm_titulo?: boolean
    norm_desc?: boolean
    org_criador?: boolean
    adm_criador?: boolean
    emissao?: boolean
    norm_codigo?: boolean
    data_criacao?: boolean
    data_update?: boolean
    pdf_nome_original?: boolean
    pdf_caminho?: boolean
    notas?: boolean | Norma$notasArgs<ExtArgs>
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
    orgaos?: boolean | OrgaosDefaultArgs<ExtArgs>
    normas_origem?: boolean | Norma$normas_origemArgs<ExtArgs>
    normas_destino?: boolean | Norma$normas_destinoArgs<ExtArgs>
    versoes?: boolean | Norma$versoesArgs<ExtArgs>
    HistoricoAcessoNormas?: boolean | Norma$HistoricoAcessoNormasArgs<ExtArgs>
    favoritos?: boolean | Norma$favoritosArgs<ExtArgs>
    categoria?: boolean | Norma$categoriaArgs<ExtArgs>
    pedidos?: boolean | Norma$pedidosArgs<ExtArgs>
    _count?: boolean | NormaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["norma"]>



  export type NormaSelectScalar = {
    id_norm?: boolean
    norm_titulo?: boolean
    norm_desc?: boolean
    org_criador?: boolean
    adm_criador?: boolean
    emissao?: boolean
    norm_codigo?: boolean
    data_criacao?: boolean
    data_update?: boolean
    pdf_nome_original?: boolean
    pdf_caminho?: boolean
  }

  export type NormaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_norm" | "norm_titulo" | "norm_desc" | "org_criador" | "adm_criador" | "emissao" | "norm_codigo" | "data_criacao" | "data_update" | "pdf_nome_original" | "pdf_caminho", ExtArgs["result"]["norma"]>
  export type NormaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notas?: boolean | Norma$notasArgs<ExtArgs>
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
    orgaos?: boolean | OrgaosDefaultArgs<ExtArgs>
    normas_origem?: boolean | Norma$normas_origemArgs<ExtArgs>
    normas_destino?: boolean | Norma$normas_destinoArgs<ExtArgs>
    versoes?: boolean | Norma$versoesArgs<ExtArgs>
    HistoricoAcessoNormas?: boolean | Norma$HistoricoAcessoNormasArgs<ExtArgs>
    favoritos?: boolean | Norma$favoritosArgs<ExtArgs>
    categoria?: boolean | Norma$categoriaArgs<ExtArgs>
    pedidos?: boolean | Norma$pedidosArgs<ExtArgs>
    _count?: boolean | NormaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NormaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Norma"
    objects: {
      notas: Prisma.$NotasPayload<ExtArgs>[]
      usuario: Prisma.$UsersPayload<ExtArgs>
      orgaos: Prisma.$OrgaosPayload<ExtArgs>
      normas_origem: Prisma.$Normas_ReferenciadasPayload<ExtArgs>[]
      normas_destino: Prisma.$Normas_ReferenciadasPayload<ExtArgs>[]
      versoes: Prisma.$Normas_VersoesPayload<ExtArgs>[]
      HistoricoAcessoNormas: Prisma.$Historico_Acesso_NormasPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritosPayload<ExtArgs>[]
      categoria: Prisma.$Norma_CategoriaPayload<ExtArgs>[]
      pedidos: Prisma.$PedidosdeAlteracaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_norm: number
      norm_titulo: string
      norm_desc: string
      org_criador: number
      adm_criador: number
      emissao: Date
      norm_codigo: string
      data_criacao: Date
      data_update: Date
      pdf_nome_original: string
      pdf_caminho: string
    }, ExtArgs["result"]["norma"]>
    composites: {}
  }

  type NormaGetPayload<S extends boolean | null | undefined | NormaDefaultArgs> = $Result.GetResult<Prisma.$NormaPayload, S>

  type NormaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NormaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NormaCountAggregateInputType | true
    }

  export interface NormaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Norma'], meta: { name: 'Norma' } }
    /**
     * Find zero or one Norma that matches the filter.
     * @param {NormaFindUniqueArgs} args - Arguments to find a Norma
     * @example
     * // Get one Norma
     * const norma = await prisma.norma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NormaFindUniqueArgs>(args: SelectSubset<T, NormaFindUniqueArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Norma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NormaFindUniqueOrThrowArgs} args - Arguments to find a Norma
     * @example
     * // Get one Norma
     * const norma = await prisma.norma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NormaFindUniqueOrThrowArgs>(args: SelectSubset<T, NormaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Norma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormaFindFirstArgs} args - Arguments to find a Norma
     * @example
     * // Get one Norma
     * const norma = await prisma.norma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NormaFindFirstArgs>(args?: SelectSubset<T, NormaFindFirstArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Norma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormaFindFirstOrThrowArgs} args - Arguments to find a Norma
     * @example
     * // Get one Norma
     * const norma = await prisma.norma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NormaFindFirstOrThrowArgs>(args?: SelectSubset<T, NormaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Normas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Normas
     * const normas = await prisma.norma.findMany()
     * 
     * // Get first 10 Normas
     * const normas = await prisma.norma.findMany({ take: 10 })
     * 
     * // Only select the `id_norm`
     * const normaWithId_normOnly = await prisma.norma.findMany({ select: { id_norm: true } })
     * 
     */
    findMany<T extends NormaFindManyArgs>(args?: SelectSubset<T, NormaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Norma.
     * @param {NormaCreateArgs} args - Arguments to create a Norma.
     * @example
     * // Create one Norma
     * const Norma = await prisma.norma.create({
     *   data: {
     *     // ... data to create a Norma
     *   }
     * })
     * 
     */
    create<T extends NormaCreateArgs>(args: SelectSubset<T, NormaCreateArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Normas.
     * @param {NormaCreateManyArgs} args - Arguments to create many Normas.
     * @example
     * // Create many Normas
     * const norma = await prisma.norma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NormaCreateManyArgs>(args?: SelectSubset<T, NormaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Norma.
     * @param {NormaDeleteArgs} args - Arguments to delete one Norma.
     * @example
     * // Delete one Norma
     * const Norma = await prisma.norma.delete({
     *   where: {
     *     // ... filter to delete one Norma
     *   }
     * })
     * 
     */
    delete<T extends NormaDeleteArgs>(args: SelectSubset<T, NormaDeleteArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Norma.
     * @param {NormaUpdateArgs} args - Arguments to update one Norma.
     * @example
     * // Update one Norma
     * const norma = await prisma.norma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NormaUpdateArgs>(args: SelectSubset<T, NormaUpdateArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Normas.
     * @param {NormaDeleteManyArgs} args - Arguments to filter Normas to delete.
     * @example
     * // Delete a few Normas
     * const { count } = await prisma.norma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NormaDeleteManyArgs>(args?: SelectSubset<T, NormaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Normas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Normas
     * const norma = await prisma.norma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NormaUpdateManyArgs>(args: SelectSubset<T, NormaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Norma.
     * @param {NormaUpsertArgs} args - Arguments to update or create a Norma.
     * @example
     * // Update or create a Norma
     * const norma = await prisma.norma.upsert({
     *   create: {
     *     // ... data to create a Norma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Norma we want to update
     *   }
     * })
     */
    upsert<T extends NormaUpsertArgs>(args: SelectSubset<T, NormaUpsertArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Normas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormaCountArgs} args - Arguments to filter Normas to count.
     * @example
     * // Count the number of Normas
     * const count = await prisma.norma.count({
     *   where: {
     *     // ... the filter for the Normas we want to count
     *   }
     * })
    **/
    count<T extends NormaCountArgs>(
      args?: Subset<T, NormaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NormaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Norma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NormaAggregateArgs>(args: Subset<T, NormaAggregateArgs>): Prisma.PrismaPromise<GetNormaAggregateType<T>>

    /**
     * Group by Norma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NormaGroupByArgs} args - Group by arguments.
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
      T extends NormaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NormaGroupByArgs['orderBy'] }
        : { orderBy?: NormaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NormaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNormaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Norma model
   */
  readonly fields: NormaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Norma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NormaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notas<T extends Norma$notasArgs<ExtArgs> = {}>(args?: Subset<T, Norma$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orgaos<T extends OrgaosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgaosDefaultArgs<ExtArgs>>): Prisma__OrgaosClient<$Result.GetResult<Prisma.$OrgaosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    normas_origem<T extends Norma$normas_origemArgs<ExtArgs> = {}>(args?: Subset<T, Norma$normas_origemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    normas_destino<T extends Norma$normas_destinoArgs<ExtArgs> = {}>(args?: Subset<T, Norma$normas_destinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versoes<T extends Norma$versoesArgs<ExtArgs> = {}>(args?: Subset<T, Norma$versoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HistoricoAcessoNormas<T extends Norma$HistoricoAcessoNormasArgs<ExtArgs> = {}>(args?: Subset<T, Norma$HistoricoAcessoNormasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Norma$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Norma$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends Norma$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Norma$categoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Norma$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Norma$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Norma model
   */
  interface NormaFieldRefs {
    readonly id_norm: FieldRef<"Norma", 'Int'>
    readonly norm_titulo: FieldRef<"Norma", 'String'>
    readonly norm_desc: FieldRef<"Norma", 'String'>
    readonly org_criador: FieldRef<"Norma", 'Int'>
    readonly adm_criador: FieldRef<"Norma", 'Int'>
    readonly emissao: FieldRef<"Norma", 'DateTime'>
    readonly norm_codigo: FieldRef<"Norma", 'String'>
    readonly data_criacao: FieldRef<"Norma", 'DateTime'>
    readonly data_update: FieldRef<"Norma", 'DateTime'>
    readonly pdf_nome_original: FieldRef<"Norma", 'String'>
    readonly pdf_caminho: FieldRef<"Norma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Norma findUnique
   */
  export type NormaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * Filter, which Norma to fetch.
     */
    where: NormaWhereUniqueInput
  }

  /**
   * Norma findUniqueOrThrow
   */
  export type NormaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * Filter, which Norma to fetch.
     */
    where: NormaWhereUniqueInput
  }

  /**
   * Norma findFirst
   */
  export type NormaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * Filter, which Norma to fetch.
     */
    where?: NormaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas to fetch.
     */
    orderBy?: NormaOrderByWithRelationInput | NormaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Normas.
     */
    cursor?: NormaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas.
     */
    distinct?: NormaScalarFieldEnum | NormaScalarFieldEnum[]
  }

  /**
   * Norma findFirstOrThrow
   */
  export type NormaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * Filter, which Norma to fetch.
     */
    where?: NormaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas to fetch.
     */
    orderBy?: NormaOrderByWithRelationInput | NormaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Normas.
     */
    cursor?: NormaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas.
     */
    distinct?: NormaScalarFieldEnum | NormaScalarFieldEnum[]
  }

  /**
   * Norma findMany
   */
  export type NormaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * Filter, which Normas to fetch.
     */
    where?: NormaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas to fetch.
     */
    orderBy?: NormaOrderByWithRelationInput | NormaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Normas.
     */
    cursor?: NormaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas.
     */
    distinct?: NormaScalarFieldEnum | NormaScalarFieldEnum[]
  }

  /**
   * Norma create
   */
  export type NormaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * The data needed to create a Norma.
     */
    data: XOR<NormaCreateInput, NormaUncheckedCreateInput>
  }

  /**
   * Norma createMany
   */
  export type NormaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Normas.
     */
    data: NormaCreateManyInput | NormaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Norma update
   */
  export type NormaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * The data needed to update a Norma.
     */
    data: XOR<NormaUpdateInput, NormaUncheckedUpdateInput>
    /**
     * Choose, which Norma to update.
     */
    where: NormaWhereUniqueInput
  }

  /**
   * Norma updateMany
   */
  export type NormaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Normas.
     */
    data: XOR<NormaUpdateManyMutationInput, NormaUncheckedUpdateManyInput>
    /**
     * Filter which Normas to update
     */
    where?: NormaWhereInput
    /**
     * Limit how many Normas to update.
     */
    limit?: number
  }

  /**
   * Norma upsert
   */
  export type NormaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * The filter to search for the Norma to update in case it exists.
     */
    where: NormaWhereUniqueInput
    /**
     * In case the Norma found by the `where` argument doesn't exist, create a new Norma with this data.
     */
    create: XOR<NormaCreateInput, NormaUncheckedCreateInput>
    /**
     * In case the Norma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NormaUpdateInput, NormaUncheckedUpdateInput>
  }

  /**
   * Norma delete
   */
  export type NormaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    /**
     * Filter which Norma to delete.
     */
    where: NormaWhereUniqueInput
  }

  /**
   * Norma deleteMany
   */
  export type NormaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Normas to delete
     */
    where?: NormaWhereInput
    /**
     * Limit how many Normas to delete.
     */
    limit?: number
  }

  /**
   * Norma.notas
   */
  export type Norma$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    where?: NotasWhereInput
    orderBy?: NotasOrderByWithRelationInput | NotasOrderByWithRelationInput[]
    cursor?: NotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * Norma.normas_origem
   */
  export type Norma$normas_origemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    where?: Normas_ReferenciadasWhereInput
    orderBy?: Normas_ReferenciadasOrderByWithRelationInput | Normas_ReferenciadasOrderByWithRelationInput[]
    cursor?: Normas_ReferenciadasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Normas_ReferenciadasScalarFieldEnum | Normas_ReferenciadasScalarFieldEnum[]
  }

  /**
   * Norma.normas_destino
   */
  export type Norma$normas_destinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    where?: Normas_ReferenciadasWhereInput
    orderBy?: Normas_ReferenciadasOrderByWithRelationInput | Normas_ReferenciadasOrderByWithRelationInput[]
    cursor?: Normas_ReferenciadasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Normas_ReferenciadasScalarFieldEnum | Normas_ReferenciadasScalarFieldEnum[]
  }

  /**
   * Norma.versoes
   */
  export type Norma$versoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    where?: Normas_VersoesWhereInput
    orderBy?: Normas_VersoesOrderByWithRelationInput | Normas_VersoesOrderByWithRelationInput[]
    cursor?: Normas_VersoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Normas_VersoesScalarFieldEnum | Normas_VersoesScalarFieldEnum[]
  }

  /**
   * Norma.HistoricoAcessoNormas
   */
  export type Norma$HistoricoAcessoNormasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    where?: Historico_Acesso_NormasWhereInput
    orderBy?: Historico_Acesso_NormasOrderByWithRelationInput | Historico_Acesso_NormasOrderByWithRelationInput[]
    cursor?: Historico_Acesso_NormasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historico_Acesso_NormasScalarFieldEnum | Historico_Acesso_NormasScalarFieldEnum[]
  }

  /**
   * Norma.favoritos
   */
  export type Norma$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    where?: FavoritosWhereInput
    orderBy?: FavoritosOrderByWithRelationInput | FavoritosOrderByWithRelationInput[]
    cursor?: FavoritosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * Norma.categoria
   */
  export type Norma$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    where?: Norma_CategoriaWhereInput
    orderBy?: Norma_CategoriaOrderByWithRelationInput | Norma_CategoriaOrderByWithRelationInput[]
    cursor?: Norma_CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Norma_CategoriaScalarFieldEnum | Norma_CategoriaScalarFieldEnum[]
  }

  /**
   * Norma.pedidos
   */
  export type Norma$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    where?: PedidosdeAlteracaoWhereInput
    orderBy?: PedidosdeAlteracaoOrderByWithRelationInput | PedidosdeAlteracaoOrderByWithRelationInput[]
    cursor?: PedidosdeAlteracaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidosdeAlteracaoScalarFieldEnum | PedidosdeAlteracaoScalarFieldEnum[]
  }

  /**
   * Norma without action
   */
  export type NormaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
  }


  /**
   * Model Notas
   */

  export type AggregateNotas = {
    _count: NotasCountAggregateOutputType | null
    _avg: NotasAvgAggregateOutputType | null
    _sum: NotasSumAggregateOutputType | null
    _min: NotasMinAggregateOutputType | null
    _max: NotasMaxAggregateOutputType | null
  }

  export type NotasAvgAggregateOutputType = {
    id_not: number | null
    norm_criador: number | null
    adm_criador: number | null
  }

  export type NotasSumAggregateOutputType = {
    id_not: number | null
    norm_criador: number | null
    adm_criador: number | null
  }

  export type NotasMinAggregateOutputType = {
    id_not: number | null
    not_titulo: string | null
    not_IT: string | null
    not_AB: string | null
    not_Pa: string | null
    norm_criador: number | null
    adm_criador: number | null
    data_criacao: Date | null
  }

  export type NotasMaxAggregateOutputType = {
    id_not: number | null
    not_titulo: string | null
    not_IT: string | null
    not_AB: string | null
    not_Pa: string | null
    norm_criador: number | null
    adm_criador: number | null
    data_criacao: Date | null
  }

  export type NotasCountAggregateOutputType = {
    id_not: number
    not_titulo: number
    not_IT: number
    not_AB: number
    not_Pa: number
    norm_criador: number
    adm_criador: number
    data_criacao: number
    _all: number
  }


  export type NotasAvgAggregateInputType = {
    id_not?: true
    norm_criador?: true
    adm_criador?: true
  }

  export type NotasSumAggregateInputType = {
    id_not?: true
    norm_criador?: true
    adm_criador?: true
  }

  export type NotasMinAggregateInputType = {
    id_not?: true
    not_titulo?: true
    not_IT?: true
    not_AB?: true
    not_Pa?: true
    norm_criador?: true
    adm_criador?: true
    data_criacao?: true
  }

  export type NotasMaxAggregateInputType = {
    id_not?: true
    not_titulo?: true
    not_IT?: true
    not_AB?: true
    not_Pa?: true
    norm_criador?: true
    adm_criador?: true
    data_criacao?: true
  }

  export type NotasCountAggregateInputType = {
    id_not?: true
    not_titulo?: true
    not_IT?: true
    not_AB?: true
    not_Pa?: true
    norm_criador?: true
    adm_criador?: true
    data_criacao?: true
    _all?: true
  }

  export type NotasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notas to aggregate.
     */
    where?: NotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotasOrderByWithRelationInput | NotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notas
    **/
    _count?: true | NotasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotasMaxAggregateInputType
  }

  export type GetNotasAggregateType<T extends NotasAggregateArgs> = {
        [P in keyof T & keyof AggregateNotas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotas[P]>
      : GetScalarType<T[P], AggregateNotas[P]>
  }




  export type NotasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotasWhereInput
    orderBy?: NotasOrderByWithAggregationInput | NotasOrderByWithAggregationInput[]
    by: NotasScalarFieldEnum[] | NotasScalarFieldEnum
    having?: NotasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotasCountAggregateInputType | true
    _avg?: NotasAvgAggregateInputType
    _sum?: NotasSumAggregateInputType
    _min?: NotasMinAggregateInputType
    _max?: NotasMaxAggregateInputType
  }

  export type NotasGroupByOutputType = {
    id_not: number
    not_titulo: string
    not_IT: string
    not_AB: string | null
    not_Pa: string | null
    norm_criador: number
    adm_criador: number
    data_criacao: Date
    _count: NotasCountAggregateOutputType | null
    _avg: NotasAvgAggregateOutputType | null
    _sum: NotasSumAggregateOutputType | null
    _min: NotasMinAggregateOutputType | null
    _max: NotasMaxAggregateOutputType | null
  }

  type GetNotasGroupByPayload<T extends NotasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotasGroupByOutputType[P]>
            : GetScalarType<T[P], NotasGroupByOutputType[P]>
        }
      >
    >


  export type NotasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_not?: boolean
    not_titulo?: boolean
    not_IT?: boolean
    not_AB?: boolean
    not_Pa?: boolean
    norm_criador?: boolean
    adm_criador?: boolean
    data_criacao?: boolean
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
    normas?: boolean | NormaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notas"]>



  export type NotasSelectScalar = {
    id_not?: boolean
    not_titulo?: boolean
    not_IT?: boolean
    not_AB?: boolean
    not_Pa?: boolean
    norm_criador?: boolean
    adm_criador?: boolean
    data_criacao?: boolean
  }

  export type NotasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_not" | "not_titulo" | "not_IT" | "not_AB" | "not_Pa" | "norm_criador" | "adm_criador" | "data_criacao", ExtArgs["result"]["notas"]>
  export type NotasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
    normas?: boolean | NormaDefaultArgs<ExtArgs>
  }

  export type $NotasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notas"
    objects: {
      usuario: Prisma.$UsersPayload<ExtArgs>
      normas: Prisma.$NormaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_not: number
      not_titulo: string
      not_IT: string
      not_AB: string | null
      not_Pa: string | null
      norm_criador: number
      adm_criador: number
      data_criacao: Date
    }, ExtArgs["result"]["notas"]>
    composites: {}
  }

  type NotasGetPayload<S extends boolean | null | undefined | NotasDefaultArgs> = $Result.GetResult<Prisma.$NotasPayload, S>

  type NotasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotasCountAggregateInputType | true
    }

  export interface NotasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notas'], meta: { name: 'Notas' } }
    /**
     * Find zero or one Notas that matches the filter.
     * @param {NotasFindUniqueArgs} args - Arguments to find a Notas
     * @example
     * // Get one Notas
     * const notas = await prisma.notas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotasFindUniqueArgs>(args: SelectSubset<T, NotasFindUniqueArgs<ExtArgs>>): Prisma__NotasClient<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotasFindUniqueOrThrowArgs} args - Arguments to find a Notas
     * @example
     * // Get one Notas
     * const notas = await prisma.notas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotasFindUniqueOrThrowArgs>(args: SelectSubset<T, NotasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotasClient<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotasFindFirstArgs} args - Arguments to find a Notas
     * @example
     * // Get one Notas
     * const notas = await prisma.notas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotasFindFirstArgs>(args?: SelectSubset<T, NotasFindFirstArgs<ExtArgs>>): Prisma__NotasClient<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotasFindFirstOrThrowArgs} args - Arguments to find a Notas
     * @example
     * // Get one Notas
     * const notas = await prisma.notas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotasFindFirstOrThrowArgs>(args?: SelectSubset<T, NotasFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotasClient<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notas
     * const notas = await prisma.notas.findMany()
     * 
     * // Get first 10 Notas
     * const notas = await prisma.notas.findMany({ take: 10 })
     * 
     * // Only select the `id_not`
     * const notasWithId_notOnly = await prisma.notas.findMany({ select: { id_not: true } })
     * 
     */
    findMany<T extends NotasFindManyArgs>(args?: SelectSubset<T, NotasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notas.
     * @param {NotasCreateArgs} args - Arguments to create a Notas.
     * @example
     * // Create one Notas
     * const Notas = await prisma.notas.create({
     *   data: {
     *     // ... data to create a Notas
     *   }
     * })
     * 
     */
    create<T extends NotasCreateArgs>(args: SelectSubset<T, NotasCreateArgs<ExtArgs>>): Prisma__NotasClient<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notas.
     * @param {NotasCreateManyArgs} args - Arguments to create many Notas.
     * @example
     * // Create many Notas
     * const notas = await prisma.notas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotasCreateManyArgs>(args?: SelectSubset<T, NotasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notas.
     * @param {NotasDeleteArgs} args - Arguments to delete one Notas.
     * @example
     * // Delete one Notas
     * const Notas = await prisma.notas.delete({
     *   where: {
     *     // ... filter to delete one Notas
     *   }
     * })
     * 
     */
    delete<T extends NotasDeleteArgs>(args: SelectSubset<T, NotasDeleteArgs<ExtArgs>>): Prisma__NotasClient<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notas.
     * @param {NotasUpdateArgs} args - Arguments to update one Notas.
     * @example
     * // Update one Notas
     * const notas = await prisma.notas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotasUpdateArgs>(args: SelectSubset<T, NotasUpdateArgs<ExtArgs>>): Prisma__NotasClient<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notas.
     * @param {NotasDeleteManyArgs} args - Arguments to filter Notas to delete.
     * @example
     * // Delete a few Notas
     * const { count } = await prisma.notas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotasDeleteManyArgs>(args?: SelectSubset<T, NotasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notas
     * const notas = await prisma.notas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotasUpdateManyArgs>(args: SelectSubset<T, NotasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notas.
     * @param {NotasUpsertArgs} args - Arguments to update or create a Notas.
     * @example
     * // Update or create a Notas
     * const notas = await prisma.notas.upsert({
     *   create: {
     *     // ... data to create a Notas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notas we want to update
     *   }
     * })
     */
    upsert<T extends NotasUpsertArgs>(args: SelectSubset<T, NotasUpsertArgs<ExtArgs>>): Prisma__NotasClient<$Result.GetResult<Prisma.$NotasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotasCountArgs} args - Arguments to filter Notas to count.
     * @example
     * // Count the number of Notas
     * const count = await prisma.notas.count({
     *   where: {
     *     // ... the filter for the Notas we want to count
     *   }
     * })
    **/
    count<T extends NotasCountArgs>(
      args?: Subset<T, NotasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotasAggregateArgs>(args: Subset<T, NotasAggregateArgs>): Prisma.PrismaPromise<GetNotasAggregateType<T>>

    /**
     * Group by Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotasGroupByArgs} args - Group by arguments.
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
      T extends NotasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotasGroupByArgs['orderBy'] }
        : { orderBy?: NotasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notas model
   */
  readonly fields: NotasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    normas<T extends NormaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormaDefaultArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notas model
   */
  interface NotasFieldRefs {
    readonly id_not: FieldRef<"Notas", 'Int'>
    readonly not_titulo: FieldRef<"Notas", 'String'>
    readonly not_IT: FieldRef<"Notas", 'String'>
    readonly not_AB: FieldRef<"Notas", 'String'>
    readonly not_Pa: FieldRef<"Notas", 'String'>
    readonly norm_criador: FieldRef<"Notas", 'Int'>
    readonly adm_criador: FieldRef<"Notas", 'Int'>
    readonly data_criacao: FieldRef<"Notas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notas findUnique
   */
  export type NotasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * Filter, which Notas to fetch.
     */
    where: NotasWhereUniqueInput
  }

  /**
   * Notas findUniqueOrThrow
   */
  export type NotasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * Filter, which Notas to fetch.
     */
    where: NotasWhereUniqueInput
  }

  /**
   * Notas findFirst
   */
  export type NotasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * Filter, which Notas to fetch.
     */
    where?: NotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotasOrderByWithRelationInput | NotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notas.
     */
    cursor?: NotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notas.
     */
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * Notas findFirstOrThrow
   */
  export type NotasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * Filter, which Notas to fetch.
     */
    where?: NotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotasOrderByWithRelationInput | NotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notas.
     */
    cursor?: NotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notas.
     */
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * Notas findMany
   */
  export type NotasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * Filter, which Notas to fetch.
     */
    where?: NotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     */
    orderBy?: NotasOrderByWithRelationInput | NotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notas.
     */
    cursor?: NotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notas.
     */
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * Notas create
   */
  export type NotasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * The data needed to create a Notas.
     */
    data: XOR<NotasCreateInput, NotasUncheckedCreateInput>
  }

  /**
   * Notas createMany
   */
  export type NotasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notas.
     */
    data: NotasCreateManyInput | NotasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notas update
   */
  export type NotasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * The data needed to update a Notas.
     */
    data: XOR<NotasUpdateInput, NotasUncheckedUpdateInput>
    /**
     * Choose, which Notas to update.
     */
    where: NotasWhereUniqueInput
  }

  /**
   * Notas updateMany
   */
  export type NotasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notas.
     */
    data: XOR<NotasUpdateManyMutationInput, NotasUncheckedUpdateManyInput>
    /**
     * Filter which Notas to update
     */
    where?: NotasWhereInput
    /**
     * Limit how many Notas to update.
     */
    limit?: number
  }

  /**
   * Notas upsert
   */
  export type NotasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * The filter to search for the Notas to update in case it exists.
     */
    where: NotasWhereUniqueInput
    /**
     * In case the Notas found by the `where` argument doesn't exist, create a new Notas with this data.
     */
    create: XOR<NotasCreateInput, NotasUncheckedCreateInput>
    /**
     * In case the Notas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotasUpdateInput, NotasUncheckedUpdateInput>
  }

  /**
   * Notas delete
   */
  export type NotasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
    /**
     * Filter which Notas to delete.
     */
    where: NotasWhereUniqueInput
  }

  /**
   * Notas deleteMany
   */
  export type NotasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notas to delete
     */
    where?: NotasWhereInput
    /**
     * Limit how many Notas to delete.
     */
    limit?: number
  }

  /**
   * Notas without action
   */
  export type NotasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notas
     */
    select?: NotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notas
     */
    omit?: NotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotasInclude<ExtArgs> | null
  }


  /**
   * Model Norma_Categoria
   */

  export type AggregateNorma_Categoria = {
    _count: Norma_CategoriaCountAggregateOutputType | null
    _avg: Norma_CategoriaAvgAggregateOutputType | null
    _sum: Norma_CategoriaSumAggregateOutputType | null
    _min: Norma_CategoriaMinAggregateOutputType | null
    _max: Norma_CategoriaMaxAggregateOutputType | null
  }

  export type Norma_CategoriaAvgAggregateOutputType = {
    id_norma: number | null
    id_cat: number | null
  }

  export type Norma_CategoriaSumAggregateOutputType = {
    id_norma: number | null
    id_cat: number | null
  }

  export type Norma_CategoriaMinAggregateOutputType = {
    id_norma: number | null
    id_cat: number | null
  }

  export type Norma_CategoriaMaxAggregateOutputType = {
    id_norma: number | null
    id_cat: number | null
  }

  export type Norma_CategoriaCountAggregateOutputType = {
    id_norma: number
    id_cat: number
    _all: number
  }


  export type Norma_CategoriaAvgAggregateInputType = {
    id_norma?: true
    id_cat?: true
  }

  export type Norma_CategoriaSumAggregateInputType = {
    id_norma?: true
    id_cat?: true
  }

  export type Norma_CategoriaMinAggregateInputType = {
    id_norma?: true
    id_cat?: true
  }

  export type Norma_CategoriaMaxAggregateInputType = {
    id_norma?: true
    id_cat?: true
  }

  export type Norma_CategoriaCountAggregateInputType = {
    id_norma?: true
    id_cat?: true
    _all?: true
  }

  export type Norma_CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Norma_Categoria to aggregate.
     */
    where?: Norma_CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Norma_Categorias to fetch.
     */
    orderBy?: Norma_CategoriaOrderByWithRelationInput | Norma_CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Norma_CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Norma_Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Norma_Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Norma_Categorias
    **/
    _count?: true | Norma_CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Norma_CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Norma_CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Norma_CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Norma_CategoriaMaxAggregateInputType
  }

  export type GetNorma_CategoriaAggregateType<T extends Norma_CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateNorma_Categoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNorma_Categoria[P]>
      : GetScalarType<T[P], AggregateNorma_Categoria[P]>
  }




  export type Norma_CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Norma_CategoriaWhereInput
    orderBy?: Norma_CategoriaOrderByWithAggregationInput | Norma_CategoriaOrderByWithAggregationInput[]
    by: Norma_CategoriaScalarFieldEnum[] | Norma_CategoriaScalarFieldEnum
    having?: Norma_CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Norma_CategoriaCountAggregateInputType | true
    _avg?: Norma_CategoriaAvgAggregateInputType
    _sum?: Norma_CategoriaSumAggregateInputType
    _min?: Norma_CategoriaMinAggregateInputType
    _max?: Norma_CategoriaMaxAggregateInputType
  }

  export type Norma_CategoriaGroupByOutputType = {
    id_norma: number
    id_cat: number
    _count: Norma_CategoriaCountAggregateOutputType | null
    _avg: Norma_CategoriaAvgAggregateOutputType | null
    _sum: Norma_CategoriaSumAggregateOutputType | null
    _min: Norma_CategoriaMinAggregateOutputType | null
    _max: Norma_CategoriaMaxAggregateOutputType | null
  }

  type GetNorma_CategoriaGroupByPayload<T extends Norma_CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Norma_CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Norma_CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Norma_CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], Norma_CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type Norma_CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_norma?: boolean
    id_cat?: boolean
    cat?: boolean | CategoriaDefaultArgs<ExtArgs>
    norma?: boolean | NormaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["norma_Categoria"]>



  export type Norma_CategoriaSelectScalar = {
    id_norma?: boolean
    id_cat?: boolean
  }

  export type Norma_CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_norma" | "id_cat", ExtArgs["result"]["norma_Categoria"]>
  export type Norma_CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cat?: boolean | CategoriaDefaultArgs<ExtArgs>
    norma?: boolean | NormaDefaultArgs<ExtArgs>
  }

  export type $Norma_CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Norma_Categoria"
    objects: {
      cat: Prisma.$CategoriaPayload<ExtArgs>
      norma: Prisma.$NormaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_norma: number
      id_cat: number
    }, ExtArgs["result"]["norma_Categoria"]>
    composites: {}
  }

  type Norma_CategoriaGetPayload<S extends boolean | null | undefined | Norma_CategoriaDefaultArgs> = $Result.GetResult<Prisma.$Norma_CategoriaPayload, S>

  type Norma_CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Norma_CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Norma_CategoriaCountAggregateInputType | true
    }

  export interface Norma_CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Norma_Categoria'], meta: { name: 'Norma_Categoria' } }
    /**
     * Find zero or one Norma_Categoria that matches the filter.
     * @param {Norma_CategoriaFindUniqueArgs} args - Arguments to find a Norma_Categoria
     * @example
     * // Get one Norma_Categoria
     * const norma_Categoria = await prisma.norma_Categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Norma_CategoriaFindUniqueArgs>(args: SelectSubset<T, Norma_CategoriaFindUniqueArgs<ExtArgs>>): Prisma__Norma_CategoriaClient<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Norma_Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Norma_CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Norma_Categoria
     * @example
     * // Get one Norma_Categoria
     * const norma_Categoria = await prisma.norma_Categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Norma_CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, Norma_CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Norma_CategoriaClient<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Norma_Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Norma_CategoriaFindFirstArgs} args - Arguments to find a Norma_Categoria
     * @example
     * // Get one Norma_Categoria
     * const norma_Categoria = await prisma.norma_Categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Norma_CategoriaFindFirstArgs>(args?: SelectSubset<T, Norma_CategoriaFindFirstArgs<ExtArgs>>): Prisma__Norma_CategoriaClient<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Norma_Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Norma_CategoriaFindFirstOrThrowArgs} args - Arguments to find a Norma_Categoria
     * @example
     * // Get one Norma_Categoria
     * const norma_Categoria = await prisma.norma_Categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Norma_CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, Norma_CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Norma_CategoriaClient<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Norma_Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Norma_CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Norma_Categorias
     * const norma_Categorias = await prisma.norma_Categoria.findMany()
     * 
     * // Get first 10 Norma_Categorias
     * const norma_Categorias = await prisma.norma_Categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_norma`
     * const norma_CategoriaWithId_normaOnly = await prisma.norma_Categoria.findMany({ select: { id_norma: true } })
     * 
     */
    findMany<T extends Norma_CategoriaFindManyArgs>(args?: SelectSubset<T, Norma_CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Norma_Categoria.
     * @param {Norma_CategoriaCreateArgs} args - Arguments to create a Norma_Categoria.
     * @example
     * // Create one Norma_Categoria
     * const Norma_Categoria = await prisma.norma_Categoria.create({
     *   data: {
     *     // ... data to create a Norma_Categoria
     *   }
     * })
     * 
     */
    create<T extends Norma_CategoriaCreateArgs>(args: SelectSubset<T, Norma_CategoriaCreateArgs<ExtArgs>>): Prisma__Norma_CategoriaClient<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Norma_Categorias.
     * @param {Norma_CategoriaCreateManyArgs} args - Arguments to create many Norma_Categorias.
     * @example
     * // Create many Norma_Categorias
     * const norma_Categoria = await prisma.norma_Categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Norma_CategoriaCreateManyArgs>(args?: SelectSubset<T, Norma_CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Norma_Categoria.
     * @param {Norma_CategoriaDeleteArgs} args - Arguments to delete one Norma_Categoria.
     * @example
     * // Delete one Norma_Categoria
     * const Norma_Categoria = await prisma.norma_Categoria.delete({
     *   where: {
     *     // ... filter to delete one Norma_Categoria
     *   }
     * })
     * 
     */
    delete<T extends Norma_CategoriaDeleteArgs>(args: SelectSubset<T, Norma_CategoriaDeleteArgs<ExtArgs>>): Prisma__Norma_CategoriaClient<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Norma_Categoria.
     * @param {Norma_CategoriaUpdateArgs} args - Arguments to update one Norma_Categoria.
     * @example
     * // Update one Norma_Categoria
     * const norma_Categoria = await prisma.norma_Categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Norma_CategoriaUpdateArgs>(args: SelectSubset<T, Norma_CategoriaUpdateArgs<ExtArgs>>): Prisma__Norma_CategoriaClient<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Norma_Categorias.
     * @param {Norma_CategoriaDeleteManyArgs} args - Arguments to filter Norma_Categorias to delete.
     * @example
     * // Delete a few Norma_Categorias
     * const { count } = await prisma.norma_Categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Norma_CategoriaDeleteManyArgs>(args?: SelectSubset<T, Norma_CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Norma_Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Norma_CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Norma_Categorias
     * const norma_Categoria = await prisma.norma_Categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Norma_CategoriaUpdateManyArgs>(args: SelectSubset<T, Norma_CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Norma_Categoria.
     * @param {Norma_CategoriaUpsertArgs} args - Arguments to update or create a Norma_Categoria.
     * @example
     * // Update or create a Norma_Categoria
     * const norma_Categoria = await prisma.norma_Categoria.upsert({
     *   create: {
     *     // ... data to create a Norma_Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Norma_Categoria we want to update
     *   }
     * })
     */
    upsert<T extends Norma_CategoriaUpsertArgs>(args: SelectSubset<T, Norma_CategoriaUpsertArgs<ExtArgs>>): Prisma__Norma_CategoriaClient<$Result.GetResult<Prisma.$Norma_CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Norma_Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Norma_CategoriaCountArgs} args - Arguments to filter Norma_Categorias to count.
     * @example
     * // Count the number of Norma_Categorias
     * const count = await prisma.norma_Categoria.count({
     *   where: {
     *     // ... the filter for the Norma_Categorias we want to count
     *   }
     * })
    **/
    count<T extends Norma_CategoriaCountArgs>(
      args?: Subset<T, Norma_CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Norma_CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Norma_Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Norma_CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Norma_CategoriaAggregateArgs>(args: Subset<T, Norma_CategoriaAggregateArgs>): Prisma.PrismaPromise<GetNorma_CategoriaAggregateType<T>>

    /**
     * Group by Norma_Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Norma_CategoriaGroupByArgs} args - Group by arguments.
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
      T extends Norma_CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Norma_CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: Norma_CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Norma_CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNorma_CategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Norma_Categoria model
   */
  readonly fields: Norma_CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Norma_Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Norma_CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cat<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    norma<T extends NormaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormaDefaultArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Norma_Categoria model
   */
  interface Norma_CategoriaFieldRefs {
    readonly id_norma: FieldRef<"Norma_Categoria", 'Int'>
    readonly id_cat: FieldRef<"Norma_Categoria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Norma_Categoria findUnique
   */
  export type Norma_CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Norma_Categoria to fetch.
     */
    where: Norma_CategoriaWhereUniqueInput
  }

  /**
   * Norma_Categoria findUniqueOrThrow
   */
  export type Norma_CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Norma_Categoria to fetch.
     */
    where: Norma_CategoriaWhereUniqueInput
  }

  /**
   * Norma_Categoria findFirst
   */
  export type Norma_CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Norma_Categoria to fetch.
     */
    where?: Norma_CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Norma_Categorias to fetch.
     */
    orderBy?: Norma_CategoriaOrderByWithRelationInput | Norma_CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Norma_Categorias.
     */
    cursor?: Norma_CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Norma_Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Norma_Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Norma_Categorias.
     */
    distinct?: Norma_CategoriaScalarFieldEnum | Norma_CategoriaScalarFieldEnum[]
  }

  /**
   * Norma_Categoria findFirstOrThrow
   */
  export type Norma_CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Norma_Categoria to fetch.
     */
    where?: Norma_CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Norma_Categorias to fetch.
     */
    orderBy?: Norma_CategoriaOrderByWithRelationInput | Norma_CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Norma_Categorias.
     */
    cursor?: Norma_CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Norma_Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Norma_Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Norma_Categorias.
     */
    distinct?: Norma_CategoriaScalarFieldEnum | Norma_CategoriaScalarFieldEnum[]
  }

  /**
   * Norma_Categoria findMany
   */
  export type Norma_CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Norma_Categorias to fetch.
     */
    where?: Norma_CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Norma_Categorias to fetch.
     */
    orderBy?: Norma_CategoriaOrderByWithRelationInput | Norma_CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Norma_Categorias.
     */
    cursor?: Norma_CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Norma_Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Norma_Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Norma_Categorias.
     */
    distinct?: Norma_CategoriaScalarFieldEnum | Norma_CategoriaScalarFieldEnum[]
  }

  /**
   * Norma_Categoria create
   */
  export type Norma_CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Norma_Categoria.
     */
    data: XOR<Norma_CategoriaCreateInput, Norma_CategoriaUncheckedCreateInput>
  }

  /**
   * Norma_Categoria createMany
   */
  export type Norma_CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Norma_Categorias.
     */
    data: Norma_CategoriaCreateManyInput | Norma_CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Norma_Categoria update
   */
  export type Norma_CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Norma_Categoria.
     */
    data: XOR<Norma_CategoriaUpdateInput, Norma_CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Norma_Categoria to update.
     */
    where: Norma_CategoriaWhereUniqueInput
  }

  /**
   * Norma_Categoria updateMany
   */
  export type Norma_CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Norma_Categorias.
     */
    data: XOR<Norma_CategoriaUpdateManyMutationInput, Norma_CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Norma_Categorias to update
     */
    where?: Norma_CategoriaWhereInput
    /**
     * Limit how many Norma_Categorias to update.
     */
    limit?: number
  }

  /**
   * Norma_Categoria upsert
   */
  export type Norma_CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Norma_Categoria to update in case it exists.
     */
    where: Norma_CategoriaWhereUniqueInput
    /**
     * In case the Norma_Categoria found by the `where` argument doesn't exist, create a new Norma_Categoria with this data.
     */
    create: XOR<Norma_CategoriaCreateInput, Norma_CategoriaUncheckedCreateInput>
    /**
     * In case the Norma_Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Norma_CategoriaUpdateInput, Norma_CategoriaUncheckedUpdateInput>
  }

  /**
   * Norma_Categoria delete
   */
  export type Norma_CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Norma_Categoria to delete.
     */
    where: Norma_CategoriaWhereUniqueInput
  }

  /**
   * Norma_Categoria deleteMany
   */
  export type Norma_CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Norma_Categorias to delete
     */
    where?: Norma_CategoriaWhereInput
    /**
     * Limit how many Norma_Categorias to delete.
     */
    limit?: number
  }

  /**
   * Norma_Categoria without action
   */
  export type Norma_CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma_Categoria
     */
    select?: Norma_CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma_Categoria
     */
    omit?: Norma_CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Norma_CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Normas_Referenciadas
   */

  export type AggregateNormas_Referenciadas = {
    _count: Normas_ReferenciadasCountAggregateOutputType | null
    _avg: Normas_ReferenciadasAvgAggregateOutputType | null
    _sum: Normas_ReferenciadasSumAggregateOutputType | null
    _min: Normas_ReferenciadasMinAggregateOutputType | null
    _max: Normas_ReferenciadasMaxAggregateOutputType | null
  }

  export type Normas_ReferenciadasAvgAggregateOutputType = {
    norma_origem_id: number | null
    norma_destino_id: number | null
  }

  export type Normas_ReferenciadasSumAggregateOutputType = {
    norma_origem_id: number | null
    norma_destino_id: number | null
  }

  export type Normas_ReferenciadasMinAggregateOutputType = {
    norma_origem_id: number | null
    norma_destino_id: number | null
  }

  export type Normas_ReferenciadasMaxAggregateOutputType = {
    norma_origem_id: number | null
    norma_destino_id: number | null
  }

  export type Normas_ReferenciadasCountAggregateOutputType = {
    norma_origem_id: number
    norma_destino_id: number
    _all: number
  }


  export type Normas_ReferenciadasAvgAggregateInputType = {
    norma_origem_id?: true
    norma_destino_id?: true
  }

  export type Normas_ReferenciadasSumAggregateInputType = {
    norma_origem_id?: true
    norma_destino_id?: true
  }

  export type Normas_ReferenciadasMinAggregateInputType = {
    norma_origem_id?: true
    norma_destino_id?: true
  }

  export type Normas_ReferenciadasMaxAggregateInputType = {
    norma_origem_id?: true
    norma_destino_id?: true
  }

  export type Normas_ReferenciadasCountAggregateInputType = {
    norma_origem_id?: true
    norma_destino_id?: true
    _all?: true
  }

  export type Normas_ReferenciadasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Normas_Referenciadas to aggregate.
     */
    where?: Normas_ReferenciadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas_Referenciadas to fetch.
     */
    orderBy?: Normas_ReferenciadasOrderByWithRelationInput | Normas_ReferenciadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Normas_ReferenciadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas_Referenciadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas_Referenciadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Normas_Referenciadas
    **/
    _count?: true | Normas_ReferenciadasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Normas_ReferenciadasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Normas_ReferenciadasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Normas_ReferenciadasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Normas_ReferenciadasMaxAggregateInputType
  }

  export type GetNormas_ReferenciadasAggregateType<T extends Normas_ReferenciadasAggregateArgs> = {
        [P in keyof T & keyof AggregateNormas_Referenciadas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNormas_Referenciadas[P]>
      : GetScalarType<T[P], AggregateNormas_Referenciadas[P]>
  }




  export type Normas_ReferenciadasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Normas_ReferenciadasWhereInput
    orderBy?: Normas_ReferenciadasOrderByWithAggregationInput | Normas_ReferenciadasOrderByWithAggregationInput[]
    by: Normas_ReferenciadasScalarFieldEnum[] | Normas_ReferenciadasScalarFieldEnum
    having?: Normas_ReferenciadasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Normas_ReferenciadasCountAggregateInputType | true
    _avg?: Normas_ReferenciadasAvgAggregateInputType
    _sum?: Normas_ReferenciadasSumAggregateInputType
    _min?: Normas_ReferenciadasMinAggregateInputType
    _max?: Normas_ReferenciadasMaxAggregateInputType
  }

  export type Normas_ReferenciadasGroupByOutputType = {
    norma_origem_id: number
    norma_destino_id: number
    _count: Normas_ReferenciadasCountAggregateOutputType | null
    _avg: Normas_ReferenciadasAvgAggregateOutputType | null
    _sum: Normas_ReferenciadasSumAggregateOutputType | null
    _min: Normas_ReferenciadasMinAggregateOutputType | null
    _max: Normas_ReferenciadasMaxAggregateOutputType | null
  }

  type GetNormas_ReferenciadasGroupByPayload<T extends Normas_ReferenciadasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Normas_ReferenciadasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Normas_ReferenciadasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Normas_ReferenciadasGroupByOutputType[P]>
            : GetScalarType<T[P], Normas_ReferenciadasGroupByOutputType[P]>
        }
      >
    >


  export type Normas_ReferenciadasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    norma_origem_id?: boolean
    norma_destino_id?: boolean
    norma_origem?: boolean | NormaDefaultArgs<ExtArgs>
    norma_destino?: boolean | NormaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["normas_Referenciadas"]>



  export type Normas_ReferenciadasSelectScalar = {
    norma_origem_id?: boolean
    norma_destino_id?: boolean
  }

  export type Normas_ReferenciadasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"norma_origem_id" | "norma_destino_id", ExtArgs["result"]["normas_Referenciadas"]>
  export type Normas_ReferenciadasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    norma_origem?: boolean | NormaDefaultArgs<ExtArgs>
    norma_destino?: boolean | NormaDefaultArgs<ExtArgs>
  }

  export type $Normas_ReferenciadasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Normas_Referenciadas"
    objects: {
      norma_origem: Prisma.$NormaPayload<ExtArgs>
      norma_destino: Prisma.$NormaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      norma_origem_id: number
      norma_destino_id: number
    }, ExtArgs["result"]["normas_Referenciadas"]>
    composites: {}
  }

  type Normas_ReferenciadasGetPayload<S extends boolean | null | undefined | Normas_ReferenciadasDefaultArgs> = $Result.GetResult<Prisma.$Normas_ReferenciadasPayload, S>

  type Normas_ReferenciadasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Normas_ReferenciadasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Normas_ReferenciadasCountAggregateInputType | true
    }

  export interface Normas_ReferenciadasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Normas_Referenciadas'], meta: { name: 'Normas_Referenciadas' } }
    /**
     * Find zero or one Normas_Referenciadas that matches the filter.
     * @param {Normas_ReferenciadasFindUniqueArgs} args - Arguments to find a Normas_Referenciadas
     * @example
     * // Get one Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Normas_ReferenciadasFindUniqueArgs>(args: SelectSubset<T, Normas_ReferenciadasFindUniqueArgs<ExtArgs>>): Prisma__Normas_ReferenciadasClient<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Normas_Referenciadas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Normas_ReferenciadasFindUniqueOrThrowArgs} args - Arguments to find a Normas_Referenciadas
     * @example
     * // Get one Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Normas_ReferenciadasFindUniqueOrThrowArgs>(args: SelectSubset<T, Normas_ReferenciadasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Normas_ReferenciadasClient<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Normas_Referenciadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_ReferenciadasFindFirstArgs} args - Arguments to find a Normas_Referenciadas
     * @example
     * // Get one Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Normas_ReferenciadasFindFirstArgs>(args?: SelectSubset<T, Normas_ReferenciadasFindFirstArgs<ExtArgs>>): Prisma__Normas_ReferenciadasClient<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Normas_Referenciadas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_ReferenciadasFindFirstOrThrowArgs} args - Arguments to find a Normas_Referenciadas
     * @example
     * // Get one Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Normas_ReferenciadasFindFirstOrThrowArgs>(args?: SelectSubset<T, Normas_ReferenciadasFindFirstOrThrowArgs<ExtArgs>>): Prisma__Normas_ReferenciadasClient<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Normas_Referenciadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_ReferenciadasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.findMany()
     * 
     * // Get first 10 Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.findMany({ take: 10 })
     * 
     * // Only select the `norma_origem_id`
     * const normas_ReferenciadasWithNorma_origem_idOnly = await prisma.normas_Referenciadas.findMany({ select: { norma_origem_id: true } })
     * 
     */
    findMany<T extends Normas_ReferenciadasFindManyArgs>(args?: SelectSubset<T, Normas_ReferenciadasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Normas_Referenciadas.
     * @param {Normas_ReferenciadasCreateArgs} args - Arguments to create a Normas_Referenciadas.
     * @example
     * // Create one Normas_Referenciadas
     * const Normas_Referenciadas = await prisma.normas_Referenciadas.create({
     *   data: {
     *     // ... data to create a Normas_Referenciadas
     *   }
     * })
     * 
     */
    create<T extends Normas_ReferenciadasCreateArgs>(args: SelectSubset<T, Normas_ReferenciadasCreateArgs<ExtArgs>>): Prisma__Normas_ReferenciadasClient<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Normas_Referenciadas.
     * @param {Normas_ReferenciadasCreateManyArgs} args - Arguments to create many Normas_Referenciadas.
     * @example
     * // Create many Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Normas_ReferenciadasCreateManyArgs>(args?: SelectSubset<T, Normas_ReferenciadasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Normas_Referenciadas.
     * @param {Normas_ReferenciadasDeleteArgs} args - Arguments to delete one Normas_Referenciadas.
     * @example
     * // Delete one Normas_Referenciadas
     * const Normas_Referenciadas = await prisma.normas_Referenciadas.delete({
     *   where: {
     *     // ... filter to delete one Normas_Referenciadas
     *   }
     * })
     * 
     */
    delete<T extends Normas_ReferenciadasDeleteArgs>(args: SelectSubset<T, Normas_ReferenciadasDeleteArgs<ExtArgs>>): Prisma__Normas_ReferenciadasClient<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Normas_Referenciadas.
     * @param {Normas_ReferenciadasUpdateArgs} args - Arguments to update one Normas_Referenciadas.
     * @example
     * // Update one Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Normas_ReferenciadasUpdateArgs>(args: SelectSubset<T, Normas_ReferenciadasUpdateArgs<ExtArgs>>): Prisma__Normas_ReferenciadasClient<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Normas_Referenciadas.
     * @param {Normas_ReferenciadasDeleteManyArgs} args - Arguments to filter Normas_Referenciadas to delete.
     * @example
     * // Delete a few Normas_Referenciadas
     * const { count } = await prisma.normas_Referenciadas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Normas_ReferenciadasDeleteManyArgs>(args?: SelectSubset<T, Normas_ReferenciadasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Normas_Referenciadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_ReferenciadasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Normas_ReferenciadasUpdateManyArgs>(args: SelectSubset<T, Normas_ReferenciadasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Normas_Referenciadas.
     * @param {Normas_ReferenciadasUpsertArgs} args - Arguments to update or create a Normas_Referenciadas.
     * @example
     * // Update or create a Normas_Referenciadas
     * const normas_Referenciadas = await prisma.normas_Referenciadas.upsert({
     *   create: {
     *     // ... data to create a Normas_Referenciadas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Normas_Referenciadas we want to update
     *   }
     * })
     */
    upsert<T extends Normas_ReferenciadasUpsertArgs>(args: SelectSubset<T, Normas_ReferenciadasUpsertArgs<ExtArgs>>): Prisma__Normas_ReferenciadasClient<$Result.GetResult<Prisma.$Normas_ReferenciadasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Normas_Referenciadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_ReferenciadasCountArgs} args - Arguments to filter Normas_Referenciadas to count.
     * @example
     * // Count the number of Normas_Referenciadas
     * const count = await prisma.normas_Referenciadas.count({
     *   where: {
     *     // ... the filter for the Normas_Referenciadas we want to count
     *   }
     * })
    **/
    count<T extends Normas_ReferenciadasCountArgs>(
      args?: Subset<T, Normas_ReferenciadasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Normas_ReferenciadasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Normas_Referenciadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_ReferenciadasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Normas_ReferenciadasAggregateArgs>(args: Subset<T, Normas_ReferenciadasAggregateArgs>): Prisma.PrismaPromise<GetNormas_ReferenciadasAggregateType<T>>

    /**
     * Group by Normas_Referenciadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_ReferenciadasGroupByArgs} args - Group by arguments.
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
      T extends Normas_ReferenciadasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Normas_ReferenciadasGroupByArgs['orderBy'] }
        : { orderBy?: Normas_ReferenciadasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Normas_ReferenciadasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNormas_ReferenciadasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Normas_Referenciadas model
   */
  readonly fields: Normas_ReferenciadasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Normas_Referenciadas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Normas_ReferenciadasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    norma_origem<T extends NormaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormaDefaultArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    norma_destino<T extends NormaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormaDefaultArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Normas_Referenciadas model
   */
  interface Normas_ReferenciadasFieldRefs {
    readonly norma_origem_id: FieldRef<"Normas_Referenciadas", 'Int'>
    readonly norma_destino_id: FieldRef<"Normas_Referenciadas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Normas_Referenciadas findUnique
   */
  export type Normas_ReferenciadasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Referenciadas to fetch.
     */
    where: Normas_ReferenciadasWhereUniqueInput
  }

  /**
   * Normas_Referenciadas findUniqueOrThrow
   */
  export type Normas_ReferenciadasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Referenciadas to fetch.
     */
    where: Normas_ReferenciadasWhereUniqueInput
  }

  /**
   * Normas_Referenciadas findFirst
   */
  export type Normas_ReferenciadasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Referenciadas to fetch.
     */
    where?: Normas_ReferenciadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas_Referenciadas to fetch.
     */
    orderBy?: Normas_ReferenciadasOrderByWithRelationInput | Normas_ReferenciadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Normas_Referenciadas.
     */
    cursor?: Normas_ReferenciadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas_Referenciadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas_Referenciadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas_Referenciadas.
     */
    distinct?: Normas_ReferenciadasScalarFieldEnum | Normas_ReferenciadasScalarFieldEnum[]
  }

  /**
   * Normas_Referenciadas findFirstOrThrow
   */
  export type Normas_ReferenciadasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Referenciadas to fetch.
     */
    where?: Normas_ReferenciadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas_Referenciadas to fetch.
     */
    orderBy?: Normas_ReferenciadasOrderByWithRelationInput | Normas_ReferenciadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Normas_Referenciadas.
     */
    cursor?: Normas_ReferenciadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas_Referenciadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas_Referenciadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas_Referenciadas.
     */
    distinct?: Normas_ReferenciadasScalarFieldEnum | Normas_ReferenciadasScalarFieldEnum[]
  }

  /**
   * Normas_Referenciadas findMany
   */
  export type Normas_ReferenciadasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Referenciadas to fetch.
     */
    where?: Normas_ReferenciadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas_Referenciadas to fetch.
     */
    orderBy?: Normas_ReferenciadasOrderByWithRelationInput | Normas_ReferenciadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Normas_Referenciadas.
     */
    cursor?: Normas_ReferenciadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas_Referenciadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas_Referenciadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas_Referenciadas.
     */
    distinct?: Normas_ReferenciadasScalarFieldEnum | Normas_ReferenciadasScalarFieldEnum[]
  }

  /**
   * Normas_Referenciadas create
   */
  export type Normas_ReferenciadasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * The data needed to create a Normas_Referenciadas.
     */
    data: XOR<Normas_ReferenciadasCreateInput, Normas_ReferenciadasUncheckedCreateInput>
  }

  /**
   * Normas_Referenciadas createMany
   */
  export type Normas_ReferenciadasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Normas_Referenciadas.
     */
    data: Normas_ReferenciadasCreateManyInput | Normas_ReferenciadasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Normas_Referenciadas update
   */
  export type Normas_ReferenciadasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * The data needed to update a Normas_Referenciadas.
     */
    data: XOR<Normas_ReferenciadasUpdateInput, Normas_ReferenciadasUncheckedUpdateInput>
    /**
     * Choose, which Normas_Referenciadas to update.
     */
    where: Normas_ReferenciadasWhereUniqueInput
  }

  /**
   * Normas_Referenciadas updateMany
   */
  export type Normas_ReferenciadasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Normas_Referenciadas.
     */
    data: XOR<Normas_ReferenciadasUpdateManyMutationInput, Normas_ReferenciadasUncheckedUpdateManyInput>
    /**
     * Filter which Normas_Referenciadas to update
     */
    where?: Normas_ReferenciadasWhereInput
    /**
     * Limit how many Normas_Referenciadas to update.
     */
    limit?: number
  }

  /**
   * Normas_Referenciadas upsert
   */
  export type Normas_ReferenciadasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * The filter to search for the Normas_Referenciadas to update in case it exists.
     */
    where: Normas_ReferenciadasWhereUniqueInput
    /**
     * In case the Normas_Referenciadas found by the `where` argument doesn't exist, create a new Normas_Referenciadas with this data.
     */
    create: XOR<Normas_ReferenciadasCreateInput, Normas_ReferenciadasUncheckedCreateInput>
    /**
     * In case the Normas_Referenciadas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Normas_ReferenciadasUpdateInput, Normas_ReferenciadasUncheckedUpdateInput>
  }

  /**
   * Normas_Referenciadas delete
   */
  export type Normas_ReferenciadasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
    /**
     * Filter which Normas_Referenciadas to delete.
     */
    where: Normas_ReferenciadasWhereUniqueInput
  }

  /**
   * Normas_Referenciadas deleteMany
   */
  export type Normas_ReferenciadasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Normas_Referenciadas to delete
     */
    where?: Normas_ReferenciadasWhereInput
    /**
     * Limit how many Normas_Referenciadas to delete.
     */
    limit?: number
  }

  /**
   * Normas_Referenciadas without action
   */
  export type Normas_ReferenciadasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Referenciadas
     */
    select?: Normas_ReferenciadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Referenciadas
     */
    omit?: Normas_ReferenciadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_ReferenciadasInclude<ExtArgs> | null
  }


  /**
   * Model Normas_Versoes
   */

  export type AggregateNormas_Versoes = {
    _count: Normas_VersoesCountAggregateOutputType | null
    _avg: Normas_VersoesAvgAggregateOutputType | null
    _sum: Normas_VersoesSumAggregateOutputType | null
    _min: Normas_VersoesMinAggregateOutputType | null
    _max: Normas_VersoesMaxAggregateOutputType | null
  }

  export type Normas_VersoesAvgAggregateOutputType = {
    id_versao: number | null
    norma_id: number | null
  }

  export type Normas_VersoesSumAggregateOutputType = {
    id_versao: number | null
    norma_id: number | null
  }

  export type Normas_VersoesMinAggregateOutputType = {
    id_versao: number | null
    norma_id: number | null
    norma_codigo: string | null
    norm_titulo: string | null
    norm_dec: string | null
    emissao: Date | null
    criado_em: Date | null
    criado_em_novo: Date | null
    pdf_nome_original: string | null
    pdf_caminho: string | null
  }

  export type Normas_VersoesMaxAggregateOutputType = {
    id_versao: number | null
    norma_id: number | null
    norma_codigo: string | null
    norm_titulo: string | null
    norm_dec: string | null
    emissao: Date | null
    criado_em: Date | null
    criado_em_novo: Date | null
    pdf_nome_original: string | null
    pdf_caminho: string | null
  }

  export type Normas_VersoesCountAggregateOutputType = {
    id_versao: number
    norma_id: number
    norma_codigo: number
    norm_titulo: number
    norm_dec: number
    emissao: number
    criado_em: number
    criado_em_novo: number
    pdf_nome_original: number
    pdf_caminho: number
    _all: number
  }


  export type Normas_VersoesAvgAggregateInputType = {
    id_versao?: true
    norma_id?: true
  }

  export type Normas_VersoesSumAggregateInputType = {
    id_versao?: true
    norma_id?: true
  }

  export type Normas_VersoesMinAggregateInputType = {
    id_versao?: true
    norma_id?: true
    norma_codigo?: true
    norm_titulo?: true
    norm_dec?: true
    emissao?: true
    criado_em?: true
    criado_em_novo?: true
    pdf_nome_original?: true
    pdf_caminho?: true
  }

  export type Normas_VersoesMaxAggregateInputType = {
    id_versao?: true
    norma_id?: true
    norma_codigo?: true
    norm_titulo?: true
    norm_dec?: true
    emissao?: true
    criado_em?: true
    criado_em_novo?: true
    pdf_nome_original?: true
    pdf_caminho?: true
  }

  export type Normas_VersoesCountAggregateInputType = {
    id_versao?: true
    norma_id?: true
    norma_codigo?: true
    norm_titulo?: true
    norm_dec?: true
    emissao?: true
    criado_em?: true
    criado_em_novo?: true
    pdf_nome_original?: true
    pdf_caminho?: true
    _all?: true
  }

  export type Normas_VersoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Normas_Versoes to aggregate.
     */
    where?: Normas_VersoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas_Versoes to fetch.
     */
    orderBy?: Normas_VersoesOrderByWithRelationInput | Normas_VersoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Normas_VersoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas_Versoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas_Versoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Normas_Versoes
    **/
    _count?: true | Normas_VersoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Normas_VersoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Normas_VersoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Normas_VersoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Normas_VersoesMaxAggregateInputType
  }

  export type GetNormas_VersoesAggregateType<T extends Normas_VersoesAggregateArgs> = {
        [P in keyof T & keyof AggregateNormas_Versoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNormas_Versoes[P]>
      : GetScalarType<T[P], AggregateNormas_Versoes[P]>
  }




  export type Normas_VersoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Normas_VersoesWhereInput
    orderBy?: Normas_VersoesOrderByWithAggregationInput | Normas_VersoesOrderByWithAggregationInput[]
    by: Normas_VersoesScalarFieldEnum[] | Normas_VersoesScalarFieldEnum
    having?: Normas_VersoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Normas_VersoesCountAggregateInputType | true
    _avg?: Normas_VersoesAvgAggregateInputType
    _sum?: Normas_VersoesSumAggregateInputType
    _min?: Normas_VersoesMinAggregateInputType
    _max?: Normas_VersoesMaxAggregateInputType
  }

  export type Normas_VersoesGroupByOutputType = {
    id_versao: number
    norma_id: number
    norma_codigo: string
    norm_titulo: string
    norm_dec: string
    emissao: Date
    criado_em: Date
    criado_em_novo: Date
    pdf_nome_original: string
    pdf_caminho: string
    _count: Normas_VersoesCountAggregateOutputType | null
    _avg: Normas_VersoesAvgAggregateOutputType | null
    _sum: Normas_VersoesSumAggregateOutputType | null
    _min: Normas_VersoesMinAggregateOutputType | null
    _max: Normas_VersoesMaxAggregateOutputType | null
  }

  type GetNormas_VersoesGroupByPayload<T extends Normas_VersoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Normas_VersoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Normas_VersoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Normas_VersoesGroupByOutputType[P]>
            : GetScalarType<T[P], Normas_VersoesGroupByOutputType[P]>
        }
      >
    >


  export type Normas_VersoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_versao?: boolean
    norma_id?: boolean
    norma_codigo?: boolean
    norm_titulo?: boolean
    norm_dec?: boolean
    emissao?: boolean
    criado_em?: boolean
    criado_em_novo?: boolean
    pdf_nome_original?: boolean
    pdf_caminho?: boolean
    norma?: boolean | NormaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["normas_Versoes"]>



  export type Normas_VersoesSelectScalar = {
    id_versao?: boolean
    norma_id?: boolean
    norma_codigo?: boolean
    norm_titulo?: boolean
    norm_dec?: boolean
    emissao?: boolean
    criado_em?: boolean
    criado_em_novo?: boolean
    pdf_nome_original?: boolean
    pdf_caminho?: boolean
  }

  export type Normas_VersoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_versao" | "norma_id" | "norma_codigo" | "norm_titulo" | "norm_dec" | "emissao" | "criado_em" | "criado_em_novo" | "pdf_nome_original" | "pdf_caminho", ExtArgs["result"]["normas_Versoes"]>
  export type Normas_VersoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    norma?: boolean | NormaDefaultArgs<ExtArgs>
  }

  export type $Normas_VersoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Normas_Versoes"
    objects: {
      norma: Prisma.$NormaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_versao: number
      norma_id: number
      norma_codigo: string
      norm_titulo: string
      norm_dec: string
      emissao: Date
      criado_em: Date
      criado_em_novo: Date
      pdf_nome_original: string
      pdf_caminho: string
    }, ExtArgs["result"]["normas_Versoes"]>
    composites: {}
  }

  type Normas_VersoesGetPayload<S extends boolean | null | undefined | Normas_VersoesDefaultArgs> = $Result.GetResult<Prisma.$Normas_VersoesPayload, S>

  type Normas_VersoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Normas_VersoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Normas_VersoesCountAggregateInputType | true
    }

  export interface Normas_VersoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Normas_Versoes'], meta: { name: 'Normas_Versoes' } }
    /**
     * Find zero or one Normas_Versoes that matches the filter.
     * @param {Normas_VersoesFindUniqueArgs} args - Arguments to find a Normas_Versoes
     * @example
     * // Get one Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Normas_VersoesFindUniqueArgs>(args: SelectSubset<T, Normas_VersoesFindUniqueArgs<ExtArgs>>): Prisma__Normas_VersoesClient<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Normas_Versoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Normas_VersoesFindUniqueOrThrowArgs} args - Arguments to find a Normas_Versoes
     * @example
     * // Get one Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Normas_VersoesFindUniqueOrThrowArgs>(args: SelectSubset<T, Normas_VersoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Normas_VersoesClient<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Normas_Versoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_VersoesFindFirstArgs} args - Arguments to find a Normas_Versoes
     * @example
     * // Get one Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Normas_VersoesFindFirstArgs>(args?: SelectSubset<T, Normas_VersoesFindFirstArgs<ExtArgs>>): Prisma__Normas_VersoesClient<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Normas_Versoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_VersoesFindFirstOrThrowArgs} args - Arguments to find a Normas_Versoes
     * @example
     * // Get one Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Normas_VersoesFindFirstOrThrowArgs>(args?: SelectSubset<T, Normas_VersoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Normas_VersoesClient<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Normas_Versoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_VersoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.findMany()
     * 
     * // Get first 10 Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.findMany({ take: 10 })
     * 
     * // Only select the `id_versao`
     * const normas_VersoesWithId_versaoOnly = await prisma.normas_Versoes.findMany({ select: { id_versao: true } })
     * 
     */
    findMany<T extends Normas_VersoesFindManyArgs>(args?: SelectSubset<T, Normas_VersoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Normas_Versoes.
     * @param {Normas_VersoesCreateArgs} args - Arguments to create a Normas_Versoes.
     * @example
     * // Create one Normas_Versoes
     * const Normas_Versoes = await prisma.normas_Versoes.create({
     *   data: {
     *     // ... data to create a Normas_Versoes
     *   }
     * })
     * 
     */
    create<T extends Normas_VersoesCreateArgs>(args: SelectSubset<T, Normas_VersoesCreateArgs<ExtArgs>>): Prisma__Normas_VersoesClient<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Normas_Versoes.
     * @param {Normas_VersoesCreateManyArgs} args - Arguments to create many Normas_Versoes.
     * @example
     * // Create many Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Normas_VersoesCreateManyArgs>(args?: SelectSubset<T, Normas_VersoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Normas_Versoes.
     * @param {Normas_VersoesDeleteArgs} args - Arguments to delete one Normas_Versoes.
     * @example
     * // Delete one Normas_Versoes
     * const Normas_Versoes = await prisma.normas_Versoes.delete({
     *   where: {
     *     // ... filter to delete one Normas_Versoes
     *   }
     * })
     * 
     */
    delete<T extends Normas_VersoesDeleteArgs>(args: SelectSubset<T, Normas_VersoesDeleteArgs<ExtArgs>>): Prisma__Normas_VersoesClient<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Normas_Versoes.
     * @param {Normas_VersoesUpdateArgs} args - Arguments to update one Normas_Versoes.
     * @example
     * // Update one Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Normas_VersoesUpdateArgs>(args: SelectSubset<T, Normas_VersoesUpdateArgs<ExtArgs>>): Prisma__Normas_VersoesClient<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Normas_Versoes.
     * @param {Normas_VersoesDeleteManyArgs} args - Arguments to filter Normas_Versoes to delete.
     * @example
     * // Delete a few Normas_Versoes
     * const { count } = await prisma.normas_Versoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Normas_VersoesDeleteManyArgs>(args?: SelectSubset<T, Normas_VersoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Normas_Versoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_VersoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Normas_VersoesUpdateManyArgs>(args: SelectSubset<T, Normas_VersoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Normas_Versoes.
     * @param {Normas_VersoesUpsertArgs} args - Arguments to update or create a Normas_Versoes.
     * @example
     * // Update or create a Normas_Versoes
     * const normas_Versoes = await prisma.normas_Versoes.upsert({
     *   create: {
     *     // ... data to create a Normas_Versoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Normas_Versoes we want to update
     *   }
     * })
     */
    upsert<T extends Normas_VersoesUpsertArgs>(args: SelectSubset<T, Normas_VersoesUpsertArgs<ExtArgs>>): Prisma__Normas_VersoesClient<$Result.GetResult<Prisma.$Normas_VersoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Normas_Versoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_VersoesCountArgs} args - Arguments to filter Normas_Versoes to count.
     * @example
     * // Count the number of Normas_Versoes
     * const count = await prisma.normas_Versoes.count({
     *   where: {
     *     // ... the filter for the Normas_Versoes we want to count
     *   }
     * })
    **/
    count<T extends Normas_VersoesCountArgs>(
      args?: Subset<T, Normas_VersoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Normas_VersoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Normas_Versoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_VersoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Normas_VersoesAggregateArgs>(args: Subset<T, Normas_VersoesAggregateArgs>): Prisma.PrismaPromise<GetNormas_VersoesAggregateType<T>>

    /**
     * Group by Normas_Versoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Normas_VersoesGroupByArgs} args - Group by arguments.
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
      T extends Normas_VersoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Normas_VersoesGroupByArgs['orderBy'] }
        : { orderBy?: Normas_VersoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Normas_VersoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNormas_VersoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Normas_Versoes model
   */
  readonly fields: Normas_VersoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Normas_Versoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Normas_VersoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    norma<T extends NormaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormaDefaultArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Normas_Versoes model
   */
  interface Normas_VersoesFieldRefs {
    readonly id_versao: FieldRef<"Normas_Versoes", 'Int'>
    readonly norma_id: FieldRef<"Normas_Versoes", 'Int'>
    readonly norma_codigo: FieldRef<"Normas_Versoes", 'String'>
    readonly norm_titulo: FieldRef<"Normas_Versoes", 'String'>
    readonly norm_dec: FieldRef<"Normas_Versoes", 'String'>
    readonly emissao: FieldRef<"Normas_Versoes", 'DateTime'>
    readonly criado_em: FieldRef<"Normas_Versoes", 'DateTime'>
    readonly criado_em_novo: FieldRef<"Normas_Versoes", 'DateTime'>
    readonly pdf_nome_original: FieldRef<"Normas_Versoes", 'String'>
    readonly pdf_caminho: FieldRef<"Normas_Versoes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Normas_Versoes findUnique
   */
  export type Normas_VersoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Versoes to fetch.
     */
    where: Normas_VersoesWhereUniqueInput
  }

  /**
   * Normas_Versoes findUniqueOrThrow
   */
  export type Normas_VersoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Versoes to fetch.
     */
    where: Normas_VersoesWhereUniqueInput
  }

  /**
   * Normas_Versoes findFirst
   */
  export type Normas_VersoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Versoes to fetch.
     */
    where?: Normas_VersoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas_Versoes to fetch.
     */
    orderBy?: Normas_VersoesOrderByWithRelationInput | Normas_VersoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Normas_Versoes.
     */
    cursor?: Normas_VersoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas_Versoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas_Versoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas_Versoes.
     */
    distinct?: Normas_VersoesScalarFieldEnum | Normas_VersoesScalarFieldEnum[]
  }

  /**
   * Normas_Versoes findFirstOrThrow
   */
  export type Normas_VersoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Versoes to fetch.
     */
    where?: Normas_VersoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas_Versoes to fetch.
     */
    orderBy?: Normas_VersoesOrderByWithRelationInput | Normas_VersoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Normas_Versoes.
     */
    cursor?: Normas_VersoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas_Versoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas_Versoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas_Versoes.
     */
    distinct?: Normas_VersoesScalarFieldEnum | Normas_VersoesScalarFieldEnum[]
  }

  /**
   * Normas_Versoes findMany
   */
  export type Normas_VersoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * Filter, which Normas_Versoes to fetch.
     */
    where?: Normas_VersoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Normas_Versoes to fetch.
     */
    orderBy?: Normas_VersoesOrderByWithRelationInput | Normas_VersoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Normas_Versoes.
     */
    cursor?: Normas_VersoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Normas_Versoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Normas_Versoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Normas_Versoes.
     */
    distinct?: Normas_VersoesScalarFieldEnum | Normas_VersoesScalarFieldEnum[]
  }

  /**
   * Normas_Versoes create
   */
  export type Normas_VersoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * The data needed to create a Normas_Versoes.
     */
    data: XOR<Normas_VersoesCreateInput, Normas_VersoesUncheckedCreateInput>
  }

  /**
   * Normas_Versoes createMany
   */
  export type Normas_VersoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Normas_Versoes.
     */
    data: Normas_VersoesCreateManyInput | Normas_VersoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Normas_Versoes update
   */
  export type Normas_VersoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * The data needed to update a Normas_Versoes.
     */
    data: XOR<Normas_VersoesUpdateInput, Normas_VersoesUncheckedUpdateInput>
    /**
     * Choose, which Normas_Versoes to update.
     */
    where: Normas_VersoesWhereUniqueInput
  }

  /**
   * Normas_Versoes updateMany
   */
  export type Normas_VersoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Normas_Versoes.
     */
    data: XOR<Normas_VersoesUpdateManyMutationInput, Normas_VersoesUncheckedUpdateManyInput>
    /**
     * Filter which Normas_Versoes to update
     */
    where?: Normas_VersoesWhereInput
    /**
     * Limit how many Normas_Versoes to update.
     */
    limit?: number
  }

  /**
   * Normas_Versoes upsert
   */
  export type Normas_VersoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * The filter to search for the Normas_Versoes to update in case it exists.
     */
    where: Normas_VersoesWhereUniqueInput
    /**
     * In case the Normas_Versoes found by the `where` argument doesn't exist, create a new Normas_Versoes with this data.
     */
    create: XOR<Normas_VersoesCreateInput, Normas_VersoesUncheckedCreateInput>
    /**
     * In case the Normas_Versoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Normas_VersoesUpdateInput, Normas_VersoesUncheckedUpdateInput>
  }

  /**
   * Normas_Versoes delete
   */
  export type Normas_VersoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
    /**
     * Filter which Normas_Versoes to delete.
     */
    where: Normas_VersoesWhereUniqueInput
  }

  /**
   * Normas_Versoes deleteMany
   */
  export type Normas_VersoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Normas_Versoes to delete
     */
    where?: Normas_VersoesWhereInput
    /**
     * Limit how many Normas_Versoes to delete.
     */
    limit?: number
  }

  /**
   * Normas_Versoes without action
   */
  export type Normas_VersoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Normas_Versoes
     */
    select?: Normas_VersoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Normas_Versoes
     */
    omit?: Normas_VersoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Normas_VersoesInclude<ExtArgs> | null
  }


  /**
   * Model Mfa
   */

  export type AggregateMfa = {
    _count: MfaCountAggregateOutputType | null
    _avg: MfaAvgAggregateOutputType | null
    _sum: MfaSumAggregateOutputType | null
    _min: MfaMinAggregateOutputType | null
    _max: MfaMaxAggregateOutputType | null
  }

  export type MfaAvgAggregateOutputType = {
    id: number | null
    user_id_FK: number | null
  }

  export type MfaSumAggregateOutputType = {
    id: number | null
    user_id_FK: number | null
  }

  export type MfaMinAggregateOutputType = {
    id: number | null
    user_id_FK: number | null
    cod_mfa: string | null
    cod_data_cricao: Date | null
  }

  export type MfaMaxAggregateOutputType = {
    id: number | null
    user_id_FK: number | null
    cod_mfa: string | null
    cod_data_cricao: Date | null
  }

  export type MfaCountAggregateOutputType = {
    id: number
    user_id_FK: number
    cod_mfa: number
    cod_data_cricao: number
    _all: number
  }


  export type MfaAvgAggregateInputType = {
    id?: true
    user_id_FK?: true
  }

  export type MfaSumAggregateInputType = {
    id?: true
    user_id_FK?: true
  }

  export type MfaMinAggregateInputType = {
    id?: true
    user_id_FK?: true
    cod_mfa?: true
    cod_data_cricao?: true
  }

  export type MfaMaxAggregateInputType = {
    id?: true
    user_id_FK?: true
    cod_mfa?: true
    cod_data_cricao?: true
  }

  export type MfaCountAggregateInputType = {
    id?: true
    user_id_FK?: true
    cod_mfa?: true
    cod_data_cricao?: true
    _all?: true
  }

  export type MfaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mfa to aggregate.
     */
    where?: MfaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mfas to fetch.
     */
    orderBy?: MfaOrderByWithRelationInput | MfaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MfaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mfas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mfas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mfas
    **/
    _count?: true | MfaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MfaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MfaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MfaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MfaMaxAggregateInputType
  }

  export type GetMfaAggregateType<T extends MfaAggregateArgs> = {
        [P in keyof T & keyof AggregateMfa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMfa[P]>
      : GetScalarType<T[P], AggregateMfa[P]>
  }




  export type MfaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfaWhereInput
    orderBy?: MfaOrderByWithAggregationInput | MfaOrderByWithAggregationInput[]
    by: MfaScalarFieldEnum[] | MfaScalarFieldEnum
    having?: MfaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MfaCountAggregateInputType | true
    _avg?: MfaAvgAggregateInputType
    _sum?: MfaSumAggregateInputType
    _min?: MfaMinAggregateInputType
    _max?: MfaMaxAggregateInputType
  }

  export type MfaGroupByOutputType = {
    id: number
    user_id_FK: number
    cod_mfa: string
    cod_data_cricao: Date
    _count: MfaCountAggregateOutputType | null
    _avg: MfaAvgAggregateOutputType | null
    _sum: MfaSumAggregateOutputType | null
    _min: MfaMinAggregateOutputType | null
    _max: MfaMaxAggregateOutputType | null
  }

  type GetMfaGroupByPayload<T extends MfaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MfaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MfaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MfaGroupByOutputType[P]>
            : GetScalarType<T[P], MfaGroupByOutputType[P]>
        }
      >
    >


  export type MfaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id_FK?: boolean
    cod_mfa?: boolean
    cod_data_cricao?: boolean
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mfa"]>



  export type MfaSelectScalar = {
    id?: boolean
    user_id_FK?: boolean
    cod_mfa?: boolean
    cod_data_cricao?: boolean
  }

  export type MfaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id_FK" | "cod_mfa" | "cod_data_cricao", ExtArgs["result"]["mfa"]>
  export type MfaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MfaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mfa"
    objects: {
      usuario: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id_FK: number
      cod_mfa: string
      cod_data_cricao: Date
    }, ExtArgs["result"]["mfa"]>
    composites: {}
  }

  type MfaGetPayload<S extends boolean | null | undefined | MfaDefaultArgs> = $Result.GetResult<Prisma.$MfaPayload, S>

  type MfaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MfaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MfaCountAggregateInputType | true
    }

  export interface MfaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mfa'], meta: { name: 'Mfa' } }
    /**
     * Find zero or one Mfa that matches the filter.
     * @param {MfaFindUniqueArgs} args - Arguments to find a Mfa
     * @example
     * // Get one Mfa
     * const mfa = await prisma.mfa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MfaFindUniqueArgs>(args: SelectSubset<T, MfaFindUniqueArgs<ExtArgs>>): Prisma__MfaClient<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mfa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MfaFindUniqueOrThrowArgs} args - Arguments to find a Mfa
     * @example
     * // Get one Mfa
     * const mfa = await prisma.mfa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MfaFindUniqueOrThrowArgs>(args: SelectSubset<T, MfaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MfaClient<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mfa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaFindFirstArgs} args - Arguments to find a Mfa
     * @example
     * // Get one Mfa
     * const mfa = await prisma.mfa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MfaFindFirstArgs>(args?: SelectSubset<T, MfaFindFirstArgs<ExtArgs>>): Prisma__MfaClient<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mfa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaFindFirstOrThrowArgs} args - Arguments to find a Mfa
     * @example
     * // Get one Mfa
     * const mfa = await prisma.mfa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MfaFindFirstOrThrowArgs>(args?: SelectSubset<T, MfaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MfaClient<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mfas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mfas
     * const mfas = await prisma.mfa.findMany()
     * 
     * // Get first 10 Mfas
     * const mfas = await prisma.mfa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mfaWithIdOnly = await prisma.mfa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MfaFindManyArgs>(args?: SelectSubset<T, MfaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mfa.
     * @param {MfaCreateArgs} args - Arguments to create a Mfa.
     * @example
     * // Create one Mfa
     * const Mfa = await prisma.mfa.create({
     *   data: {
     *     // ... data to create a Mfa
     *   }
     * })
     * 
     */
    create<T extends MfaCreateArgs>(args: SelectSubset<T, MfaCreateArgs<ExtArgs>>): Prisma__MfaClient<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mfas.
     * @param {MfaCreateManyArgs} args - Arguments to create many Mfas.
     * @example
     * // Create many Mfas
     * const mfa = await prisma.mfa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MfaCreateManyArgs>(args?: SelectSubset<T, MfaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mfa.
     * @param {MfaDeleteArgs} args - Arguments to delete one Mfa.
     * @example
     * // Delete one Mfa
     * const Mfa = await prisma.mfa.delete({
     *   where: {
     *     // ... filter to delete one Mfa
     *   }
     * })
     * 
     */
    delete<T extends MfaDeleteArgs>(args: SelectSubset<T, MfaDeleteArgs<ExtArgs>>): Prisma__MfaClient<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mfa.
     * @param {MfaUpdateArgs} args - Arguments to update one Mfa.
     * @example
     * // Update one Mfa
     * const mfa = await prisma.mfa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MfaUpdateArgs>(args: SelectSubset<T, MfaUpdateArgs<ExtArgs>>): Prisma__MfaClient<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mfas.
     * @param {MfaDeleteManyArgs} args - Arguments to filter Mfas to delete.
     * @example
     * // Delete a few Mfas
     * const { count } = await prisma.mfa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MfaDeleteManyArgs>(args?: SelectSubset<T, MfaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mfas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mfas
     * const mfa = await prisma.mfa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MfaUpdateManyArgs>(args: SelectSubset<T, MfaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mfa.
     * @param {MfaUpsertArgs} args - Arguments to update or create a Mfa.
     * @example
     * // Update or create a Mfa
     * const mfa = await prisma.mfa.upsert({
     *   create: {
     *     // ... data to create a Mfa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mfa we want to update
     *   }
     * })
     */
    upsert<T extends MfaUpsertArgs>(args: SelectSubset<T, MfaUpsertArgs<ExtArgs>>): Prisma__MfaClient<$Result.GetResult<Prisma.$MfaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mfas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaCountArgs} args - Arguments to filter Mfas to count.
     * @example
     * // Count the number of Mfas
     * const count = await prisma.mfa.count({
     *   where: {
     *     // ... the filter for the Mfas we want to count
     *   }
     * })
    **/
    count<T extends MfaCountArgs>(
      args?: Subset<T, MfaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MfaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mfa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MfaAggregateArgs>(args: Subset<T, MfaAggregateArgs>): Prisma.PrismaPromise<GetMfaAggregateType<T>>

    /**
     * Group by Mfa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaGroupByArgs} args - Group by arguments.
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
      T extends MfaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MfaGroupByArgs['orderBy'] }
        : { orderBy?: MfaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MfaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mfa model
   */
  readonly fields: MfaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mfa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MfaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mfa model
   */
  interface MfaFieldRefs {
    readonly id: FieldRef<"Mfa", 'Int'>
    readonly user_id_FK: FieldRef<"Mfa", 'Int'>
    readonly cod_mfa: FieldRef<"Mfa", 'String'>
    readonly cod_data_cricao: FieldRef<"Mfa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mfa findUnique
   */
  export type MfaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * Filter, which Mfa to fetch.
     */
    where: MfaWhereUniqueInput
  }

  /**
   * Mfa findUniqueOrThrow
   */
  export type MfaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * Filter, which Mfa to fetch.
     */
    where: MfaWhereUniqueInput
  }

  /**
   * Mfa findFirst
   */
  export type MfaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * Filter, which Mfa to fetch.
     */
    where?: MfaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mfas to fetch.
     */
    orderBy?: MfaOrderByWithRelationInput | MfaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mfas.
     */
    cursor?: MfaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mfas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mfas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mfas.
     */
    distinct?: MfaScalarFieldEnum | MfaScalarFieldEnum[]
  }

  /**
   * Mfa findFirstOrThrow
   */
  export type MfaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * Filter, which Mfa to fetch.
     */
    where?: MfaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mfas to fetch.
     */
    orderBy?: MfaOrderByWithRelationInput | MfaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mfas.
     */
    cursor?: MfaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mfas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mfas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mfas.
     */
    distinct?: MfaScalarFieldEnum | MfaScalarFieldEnum[]
  }

  /**
   * Mfa findMany
   */
  export type MfaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * Filter, which Mfas to fetch.
     */
    where?: MfaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mfas to fetch.
     */
    orderBy?: MfaOrderByWithRelationInput | MfaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mfas.
     */
    cursor?: MfaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mfas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mfas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mfas.
     */
    distinct?: MfaScalarFieldEnum | MfaScalarFieldEnum[]
  }

  /**
   * Mfa create
   */
  export type MfaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mfa.
     */
    data: XOR<MfaCreateInput, MfaUncheckedCreateInput>
  }

  /**
   * Mfa createMany
   */
  export type MfaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mfas.
     */
    data: MfaCreateManyInput | MfaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mfa update
   */
  export type MfaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mfa.
     */
    data: XOR<MfaUpdateInput, MfaUncheckedUpdateInput>
    /**
     * Choose, which Mfa to update.
     */
    where: MfaWhereUniqueInput
  }

  /**
   * Mfa updateMany
   */
  export type MfaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mfas.
     */
    data: XOR<MfaUpdateManyMutationInput, MfaUncheckedUpdateManyInput>
    /**
     * Filter which Mfas to update
     */
    where?: MfaWhereInput
    /**
     * Limit how many Mfas to update.
     */
    limit?: number
  }

  /**
   * Mfa upsert
   */
  export type MfaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mfa to update in case it exists.
     */
    where: MfaWhereUniqueInput
    /**
     * In case the Mfa found by the `where` argument doesn't exist, create a new Mfa with this data.
     */
    create: XOR<MfaCreateInput, MfaUncheckedCreateInput>
    /**
     * In case the Mfa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MfaUpdateInput, MfaUncheckedUpdateInput>
  }

  /**
   * Mfa delete
   */
  export type MfaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
    /**
     * Filter which Mfa to delete.
     */
    where: MfaWhereUniqueInput
  }

  /**
   * Mfa deleteMany
   */
  export type MfaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mfas to delete
     */
    where?: MfaWhereInput
    /**
     * Limit how many Mfas to delete.
     */
    limit?: number
  }

  /**
   * Mfa without action
   */
  export type MfaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mfa
     */
    select?: MfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mfa
     */
    omit?: MfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfaInclude<ExtArgs> | null
  }


  /**
   * Model Historico_Acesso_Normas
   */

  export type AggregateHistorico_Acesso_Normas = {
    _count: Historico_Acesso_NormasCountAggregateOutputType | null
    _avg: Historico_Acesso_NormasAvgAggregateOutputType | null
    _sum: Historico_Acesso_NormasSumAggregateOutputType | null
    _min: Historico_Acesso_NormasMinAggregateOutputType | null
    _max: Historico_Acesso_NormasMaxAggregateOutputType | null
  }

  export type Historico_Acesso_NormasAvgAggregateOutputType = {
    id_user: number | null
    id_norma: number | null
  }

  export type Historico_Acesso_NormasSumAggregateOutputType = {
    id_user: number | null
    id_norma: number | null
  }

  export type Historico_Acesso_NormasMinAggregateOutputType = {
    id_user: number | null
    id_norma: number | null
    data_acesso: Date | null
  }

  export type Historico_Acesso_NormasMaxAggregateOutputType = {
    id_user: number | null
    id_norma: number | null
    data_acesso: Date | null
  }

  export type Historico_Acesso_NormasCountAggregateOutputType = {
    id_user: number
    id_norma: number
    data_acesso: number
    _all: number
  }


  export type Historico_Acesso_NormasAvgAggregateInputType = {
    id_user?: true
    id_norma?: true
  }

  export type Historico_Acesso_NormasSumAggregateInputType = {
    id_user?: true
    id_norma?: true
  }

  export type Historico_Acesso_NormasMinAggregateInputType = {
    id_user?: true
    id_norma?: true
    data_acesso?: true
  }

  export type Historico_Acesso_NormasMaxAggregateInputType = {
    id_user?: true
    id_norma?: true
    data_acesso?: true
  }

  export type Historico_Acesso_NormasCountAggregateInputType = {
    id_user?: true
    id_norma?: true
    data_acesso?: true
    _all?: true
  }

  export type Historico_Acesso_NormasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico_Acesso_Normas to aggregate.
     */
    where?: Historico_Acesso_NormasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_Acesso_Normas to fetch.
     */
    orderBy?: Historico_Acesso_NormasOrderByWithRelationInput | Historico_Acesso_NormasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Historico_Acesso_NormasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_Acesso_Normas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_Acesso_Normas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historico_Acesso_Normas
    **/
    _count?: true | Historico_Acesso_NormasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historico_Acesso_NormasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historico_Acesso_NormasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historico_Acesso_NormasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historico_Acesso_NormasMaxAggregateInputType
  }

  export type GetHistorico_Acesso_NormasAggregateType<T extends Historico_Acesso_NormasAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico_Acesso_Normas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico_Acesso_Normas[P]>
      : GetScalarType<T[P], AggregateHistorico_Acesso_Normas[P]>
  }




  export type Historico_Acesso_NormasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historico_Acesso_NormasWhereInput
    orderBy?: Historico_Acesso_NormasOrderByWithAggregationInput | Historico_Acesso_NormasOrderByWithAggregationInput[]
    by: Historico_Acesso_NormasScalarFieldEnum[] | Historico_Acesso_NormasScalarFieldEnum
    having?: Historico_Acesso_NormasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historico_Acesso_NormasCountAggregateInputType | true
    _avg?: Historico_Acesso_NormasAvgAggregateInputType
    _sum?: Historico_Acesso_NormasSumAggregateInputType
    _min?: Historico_Acesso_NormasMinAggregateInputType
    _max?: Historico_Acesso_NormasMaxAggregateInputType
  }

  export type Historico_Acesso_NormasGroupByOutputType = {
    id_user: number
    id_norma: number
    data_acesso: Date
    _count: Historico_Acesso_NormasCountAggregateOutputType | null
    _avg: Historico_Acesso_NormasAvgAggregateOutputType | null
    _sum: Historico_Acesso_NormasSumAggregateOutputType | null
    _min: Historico_Acesso_NormasMinAggregateOutputType | null
    _max: Historico_Acesso_NormasMaxAggregateOutputType | null
  }

  type GetHistorico_Acesso_NormasGroupByPayload<T extends Historico_Acesso_NormasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historico_Acesso_NormasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historico_Acesso_NormasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historico_Acesso_NormasGroupByOutputType[P]>
            : GetScalarType<T[P], Historico_Acesso_NormasGroupByOutputType[P]>
        }
      >
    >


  export type Historico_Acesso_NormasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_norma?: boolean
    data_acesso?: boolean
    usuarios?: boolean | UsersDefaultArgs<ExtArgs>
    normas?: boolean | NormaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_Acesso_Normas"]>



  export type Historico_Acesso_NormasSelectScalar = {
    id_user?: boolean
    id_norma?: boolean
    data_acesso?: boolean
  }

  export type Historico_Acesso_NormasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_norma" | "data_acesso", ExtArgs["result"]["historico_Acesso_Normas"]>
  export type Historico_Acesso_NormasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UsersDefaultArgs<ExtArgs>
    normas?: boolean | NormaDefaultArgs<ExtArgs>
  }

  export type $Historico_Acesso_NormasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico_Acesso_Normas"
    objects: {
      usuarios: Prisma.$UsersPayload<ExtArgs>
      normas: Prisma.$NormaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      id_norma: number
      data_acesso: Date
    }, ExtArgs["result"]["historico_Acesso_Normas"]>
    composites: {}
  }

  type Historico_Acesso_NormasGetPayload<S extends boolean | null | undefined | Historico_Acesso_NormasDefaultArgs> = $Result.GetResult<Prisma.$Historico_Acesso_NormasPayload, S>

  type Historico_Acesso_NormasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Historico_Acesso_NormasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historico_Acesso_NormasCountAggregateInputType | true
    }

  export interface Historico_Acesso_NormasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico_Acesso_Normas'], meta: { name: 'Historico_Acesso_Normas' } }
    /**
     * Find zero or one Historico_Acesso_Normas that matches the filter.
     * @param {Historico_Acesso_NormasFindUniqueArgs} args - Arguments to find a Historico_Acesso_Normas
     * @example
     * // Get one Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Historico_Acesso_NormasFindUniqueArgs>(args: SelectSubset<T, Historico_Acesso_NormasFindUniqueArgs<ExtArgs>>): Prisma__Historico_Acesso_NormasClient<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico_Acesso_Normas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Historico_Acesso_NormasFindUniqueOrThrowArgs} args - Arguments to find a Historico_Acesso_Normas
     * @example
     * // Get one Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Historico_Acesso_NormasFindUniqueOrThrowArgs>(args: SelectSubset<T, Historico_Acesso_NormasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Historico_Acesso_NormasClient<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_Acesso_Normas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_Acesso_NormasFindFirstArgs} args - Arguments to find a Historico_Acesso_Normas
     * @example
     * // Get one Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Historico_Acesso_NormasFindFirstArgs>(args?: SelectSubset<T, Historico_Acesso_NormasFindFirstArgs<ExtArgs>>): Prisma__Historico_Acesso_NormasClient<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_Acesso_Normas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_Acesso_NormasFindFirstOrThrowArgs} args - Arguments to find a Historico_Acesso_Normas
     * @example
     * // Get one Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Historico_Acesso_NormasFindFirstOrThrowArgs>(args?: SelectSubset<T, Historico_Acesso_NormasFindFirstOrThrowArgs<ExtArgs>>): Prisma__Historico_Acesso_NormasClient<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historico_Acesso_Normas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_Acesso_NormasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.findMany()
     * 
     * // Get first 10 Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const historico_Acesso_NormasWithId_userOnly = await prisma.historico_Acesso_Normas.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends Historico_Acesso_NormasFindManyArgs>(args?: SelectSubset<T, Historico_Acesso_NormasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico_Acesso_Normas.
     * @param {Historico_Acesso_NormasCreateArgs} args - Arguments to create a Historico_Acesso_Normas.
     * @example
     * // Create one Historico_Acesso_Normas
     * const Historico_Acesso_Normas = await prisma.historico_Acesso_Normas.create({
     *   data: {
     *     // ... data to create a Historico_Acesso_Normas
     *   }
     * })
     * 
     */
    create<T extends Historico_Acesso_NormasCreateArgs>(args: SelectSubset<T, Historico_Acesso_NormasCreateArgs<ExtArgs>>): Prisma__Historico_Acesso_NormasClient<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historico_Acesso_Normas.
     * @param {Historico_Acesso_NormasCreateManyArgs} args - Arguments to create many Historico_Acesso_Normas.
     * @example
     * // Create many Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Historico_Acesso_NormasCreateManyArgs>(args?: SelectSubset<T, Historico_Acesso_NormasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historico_Acesso_Normas.
     * @param {Historico_Acesso_NormasDeleteArgs} args - Arguments to delete one Historico_Acesso_Normas.
     * @example
     * // Delete one Historico_Acesso_Normas
     * const Historico_Acesso_Normas = await prisma.historico_Acesso_Normas.delete({
     *   where: {
     *     // ... filter to delete one Historico_Acesso_Normas
     *   }
     * })
     * 
     */
    delete<T extends Historico_Acesso_NormasDeleteArgs>(args: SelectSubset<T, Historico_Acesso_NormasDeleteArgs<ExtArgs>>): Prisma__Historico_Acesso_NormasClient<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico_Acesso_Normas.
     * @param {Historico_Acesso_NormasUpdateArgs} args - Arguments to update one Historico_Acesso_Normas.
     * @example
     * // Update one Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Historico_Acesso_NormasUpdateArgs>(args: SelectSubset<T, Historico_Acesso_NormasUpdateArgs<ExtArgs>>): Prisma__Historico_Acesso_NormasClient<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historico_Acesso_Normas.
     * @param {Historico_Acesso_NormasDeleteManyArgs} args - Arguments to filter Historico_Acesso_Normas to delete.
     * @example
     * // Delete a few Historico_Acesso_Normas
     * const { count } = await prisma.historico_Acesso_Normas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Historico_Acesso_NormasDeleteManyArgs>(args?: SelectSubset<T, Historico_Acesso_NormasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_Acesso_Normas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_Acesso_NormasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Historico_Acesso_NormasUpdateManyArgs>(args: SelectSubset<T, Historico_Acesso_NormasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historico_Acesso_Normas.
     * @param {Historico_Acesso_NormasUpsertArgs} args - Arguments to update or create a Historico_Acesso_Normas.
     * @example
     * // Update or create a Historico_Acesso_Normas
     * const historico_Acesso_Normas = await prisma.historico_Acesso_Normas.upsert({
     *   create: {
     *     // ... data to create a Historico_Acesso_Normas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico_Acesso_Normas we want to update
     *   }
     * })
     */
    upsert<T extends Historico_Acesso_NormasUpsertArgs>(args: SelectSubset<T, Historico_Acesso_NormasUpsertArgs<ExtArgs>>): Prisma__Historico_Acesso_NormasClient<$Result.GetResult<Prisma.$Historico_Acesso_NormasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historico_Acesso_Normas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_Acesso_NormasCountArgs} args - Arguments to filter Historico_Acesso_Normas to count.
     * @example
     * // Count the number of Historico_Acesso_Normas
     * const count = await prisma.historico_Acesso_Normas.count({
     *   where: {
     *     // ... the filter for the Historico_Acesso_Normas we want to count
     *   }
     * })
    **/
    count<T extends Historico_Acesso_NormasCountArgs>(
      args?: Subset<T, Historico_Acesso_NormasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historico_Acesso_NormasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico_Acesso_Normas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_Acesso_NormasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historico_Acesso_NormasAggregateArgs>(args: Subset<T, Historico_Acesso_NormasAggregateArgs>): Prisma.PrismaPromise<GetHistorico_Acesso_NormasAggregateType<T>>

    /**
     * Group by Historico_Acesso_Normas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_Acesso_NormasGroupByArgs} args - Group by arguments.
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
      T extends Historico_Acesso_NormasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Historico_Acesso_NormasGroupByArgs['orderBy'] }
        : { orderBy?: Historico_Acesso_NormasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Historico_Acesso_NormasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorico_Acesso_NormasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico_Acesso_Normas model
   */
  readonly fields: Historico_Acesso_NormasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico_Acesso_Normas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Historico_Acesso_NormasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    normas<T extends NormaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormaDefaultArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Historico_Acesso_Normas model
   */
  interface Historico_Acesso_NormasFieldRefs {
    readonly id_user: FieldRef<"Historico_Acesso_Normas", 'Int'>
    readonly id_norma: FieldRef<"Historico_Acesso_Normas", 'Int'>
    readonly data_acesso: FieldRef<"Historico_Acesso_Normas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Historico_Acesso_Normas findUnique
   */
  export type Historico_Acesso_NormasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * Filter, which Historico_Acesso_Normas to fetch.
     */
    where: Historico_Acesso_NormasWhereUniqueInput
  }

  /**
   * Historico_Acesso_Normas findUniqueOrThrow
   */
  export type Historico_Acesso_NormasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * Filter, which Historico_Acesso_Normas to fetch.
     */
    where: Historico_Acesso_NormasWhereUniqueInput
  }

  /**
   * Historico_Acesso_Normas findFirst
   */
  export type Historico_Acesso_NormasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * Filter, which Historico_Acesso_Normas to fetch.
     */
    where?: Historico_Acesso_NormasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_Acesso_Normas to fetch.
     */
    orderBy?: Historico_Acesso_NormasOrderByWithRelationInput | Historico_Acesso_NormasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historico_Acesso_Normas.
     */
    cursor?: Historico_Acesso_NormasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_Acesso_Normas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_Acesso_Normas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historico_Acesso_Normas.
     */
    distinct?: Historico_Acesso_NormasScalarFieldEnum | Historico_Acesso_NormasScalarFieldEnum[]
  }

  /**
   * Historico_Acesso_Normas findFirstOrThrow
   */
  export type Historico_Acesso_NormasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * Filter, which Historico_Acesso_Normas to fetch.
     */
    where?: Historico_Acesso_NormasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_Acesso_Normas to fetch.
     */
    orderBy?: Historico_Acesso_NormasOrderByWithRelationInput | Historico_Acesso_NormasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historico_Acesso_Normas.
     */
    cursor?: Historico_Acesso_NormasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_Acesso_Normas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_Acesso_Normas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historico_Acesso_Normas.
     */
    distinct?: Historico_Acesso_NormasScalarFieldEnum | Historico_Acesso_NormasScalarFieldEnum[]
  }

  /**
   * Historico_Acesso_Normas findMany
   */
  export type Historico_Acesso_NormasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * Filter, which Historico_Acesso_Normas to fetch.
     */
    where?: Historico_Acesso_NormasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historico_Acesso_Normas to fetch.
     */
    orderBy?: Historico_Acesso_NormasOrderByWithRelationInput | Historico_Acesso_NormasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historico_Acesso_Normas.
     */
    cursor?: Historico_Acesso_NormasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historico_Acesso_Normas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historico_Acesso_Normas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historico_Acesso_Normas.
     */
    distinct?: Historico_Acesso_NormasScalarFieldEnum | Historico_Acesso_NormasScalarFieldEnum[]
  }

  /**
   * Historico_Acesso_Normas create
   */
  export type Historico_Acesso_NormasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico_Acesso_Normas.
     */
    data: XOR<Historico_Acesso_NormasCreateInput, Historico_Acesso_NormasUncheckedCreateInput>
  }

  /**
   * Historico_Acesso_Normas createMany
   */
  export type Historico_Acesso_NormasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historico_Acesso_Normas.
     */
    data: Historico_Acesso_NormasCreateManyInput | Historico_Acesso_NormasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico_Acesso_Normas update
   */
  export type Historico_Acesso_NormasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico_Acesso_Normas.
     */
    data: XOR<Historico_Acesso_NormasUpdateInput, Historico_Acesso_NormasUncheckedUpdateInput>
    /**
     * Choose, which Historico_Acesso_Normas to update.
     */
    where: Historico_Acesso_NormasWhereUniqueInput
  }

  /**
   * Historico_Acesso_Normas updateMany
   */
  export type Historico_Acesso_NormasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historico_Acesso_Normas.
     */
    data: XOR<Historico_Acesso_NormasUpdateManyMutationInput, Historico_Acesso_NormasUncheckedUpdateManyInput>
    /**
     * Filter which Historico_Acesso_Normas to update
     */
    where?: Historico_Acesso_NormasWhereInput
    /**
     * Limit how many Historico_Acesso_Normas to update.
     */
    limit?: number
  }

  /**
   * Historico_Acesso_Normas upsert
   */
  export type Historico_Acesso_NormasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico_Acesso_Normas to update in case it exists.
     */
    where: Historico_Acesso_NormasWhereUniqueInput
    /**
     * In case the Historico_Acesso_Normas found by the `where` argument doesn't exist, create a new Historico_Acesso_Normas with this data.
     */
    create: XOR<Historico_Acesso_NormasCreateInput, Historico_Acesso_NormasUncheckedCreateInput>
    /**
     * In case the Historico_Acesso_Normas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Historico_Acesso_NormasUpdateInput, Historico_Acesso_NormasUncheckedUpdateInput>
  }

  /**
   * Historico_Acesso_Normas delete
   */
  export type Historico_Acesso_NormasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
    /**
     * Filter which Historico_Acesso_Normas to delete.
     */
    where: Historico_Acesso_NormasWhereUniqueInput
  }

  /**
   * Historico_Acesso_Normas deleteMany
   */
  export type Historico_Acesso_NormasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico_Acesso_Normas to delete
     */
    where?: Historico_Acesso_NormasWhereInput
    /**
     * Limit how many Historico_Acesso_Normas to delete.
     */
    limit?: number
  }

  /**
   * Historico_Acesso_Normas without action
   */
  export type Historico_Acesso_NormasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico_Acesso_Normas
     */
    select?: Historico_Acesso_NormasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico_Acesso_Normas
     */
    omit?: Historico_Acesso_NormasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historico_Acesso_NormasInclude<ExtArgs> | null
  }


  /**
   * Model PedidosdeAlteracao
   */

  export type AggregatePedidosdeAlteracao = {
    _count: PedidosdeAlteracaoCountAggregateOutputType | null
    _avg: PedidosdeAlteracaoAvgAggregateOutputType | null
    _sum: PedidosdeAlteracaoSumAggregateOutputType | null
    _min: PedidosdeAlteracaoMinAggregateOutputType | null
    _max: PedidosdeAlteracaoMaxAggregateOutputType | null
  }

  export type PedidosdeAlteracaoAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_norma: number | null
  }

  export type PedidosdeAlteracaoSumAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_norma: number | null
  }

  export type PedidosdeAlteracaoMinAggregateOutputType = {
    id: number | null
    id_user: number | null
    acaoDealteracao: $Enums.AcaoDeAlteracao | null
    notaorNorma: $Enums.NotaOrNorma | null
    status: $Enums.Status | null
    data_pedido: Date | null
    id_norma: number | null
  }

  export type PedidosdeAlteracaoMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
    acaoDealteracao: $Enums.AcaoDeAlteracao | null
    notaorNorma: $Enums.NotaOrNorma | null
    status: $Enums.Status | null
    data_pedido: Date | null
    id_norma: number | null
  }

  export type PedidosdeAlteracaoCountAggregateOutputType = {
    id: number
    id_user: number
    alteracao: number
    acaoDealteracao: number
    notaorNorma: number
    status: number
    data_pedido: number
    id_norma: number
    _all: number
  }


  export type PedidosdeAlteracaoAvgAggregateInputType = {
    id?: true
    id_user?: true
    id_norma?: true
  }

  export type PedidosdeAlteracaoSumAggregateInputType = {
    id?: true
    id_user?: true
    id_norma?: true
  }

  export type PedidosdeAlteracaoMinAggregateInputType = {
    id?: true
    id_user?: true
    acaoDealteracao?: true
    notaorNorma?: true
    status?: true
    data_pedido?: true
    id_norma?: true
  }

  export type PedidosdeAlteracaoMaxAggregateInputType = {
    id?: true
    id_user?: true
    acaoDealteracao?: true
    notaorNorma?: true
    status?: true
    data_pedido?: true
    id_norma?: true
  }

  export type PedidosdeAlteracaoCountAggregateInputType = {
    id?: true
    id_user?: true
    alteracao?: true
    acaoDealteracao?: true
    notaorNorma?: true
    status?: true
    data_pedido?: true
    id_norma?: true
    _all?: true
  }

  export type PedidosdeAlteracaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidosdeAlteracao to aggregate.
     */
    where?: PedidosdeAlteracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidosdeAlteracaos to fetch.
     */
    orderBy?: PedidosdeAlteracaoOrderByWithRelationInput | PedidosdeAlteracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidosdeAlteracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidosdeAlteracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidosdeAlteracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidosdeAlteracaos
    **/
    _count?: true | PedidosdeAlteracaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidosdeAlteracaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidosdeAlteracaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidosdeAlteracaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidosdeAlteracaoMaxAggregateInputType
  }

  export type GetPedidosdeAlteracaoAggregateType<T extends PedidosdeAlteracaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidosdeAlteracao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidosdeAlteracao[P]>
      : GetScalarType<T[P], AggregatePedidosdeAlteracao[P]>
  }




  export type PedidosdeAlteracaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidosdeAlteracaoWhereInput
    orderBy?: PedidosdeAlteracaoOrderByWithAggregationInput | PedidosdeAlteracaoOrderByWithAggregationInput[]
    by: PedidosdeAlteracaoScalarFieldEnum[] | PedidosdeAlteracaoScalarFieldEnum
    having?: PedidosdeAlteracaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidosdeAlteracaoCountAggregateInputType | true
    _avg?: PedidosdeAlteracaoAvgAggregateInputType
    _sum?: PedidosdeAlteracaoSumAggregateInputType
    _min?: PedidosdeAlteracaoMinAggregateInputType
    _max?: PedidosdeAlteracaoMaxAggregateInputType
  }

  export type PedidosdeAlteracaoGroupByOutputType = {
    id: number
    id_user: number
    alteracao: JsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status: $Enums.Status
    data_pedido: Date
    id_norma: number | null
    _count: PedidosdeAlteracaoCountAggregateOutputType | null
    _avg: PedidosdeAlteracaoAvgAggregateOutputType | null
    _sum: PedidosdeAlteracaoSumAggregateOutputType | null
    _min: PedidosdeAlteracaoMinAggregateOutputType | null
    _max: PedidosdeAlteracaoMaxAggregateOutputType | null
  }

  type GetPedidosdeAlteracaoGroupByPayload<T extends PedidosdeAlteracaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidosdeAlteracaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidosdeAlteracaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidosdeAlteracaoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidosdeAlteracaoGroupByOutputType[P]>
        }
      >
    >


  export type PedidosdeAlteracaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    alteracao?: boolean
    acaoDealteracao?: boolean
    notaorNorma?: boolean
    status?: boolean
    data_pedido?: boolean
    id_norma?: boolean
    usuarios?: boolean | UsersDefaultArgs<ExtArgs>
    normas?: boolean | PedidosdeAlteracao$normasArgs<ExtArgs>
  }, ExtArgs["result"]["pedidosdeAlteracao"]>



  export type PedidosdeAlteracaoSelectScalar = {
    id?: boolean
    id_user?: boolean
    alteracao?: boolean
    acaoDealteracao?: boolean
    notaorNorma?: boolean
    status?: boolean
    data_pedido?: boolean
    id_norma?: boolean
  }

  export type PedidosdeAlteracaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "alteracao" | "acaoDealteracao" | "notaorNorma" | "status" | "data_pedido" | "id_norma", ExtArgs["result"]["pedidosdeAlteracao"]>
  export type PedidosdeAlteracaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UsersDefaultArgs<ExtArgs>
    normas?: boolean | PedidosdeAlteracao$normasArgs<ExtArgs>
  }

  export type $PedidosdeAlteracaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidosdeAlteracao"
    objects: {
      usuarios: Prisma.$UsersPayload<ExtArgs>
      normas: Prisma.$NormaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number
      alteracao: Prisma.JsonValue
      acaoDealteracao: $Enums.AcaoDeAlteracao
      notaorNorma: $Enums.NotaOrNorma
      status: $Enums.Status
      data_pedido: Date
      id_norma: number | null
    }, ExtArgs["result"]["pedidosdeAlteracao"]>
    composites: {}
  }

  type PedidosdeAlteracaoGetPayload<S extends boolean | null | undefined | PedidosdeAlteracaoDefaultArgs> = $Result.GetResult<Prisma.$PedidosdeAlteracaoPayload, S>

  type PedidosdeAlteracaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidosdeAlteracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidosdeAlteracaoCountAggregateInputType | true
    }

  export interface PedidosdeAlteracaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidosdeAlteracao'], meta: { name: 'PedidosdeAlteracao' } }
    /**
     * Find zero or one PedidosdeAlteracao that matches the filter.
     * @param {PedidosdeAlteracaoFindUniqueArgs} args - Arguments to find a PedidosdeAlteracao
     * @example
     * // Get one PedidosdeAlteracao
     * const pedidosdeAlteracao = await prisma.pedidosdeAlteracao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidosdeAlteracaoFindUniqueArgs>(args: SelectSubset<T, PedidosdeAlteracaoFindUniqueArgs<ExtArgs>>): Prisma__PedidosdeAlteracaoClient<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidosdeAlteracao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidosdeAlteracaoFindUniqueOrThrowArgs} args - Arguments to find a PedidosdeAlteracao
     * @example
     * // Get one PedidosdeAlteracao
     * const pedidosdeAlteracao = await prisma.pedidosdeAlteracao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidosdeAlteracaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidosdeAlteracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidosdeAlteracaoClient<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidosdeAlteracao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosdeAlteracaoFindFirstArgs} args - Arguments to find a PedidosdeAlteracao
     * @example
     * // Get one PedidosdeAlteracao
     * const pedidosdeAlteracao = await prisma.pedidosdeAlteracao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidosdeAlteracaoFindFirstArgs>(args?: SelectSubset<T, PedidosdeAlteracaoFindFirstArgs<ExtArgs>>): Prisma__PedidosdeAlteracaoClient<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidosdeAlteracao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosdeAlteracaoFindFirstOrThrowArgs} args - Arguments to find a PedidosdeAlteracao
     * @example
     * // Get one PedidosdeAlteracao
     * const pedidosdeAlteracao = await prisma.pedidosdeAlteracao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidosdeAlteracaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidosdeAlteracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidosdeAlteracaoClient<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidosdeAlteracaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosdeAlteracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidosdeAlteracaos
     * const pedidosdeAlteracaos = await prisma.pedidosdeAlteracao.findMany()
     * 
     * // Get first 10 PedidosdeAlteracaos
     * const pedidosdeAlteracaos = await prisma.pedidosdeAlteracao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidosdeAlteracaoWithIdOnly = await prisma.pedidosdeAlteracao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidosdeAlteracaoFindManyArgs>(args?: SelectSubset<T, PedidosdeAlteracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidosdeAlteracao.
     * @param {PedidosdeAlteracaoCreateArgs} args - Arguments to create a PedidosdeAlteracao.
     * @example
     * // Create one PedidosdeAlteracao
     * const PedidosdeAlteracao = await prisma.pedidosdeAlteracao.create({
     *   data: {
     *     // ... data to create a PedidosdeAlteracao
     *   }
     * })
     * 
     */
    create<T extends PedidosdeAlteracaoCreateArgs>(args: SelectSubset<T, PedidosdeAlteracaoCreateArgs<ExtArgs>>): Prisma__PedidosdeAlteracaoClient<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidosdeAlteracaos.
     * @param {PedidosdeAlteracaoCreateManyArgs} args - Arguments to create many PedidosdeAlteracaos.
     * @example
     * // Create many PedidosdeAlteracaos
     * const pedidosdeAlteracao = await prisma.pedidosdeAlteracao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidosdeAlteracaoCreateManyArgs>(args?: SelectSubset<T, PedidosdeAlteracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PedidosdeAlteracao.
     * @param {PedidosdeAlteracaoDeleteArgs} args - Arguments to delete one PedidosdeAlteracao.
     * @example
     * // Delete one PedidosdeAlteracao
     * const PedidosdeAlteracao = await prisma.pedidosdeAlteracao.delete({
     *   where: {
     *     // ... filter to delete one PedidosdeAlteracao
     *   }
     * })
     * 
     */
    delete<T extends PedidosdeAlteracaoDeleteArgs>(args: SelectSubset<T, PedidosdeAlteracaoDeleteArgs<ExtArgs>>): Prisma__PedidosdeAlteracaoClient<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidosdeAlteracao.
     * @param {PedidosdeAlteracaoUpdateArgs} args - Arguments to update one PedidosdeAlteracao.
     * @example
     * // Update one PedidosdeAlteracao
     * const pedidosdeAlteracao = await prisma.pedidosdeAlteracao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidosdeAlteracaoUpdateArgs>(args: SelectSubset<T, PedidosdeAlteracaoUpdateArgs<ExtArgs>>): Prisma__PedidosdeAlteracaoClient<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidosdeAlteracaos.
     * @param {PedidosdeAlteracaoDeleteManyArgs} args - Arguments to filter PedidosdeAlteracaos to delete.
     * @example
     * // Delete a few PedidosdeAlteracaos
     * const { count } = await prisma.pedidosdeAlteracao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidosdeAlteracaoDeleteManyArgs>(args?: SelectSubset<T, PedidosdeAlteracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidosdeAlteracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosdeAlteracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidosdeAlteracaos
     * const pedidosdeAlteracao = await prisma.pedidosdeAlteracao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidosdeAlteracaoUpdateManyArgs>(args: SelectSubset<T, PedidosdeAlteracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PedidosdeAlteracao.
     * @param {PedidosdeAlteracaoUpsertArgs} args - Arguments to update or create a PedidosdeAlteracao.
     * @example
     * // Update or create a PedidosdeAlteracao
     * const pedidosdeAlteracao = await prisma.pedidosdeAlteracao.upsert({
     *   create: {
     *     // ... data to create a PedidosdeAlteracao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidosdeAlteracao we want to update
     *   }
     * })
     */
    upsert<T extends PedidosdeAlteracaoUpsertArgs>(args: SelectSubset<T, PedidosdeAlteracaoUpsertArgs<ExtArgs>>): Prisma__PedidosdeAlteracaoClient<$Result.GetResult<Prisma.$PedidosdeAlteracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidosdeAlteracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosdeAlteracaoCountArgs} args - Arguments to filter PedidosdeAlteracaos to count.
     * @example
     * // Count the number of PedidosdeAlteracaos
     * const count = await prisma.pedidosdeAlteracao.count({
     *   where: {
     *     // ... the filter for the PedidosdeAlteracaos we want to count
     *   }
     * })
    **/
    count<T extends PedidosdeAlteracaoCountArgs>(
      args?: Subset<T, PedidosdeAlteracaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidosdeAlteracaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidosdeAlteracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosdeAlteracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidosdeAlteracaoAggregateArgs>(args: Subset<T, PedidosdeAlteracaoAggregateArgs>): Prisma.PrismaPromise<GetPedidosdeAlteracaoAggregateType<T>>

    /**
     * Group by PedidosdeAlteracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosdeAlteracaoGroupByArgs} args - Group by arguments.
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
      T extends PedidosdeAlteracaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidosdeAlteracaoGroupByArgs['orderBy'] }
        : { orderBy?: PedidosdeAlteracaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidosdeAlteracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidosdeAlteracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidosdeAlteracao model
   */
  readonly fields: PedidosdeAlteracaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidosdeAlteracao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidosdeAlteracaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    normas<T extends PedidosdeAlteracao$normasArgs<ExtArgs> = {}>(args?: Subset<T, PedidosdeAlteracao$normasArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PedidosdeAlteracao model
   */
  interface PedidosdeAlteracaoFieldRefs {
    readonly id: FieldRef<"PedidosdeAlteracao", 'Int'>
    readonly id_user: FieldRef<"PedidosdeAlteracao", 'Int'>
    readonly alteracao: FieldRef<"PedidosdeAlteracao", 'Json'>
    readonly acaoDealteracao: FieldRef<"PedidosdeAlteracao", 'AcaoDeAlteracao'>
    readonly notaorNorma: FieldRef<"PedidosdeAlteracao", 'NotaOrNorma'>
    readonly status: FieldRef<"PedidosdeAlteracao", 'Status'>
    readonly data_pedido: FieldRef<"PedidosdeAlteracao", 'DateTime'>
    readonly id_norma: FieldRef<"PedidosdeAlteracao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PedidosdeAlteracao findUnique
   */
  export type PedidosdeAlteracaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * Filter, which PedidosdeAlteracao to fetch.
     */
    where: PedidosdeAlteracaoWhereUniqueInput
  }

  /**
   * PedidosdeAlteracao findUniqueOrThrow
   */
  export type PedidosdeAlteracaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * Filter, which PedidosdeAlteracao to fetch.
     */
    where: PedidosdeAlteracaoWhereUniqueInput
  }

  /**
   * PedidosdeAlteracao findFirst
   */
  export type PedidosdeAlteracaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * Filter, which PedidosdeAlteracao to fetch.
     */
    where?: PedidosdeAlteracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidosdeAlteracaos to fetch.
     */
    orderBy?: PedidosdeAlteracaoOrderByWithRelationInput | PedidosdeAlteracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidosdeAlteracaos.
     */
    cursor?: PedidosdeAlteracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidosdeAlteracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidosdeAlteracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidosdeAlteracaos.
     */
    distinct?: PedidosdeAlteracaoScalarFieldEnum | PedidosdeAlteracaoScalarFieldEnum[]
  }

  /**
   * PedidosdeAlteracao findFirstOrThrow
   */
  export type PedidosdeAlteracaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * Filter, which PedidosdeAlteracao to fetch.
     */
    where?: PedidosdeAlteracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidosdeAlteracaos to fetch.
     */
    orderBy?: PedidosdeAlteracaoOrderByWithRelationInput | PedidosdeAlteracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidosdeAlteracaos.
     */
    cursor?: PedidosdeAlteracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidosdeAlteracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidosdeAlteracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidosdeAlteracaos.
     */
    distinct?: PedidosdeAlteracaoScalarFieldEnum | PedidosdeAlteracaoScalarFieldEnum[]
  }

  /**
   * PedidosdeAlteracao findMany
   */
  export type PedidosdeAlteracaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * Filter, which PedidosdeAlteracaos to fetch.
     */
    where?: PedidosdeAlteracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidosdeAlteracaos to fetch.
     */
    orderBy?: PedidosdeAlteracaoOrderByWithRelationInput | PedidosdeAlteracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidosdeAlteracaos.
     */
    cursor?: PedidosdeAlteracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidosdeAlteracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidosdeAlteracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidosdeAlteracaos.
     */
    distinct?: PedidosdeAlteracaoScalarFieldEnum | PedidosdeAlteracaoScalarFieldEnum[]
  }

  /**
   * PedidosdeAlteracao create
   */
  export type PedidosdeAlteracaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidosdeAlteracao.
     */
    data: XOR<PedidosdeAlteracaoCreateInput, PedidosdeAlteracaoUncheckedCreateInput>
  }

  /**
   * PedidosdeAlteracao createMany
   */
  export type PedidosdeAlteracaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidosdeAlteracaos.
     */
    data: PedidosdeAlteracaoCreateManyInput | PedidosdeAlteracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidosdeAlteracao update
   */
  export type PedidosdeAlteracaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidosdeAlteracao.
     */
    data: XOR<PedidosdeAlteracaoUpdateInput, PedidosdeAlteracaoUncheckedUpdateInput>
    /**
     * Choose, which PedidosdeAlteracao to update.
     */
    where: PedidosdeAlteracaoWhereUniqueInput
  }

  /**
   * PedidosdeAlteracao updateMany
   */
  export type PedidosdeAlteracaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidosdeAlteracaos.
     */
    data: XOR<PedidosdeAlteracaoUpdateManyMutationInput, PedidosdeAlteracaoUncheckedUpdateManyInput>
    /**
     * Filter which PedidosdeAlteracaos to update
     */
    where?: PedidosdeAlteracaoWhereInput
    /**
     * Limit how many PedidosdeAlteracaos to update.
     */
    limit?: number
  }

  /**
   * PedidosdeAlteracao upsert
   */
  export type PedidosdeAlteracaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidosdeAlteracao to update in case it exists.
     */
    where: PedidosdeAlteracaoWhereUniqueInput
    /**
     * In case the PedidosdeAlteracao found by the `where` argument doesn't exist, create a new PedidosdeAlteracao with this data.
     */
    create: XOR<PedidosdeAlteracaoCreateInput, PedidosdeAlteracaoUncheckedCreateInput>
    /**
     * In case the PedidosdeAlteracao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidosdeAlteracaoUpdateInput, PedidosdeAlteracaoUncheckedUpdateInput>
  }

  /**
   * PedidosdeAlteracao delete
   */
  export type PedidosdeAlteracaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
    /**
     * Filter which PedidosdeAlteracao to delete.
     */
    where: PedidosdeAlteracaoWhereUniqueInput
  }

  /**
   * PedidosdeAlteracao deleteMany
   */
  export type PedidosdeAlteracaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidosdeAlteracaos to delete
     */
    where?: PedidosdeAlteracaoWhereInput
    /**
     * Limit how many PedidosdeAlteracaos to delete.
     */
    limit?: number
  }

  /**
   * PedidosdeAlteracao.normas
   */
  export type PedidosdeAlteracao$normasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Norma
     */
    select?: NormaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Norma
     */
    omit?: NormaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NormaInclude<ExtArgs> | null
    where?: NormaWhereInput
  }

  /**
   * PedidosdeAlteracao without action
   */
  export type PedidosdeAlteracaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosdeAlteracao
     */
    select?: PedidosdeAlteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosdeAlteracao
     */
    omit?: PedidosdeAlteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosdeAlteracaoInclude<ExtArgs> | null
  }


  /**
   * Model Favoritos
   */

  export type AggregateFavoritos = {
    _count: FavoritosCountAggregateOutputType | null
    _avg: FavoritosAvgAggregateOutputType | null
    _sum: FavoritosSumAggregateOutputType | null
    _min: FavoritosMinAggregateOutputType | null
    _max: FavoritosMaxAggregateOutputType | null
  }

  export type FavoritosAvgAggregateOutputType = {
    id_user: number | null
    id_norma: number | null
  }

  export type FavoritosSumAggregateOutputType = {
    id_user: number | null
    id_norma: number | null
  }

  export type FavoritosMinAggregateOutputType = {
    id_user: number | null
    id_norma: number | null
    data_criacao: Date | null
  }

  export type FavoritosMaxAggregateOutputType = {
    id_user: number | null
    id_norma: number | null
    data_criacao: Date | null
  }

  export type FavoritosCountAggregateOutputType = {
    id_user: number
    id_norma: number
    data_criacao: number
    _all: number
  }


  export type FavoritosAvgAggregateInputType = {
    id_user?: true
    id_norma?: true
  }

  export type FavoritosSumAggregateInputType = {
    id_user?: true
    id_norma?: true
  }

  export type FavoritosMinAggregateInputType = {
    id_user?: true
    id_norma?: true
    data_criacao?: true
  }

  export type FavoritosMaxAggregateInputType = {
    id_user?: true
    id_norma?: true
    data_criacao?: true
  }

  export type FavoritosCountAggregateInputType = {
    id_user?: true
    id_norma?: true
    data_criacao?: true
    _all?: true
  }

  export type FavoritosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to aggregate.
     */
    where?: FavoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritosOrderByWithRelationInput | FavoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritosMaxAggregateInputType
  }

  export type GetFavoritosAggregateType<T extends FavoritosAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoritos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoritos[P]>
      : GetScalarType<T[P], AggregateFavoritos[P]>
  }




  export type FavoritosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritosWhereInput
    orderBy?: FavoritosOrderByWithAggregationInput | FavoritosOrderByWithAggregationInput[]
    by: FavoritosScalarFieldEnum[] | FavoritosScalarFieldEnum
    having?: FavoritosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritosCountAggregateInputType | true
    _avg?: FavoritosAvgAggregateInputType
    _sum?: FavoritosSumAggregateInputType
    _min?: FavoritosMinAggregateInputType
    _max?: FavoritosMaxAggregateInputType
  }

  export type FavoritosGroupByOutputType = {
    id_user: number
    id_norma: number
    data_criacao: Date
    _count: FavoritosCountAggregateOutputType | null
    _avg: FavoritosAvgAggregateOutputType | null
    _sum: FavoritosSumAggregateOutputType | null
    _min: FavoritosMinAggregateOutputType | null
    _max: FavoritosMaxAggregateOutputType | null
  }

  type GetFavoritosGroupByPayload<T extends FavoritosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritosGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritosGroupByOutputType[P]>
        }
      >
    >


  export type FavoritosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_norma?: boolean
    data_criacao?: boolean
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
    norma?: boolean | NormaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoritos"]>



  export type FavoritosSelectScalar = {
    id_user?: boolean
    id_norma?: boolean
    data_criacao?: boolean
  }

  export type FavoritosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_norma" | "data_criacao", ExtArgs["result"]["favoritos"]>
  export type FavoritosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsersDefaultArgs<ExtArgs>
    norma?: boolean | NormaDefaultArgs<ExtArgs>
  }

  export type $FavoritosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favoritos"
    objects: {
      usuario: Prisma.$UsersPayload<ExtArgs>
      norma: Prisma.$NormaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      id_norma: number
      data_criacao: Date
    }, ExtArgs["result"]["favoritos"]>
    composites: {}
  }

  type FavoritosGetPayload<S extends boolean | null | undefined | FavoritosDefaultArgs> = $Result.GetResult<Prisma.$FavoritosPayload, S>

  type FavoritosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritosCountAggregateInputType | true
    }

  export interface FavoritosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favoritos'], meta: { name: 'Favoritos' } }
    /**
     * Find zero or one Favoritos that matches the filter.
     * @param {FavoritosFindUniqueArgs} args - Arguments to find a Favoritos
     * @example
     * // Get one Favoritos
     * const favoritos = await prisma.favoritos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritosFindUniqueArgs>(args: SelectSubset<T, FavoritosFindUniqueArgs<ExtArgs>>): Prisma__FavoritosClient<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favoritos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritosFindUniqueOrThrowArgs} args - Arguments to find a Favoritos
     * @example
     * // Get one Favoritos
     * const favoritos = await prisma.favoritos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritosFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritosClient<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritosFindFirstArgs} args - Arguments to find a Favoritos
     * @example
     * // Get one Favoritos
     * const favoritos = await prisma.favoritos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritosFindFirstArgs>(args?: SelectSubset<T, FavoritosFindFirstArgs<ExtArgs>>): Prisma__FavoritosClient<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favoritos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritosFindFirstOrThrowArgs} args - Arguments to find a Favoritos
     * @example
     * // Get one Favoritos
     * const favoritos = await prisma.favoritos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritosFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritosFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritosClient<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favoritos.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favoritos.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const favoritosWithId_userOnly = await prisma.favoritos.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends FavoritosFindManyArgs>(args?: SelectSubset<T, FavoritosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favoritos.
     * @param {FavoritosCreateArgs} args - Arguments to create a Favoritos.
     * @example
     * // Create one Favoritos
     * const Favoritos = await prisma.favoritos.create({
     *   data: {
     *     // ... data to create a Favoritos
     *   }
     * })
     * 
     */
    create<T extends FavoritosCreateArgs>(args: SelectSubset<T, FavoritosCreateArgs<ExtArgs>>): Prisma__FavoritosClient<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritosCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favoritos = await prisma.favoritos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritosCreateManyArgs>(args?: SelectSubset<T, FavoritosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favoritos.
     * @param {FavoritosDeleteArgs} args - Arguments to delete one Favoritos.
     * @example
     * // Delete one Favoritos
     * const Favoritos = await prisma.favoritos.delete({
     *   where: {
     *     // ... filter to delete one Favoritos
     *   }
     * })
     * 
     */
    delete<T extends FavoritosDeleteArgs>(args: SelectSubset<T, FavoritosDeleteArgs<ExtArgs>>): Prisma__FavoritosClient<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favoritos.
     * @param {FavoritosUpdateArgs} args - Arguments to update one Favoritos.
     * @example
     * // Update one Favoritos
     * const favoritos = await prisma.favoritos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritosUpdateArgs>(args: SelectSubset<T, FavoritosUpdateArgs<ExtArgs>>): Prisma__FavoritosClient<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritosDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favoritos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritosDeleteManyArgs>(args?: SelectSubset<T, FavoritosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favoritos = await prisma.favoritos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritosUpdateManyArgs>(args: SelectSubset<T, FavoritosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favoritos.
     * @param {FavoritosUpsertArgs} args - Arguments to update or create a Favoritos.
     * @example
     * // Update or create a Favoritos
     * const favoritos = await prisma.favoritos.upsert({
     *   create: {
     *     // ... data to create a Favoritos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favoritos we want to update
     *   }
     * })
     */
    upsert<T extends FavoritosUpsertArgs>(args: SelectSubset<T, FavoritosUpsertArgs<ExtArgs>>): Prisma__FavoritosClient<$Result.GetResult<Prisma.$FavoritosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritosCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favoritos.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritosCountArgs>(
      args?: Subset<T, FavoritosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritosAggregateArgs>(args: Subset<T, FavoritosAggregateArgs>): Prisma.PrismaPromise<GetFavoritosAggregateType<T>>

    /**
     * Group by Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritosGroupByArgs} args - Group by arguments.
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
      T extends FavoritosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritosGroupByArgs['orderBy'] }
        : { orderBy?: FavoritosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favoritos model
   */
  readonly fields: FavoritosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favoritos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    norma<T extends NormaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NormaDefaultArgs<ExtArgs>>): Prisma__NormaClient<$Result.GetResult<Prisma.$NormaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favoritos model
   */
  interface FavoritosFieldRefs {
    readonly id_user: FieldRef<"Favoritos", 'Int'>
    readonly id_norma: FieldRef<"Favoritos", 'Int'>
    readonly data_criacao: FieldRef<"Favoritos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favoritos findUnique
   */
  export type FavoritosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where: FavoritosWhereUniqueInput
  }

  /**
   * Favoritos findUniqueOrThrow
   */
  export type FavoritosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where: FavoritosWhereUniqueInput
  }

  /**
   * Favoritos findFirst
   */
  export type FavoritosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritosOrderByWithRelationInput | FavoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * Favoritos findFirstOrThrow
   */
  export type FavoritosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritosOrderByWithRelationInput | FavoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * Favoritos findMany
   */
  export type FavoritosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritosOrderByWithRelationInput | FavoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * Favoritos create
   */
  export type FavoritosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * The data needed to create a Favoritos.
     */
    data: XOR<FavoritosCreateInput, FavoritosUncheckedCreateInput>
  }

  /**
   * Favoritos createMany
   */
  export type FavoritosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritosCreateManyInput | FavoritosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favoritos update
   */
  export type FavoritosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * The data needed to update a Favoritos.
     */
    data: XOR<FavoritosUpdateInput, FavoritosUncheckedUpdateInput>
    /**
     * Choose, which Favoritos to update.
     */
    where: FavoritosWhereUniqueInput
  }

  /**
   * Favoritos updateMany
   */
  export type FavoritosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritosUpdateManyMutationInput, FavoritosUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritosWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favoritos upsert
   */
  export type FavoritosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * The filter to search for the Favoritos to update in case it exists.
     */
    where: FavoritosWhereUniqueInput
    /**
     * In case the Favoritos found by the `where` argument doesn't exist, create a new Favoritos with this data.
     */
    create: XOR<FavoritosCreateInput, FavoritosUncheckedCreateInput>
    /**
     * In case the Favoritos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritosUpdateInput, FavoritosUncheckedUpdateInput>
  }

  /**
   * Favoritos delete
   */
  export type FavoritosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
    /**
     * Filter which Favoritos to delete.
     */
    where: FavoritosWhereUniqueInput
  }

  /**
   * Favoritos deleteMany
   */
  export type FavoritosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritosWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favoritos without action
   */
  export type FavoritosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favoritos
     */
    select?: FavoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favoritos
     */
    omit?: FavoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritosInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id_user: 'id_user',
    user_name: 'user_name',
    email: 'email',
    user_senha_hash: 'user_senha_hash',
    data_criacao: 'data_criacao',
    nivel_user: 'nivel_user'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OrgaosScalarFieldEnum: {
    org_id: 'org_id',
    org_desc: 'org_desc',
    org_sigla: 'org_sigla',
    adm_criador: 'adm_criador'
  };

  export type OrgaosScalarFieldEnum = (typeof OrgaosScalarFieldEnum)[keyof typeof OrgaosScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    cat_id: 'cat_id',
    cat_nome: 'cat_nome',
    adm_criador: 'adm_criador',
    data_criacao: 'data_criacao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const NormaScalarFieldEnum: {
    id_norm: 'id_norm',
    norm_titulo: 'norm_titulo',
    norm_desc: 'norm_desc',
    org_criador: 'org_criador',
    adm_criador: 'adm_criador',
    emissao: 'emissao',
    norm_codigo: 'norm_codigo',
    data_criacao: 'data_criacao',
    data_update: 'data_update',
    pdf_nome_original: 'pdf_nome_original',
    pdf_caminho: 'pdf_caminho'
  };

  export type NormaScalarFieldEnum = (typeof NormaScalarFieldEnum)[keyof typeof NormaScalarFieldEnum]


  export const NotasScalarFieldEnum: {
    id_not: 'id_not',
    not_titulo: 'not_titulo',
    not_IT: 'not_IT',
    not_AB: 'not_AB',
    not_Pa: 'not_Pa',
    norm_criador: 'norm_criador',
    adm_criador: 'adm_criador',
    data_criacao: 'data_criacao'
  };

  export type NotasScalarFieldEnum = (typeof NotasScalarFieldEnum)[keyof typeof NotasScalarFieldEnum]


  export const Norma_CategoriaScalarFieldEnum: {
    id_norma: 'id_norma',
    id_cat: 'id_cat'
  };

  export type Norma_CategoriaScalarFieldEnum = (typeof Norma_CategoriaScalarFieldEnum)[keyof typeof Norma_CategoriaScalarFieldEnum]


  export const Normas_ReferenciadasScalarFieldEnum: {
    norma_origem_id: 'norma_origem_id',
    norma_destino_id: 'norma_destino_id'
  };

  export type Normas_ReferenciadasScalarFieldEnum = (typeof Normas_ReferenciadasScalarFieldEnum)[keyof typeof Normas_ReferenciadasScalarFieldEnum]


  export const Normas_VersoesScalarFieldEnum: {
    id_versao: 'id_versao',
    norma_id: 'norma_id',
    norma_codigo: 'norma_codigo',
    norm_titulo: 'norm_titulo',
    norm_dec: 'norm_dec',
    emissao: 'emissao',
    criado_em: 'criado_em',
    criado_em_novo: 'criado_em_novo',
    pdf_nome_original: 'pdf_nome_original',
    pdf_caminho: 'pdf_caminho'
  };

  export type Normas_VersoesScalarFieldEnum = (typeof Normas_VersoesScalarFieldEnum)[keyof typeof Normas_VersoesScalarFieldEnum]


  export const MfaScalarFieldEnum: {
    id: 'id',
    user_id_FK: 'user_id_FK',
    cod_mfa: 'cod_mfa',
    cod_data_cricao: 'cod_data_cricao'
  };

  export type MfaScalarFieldEnum = (typeof MfaScalarFieldEnum)[keyof typeof MfaScalarFieldEnum]


  export const Historico_Acesso_NormasScalarFieldEnum: {
    id_user: 'id_user',
    id_norma: 'id_norma',
    data_acesso: 'data_acesso'
  };

  export type Historico_Acesso_NormasScalarFieldEnum = (typeof Historico_Acesso_NormasScalarFieldEnum)[keyof typeof Historico_Acesso_NormasScalarFieldEnum]


  export const PedidosdeAlteracaoScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    alteracao: 'alteracao',
    acaoDealteracao: 'acaoDealteracao',
    notaorNorma: 'notaorNorma',
    status: 'status',
    data_pedido: 'data_pedido',
    id_norma: 'id_norma'
  };

  export type PedidosdeAlteracaoScalarFieldEnum = (typeof PedidosdeAlteracaoScalarFieldEnum)[keyof typeof PedidosdeAlteracaoScalarFieldEnum]


  export const FavoritosScalarFieldEnum: {
    id_user: 'id_user',
    id_norma: 'id_norma',
    data_criacao: 'data_criacao'
  };

  export type FavoritosScalarFieldEnum = (typeof FavoritosScalarFieldEnum)[keyof typeof FavoritosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UsersOrderByRelevanceFieldEnum: {
    user_name: 'user_name',
    email: 'email',
    user_senha_hash: 'user_senha_hash'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const OrgaosOrderByRelevanceFieldEnum: {
    org_desc: 'org_desc',
    org_sigla: 'org_sigla'
  };

  export type OrgaosOrderByRelevanceFieldEnum = (typeof OrgaosOrderByRelevanceFieldEnum)[keyof typeof OrgaosOrderByRelevanceFieldEnum]


  export const CategoriaOrderByRelevanceFieldEnum: {
    cat_nome: 'cat_nome'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const NormaOrderByRelevanceFieldEnum: {
    norm_titulo: 'norm_titulo',
    norm_desc: 'norm_desc',
    norm_codigo: 'norm_codigo',
    pdf_nome_original: 'pdf_nome_original',
    pdf_caminho: 'pdf_caminho'
  };

  export type NormaOrderByRelevanceFieldEnum = (typeof NormaOrderByRelevanceFieldEnum)[keyof typeof NormaOrderByRelevanceFieldEnum]


  export const NotasOrderByRelevanceFieldEnum: {
    not_titulo: 'not_titulo',
    not_IT: 'not_IT',
    not_AB: 'not_AB',
    not_Pa: 'not_Pa'
  };

  export type NotasOrderByRelevanceFieldEnum = (typeof NotasOrderByRelevanceFieldEnum)[keyof typeof NotasOrderByRelevanceFieldEnum]


  export const Normas_VersoesOrderByRelevanceFieldEnum: {
    norma_codigo: 'norma_codigo',
    norm_titulo: 'norm_titulo',
    norm_dec: 'norm_dec',
    pdf_nome_original: 'pdf_nome_original',
    pdf_caminho: 'pdf_caminho'
  };

  export type Normas_VersoesOrderByRelevanceFieldEnum = (typeof Normas_VersoesOrderByRelevanceFieldEnum)[keyof typeof Normas_VersoesOrderByRelevanceFieldEnum]


  export const MfaOrderByRelevanceFieldEnum: {
    cod_mfa: 'cod_mfa'
  };

  export type MfaOrderByRelevanceFieldEnum = (typeof MfaOrderByRelevanceFieldEnum)[keyof typeof MfaOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'NivelUser'
   */
  export type EnumNivelUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NivelUser'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AcaoDeAlteracao'
   */
  export type EnumAcaoDeAlteracaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcaoDeAlteracao'>
    


  /**
   * Reference to a field of type 'NotaOrNorma'
   */
  export type EnumNotaOrNormaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotaOrNorma'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id_user?: IntFilter<"Users"> | number
    user_name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    user_senha_hash?: StringFilter<"Users"> | string
    data_criacao?: DateTimeFilter<"Users"> | Date | string
    nivel_user?: EnumNivelUserFilter<"Users"> | $Enums.NivelUser
    orgaos?: OrgaosListRelationFilter
    categoria?: CategoriaListRelationFilter
    normas?: NormaListRelationFilter
    notas?: NotasListRelationFilter
    mfa?: MfaListRelationFilter
    favoritos?: FavoritosListRelationFilter
    historicoAcessoNormas?: Historico_Acesso_NormasListRelationFilter
    pedidos?: PedidosdeAlteracaoListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id_user?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    user_senha_hash?: SortOrder
    data_criacao?: SortOrder
    nivel_user?: SortOrder
    orgaos?: OrgaosOrderByRelationAggregateInput
    categoria?: CategoriaOrderByRelationAggregateInput
    normas?: NormaOrderByRelationAggregateInput
    notas?: NotasOrderByRelationAggregateInput
    mfa?: MfaOrderByRelationAggregateInput
    favoritos?: FavoritosOrderByRelationAggregateInput
    historicoAcessoNormas?: Historico_Acesso_NormasOrderByRelationAggregateInput
    pedidos?: PedidosdeAlteracaoOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_name?: StringFilter<"Users"> | string
    user_senha_hash?: StringFilter<"Users"> | string
    data_criacao?: DateTimeFilter<"Users"> | Date | string
    nivel_user?: EnumNivelUserFilter<"Users"> | $Enums.NivelUser
    orgaos?: OrgaosListRelationFilter
    categoria?: CategoriaListRelationFilter
    normas?: NormaListRelationFilter
    notas?: NotasListRelationFilter
    mfa?: MfaListRelationFilter
    favoritos?: FavoritosListRelationFilter
    historicoAcessoNormas?: Historico_Acesso_NormasListRelationFilter
    pedidos?: PedidosdeAlteracaoListRelationFilter
  }, "id_user" | "email">

  export type UsersOrderByWithAggregationInput = {
    id_user?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    user_senha_hash?: SortOrder
    data_criacao?: SortOrder
    nivel_user?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"Users"> | number
    user_name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    user_senha_hash?: StringWithAggregatesFilter<"Users"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    nivel_user?: EnumNivelUserWithAggregatesFilter<"Users"> | $Enums.NivelUser
  }

  export type OrgaosWhereInput = {
    AND?: OrgaosWhereInput | OrgaosWhereInput[]
    OR?: OrgaosWhereInput[]
    NOT?: OrgaosWhereInput | OrgaosWhereInput[]
    org_id?: IntFilter<"Orgaos"> | number
    org_desc?: StringFilter<"Orgaos"> | string
    org_sigla?: StringFilter<"Orgaos"> | string
    adm_criador?: IntNullableFilter<"Orgaos"> | number | null
    normas?: NormaListRelationFilter
    usuarios?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type OrgaosOrderByWithRelationInput = {
    org_id?: SortOrder
    org_desc?: SortOrder
    org_sigla?: SortOrder
    adm_criador?: SortOrderInput | SortOrder
    normas?: NormaOrderByRelationAggregateInput
    usuarios?: UsersOrderByWithRelationInput
    _relevance?: OrgaosOrderByRelevanceInput
  }

  export type OrgaosWhereUniqueInput = Prisma.AtLeast<{
    org_id?: number
    org_desc?: string
    AND?: OrgaosWhereInput | OrgaosWhereInput[]
    OR?: OrgaosWhereInput[]
    NOT?: OrgaosWhereInput | OrgaosWhereInput[]
    org_sigla?: StringFilter<"Orgaos"> | string
    adm_criador?: IntNullableFilter<"Orgaos"> | number | null
    normas?: NormaListRelationFilter
    usuarios?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "org_id" | "org_desc">

  export type OrgaosOrderByWithAggregationInput = {
    org_id?: SortOrder
    org_desc?: SortOrder
    org_sigla?: SortOrder
    adm_criador?: SortOrderInput | SortOrder
    _count?: OrgaosCountOrderByAggregateInput
    _avg?: OrgaosAvgOrderByAggregateInput
    _max?: OrgaosMaxOrderByAggregateInput
    _min?: OrgaosMinOrderByAggregateInput
    _sum?: OrgaosSumOrderByAggregateInput
  }

  export type OrgaosScalarWhereWithAggregatesInput = {
    AND?: OrgaosScalarWhereWithAggregatesInput | OrgaosScalarWhereWithAggregatesInput[]
    OR?: OrgaosScalarWhereWithAggregatesInput[]
    NOT?: OrgaosScalarWhereWithAggregatesInput | OrgaosScalarWhereWithAggregatesInput[]
    org_id?: IntWithAggregatesFilter<"Orgaos"> | number
    org_desc?: StringWithAggregatesFilter<"Orgaos"> | string
    org_sigla?: StringWithAggregatesFilter<"Orgaos"> | string
    adm_criador?: IntNullableWithAggregatesFilter<"Orgaos"> | number | null
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    cat_id?: IntFilter<"Categoria"> | number
    cat_nome?: StringFilter<"Categoria"> | string
    adm_criador?: IntFilter<"Categoria"> | number
    data_criacao?: DateTimeFilter<"Categoria"> | Date | string
    norma_cat?: Norma_CategoriaListRelationFilter
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type CategoriaOrderByWithRelationInput = {
    cat_id?: SortOrder
    cat_nome?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
    norma_cat?: Norma_CategoriaOrderByRelationAggregateInput
    usuario?: UsersOrderByWithRelationInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    cat_id?: number
    cat_nome?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    adm_criador?: IntFilter<"Categoria"> | number
    data_criacao?: DateTimeFilter<"Categoria"> | Date | string
    norma_cat?: Norma_CategoriaListRelationFilter
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "cat_id" | "cat_nome">

  export type CategoriaOrderByWithAggregationInput = {
    cat_id?: SortOrder
    cat_nome?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    cat_id?: IntWithAggregatesFilter<"Categoria"> | number
    cat_nome?: StringWithAggregatesFilter<"Categoria"> | string
    adm_criador?: IntWithAggregatesFilter<"Categoria"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type NormaWhereInput = {
    AND?: NormaWhereInput | NormaWhereInput[]
    OR?: NormaWhereInput[]
    NOT?: NormaWhereInput | NormaWhereInput[]
    id_norm?: IntFilter<"Norma"> | number
    norm_titulo?: StringFilter<"Norma"> | string
    norm_desc?: StringFilter<"Norma"> | string
    org_criador?: IntFilter<"Norma"> | number
    adm_criador?: IntFilter<"Norma"> | number
    emissao?: DateTimeFilter<"Norma"> | Date | string
    norm_codigo?: StringFilter<"Norma"> | string
    data_criacao?: DateTimeFilter<"Norma"> | Date | string
    data_update?: DateTimeFilter<"Norma"> | Date | string
    pdf_nome_original?: StringFilter<"Norma"> | string
    pdf_caminho?: StringFilter<"Norma"> | string
    notas?: NotasListRelationFilter
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    orgaos?: XOR<OrgaosScalarRelationFilter, OrgaosWhereInput>
    normas_origem?: Normas_ReferenciadasListRelationFilter
    normas_destino?: Normas_ReferenciadasListRelationFilter
    versoes?: Normas_VersoesListRelationFilter
    HistoricoAcessoNormas?: Historico_Acesso_NormasListRelationFilter
    favoritos?: FavoritosListRelationFilter
    categoria?: Norma_CategoriaListRelationFilter
    pedidos?: PedidosdeAlteracaoListRelationFilter
  }

  export type NormaOrderByWithRelationInput = {
    id_norm?: SortOrder
    norm_titulo?: SortOrder
    norm_desc?: SortOrder
    org_criador?: SortOrder
    adm_criador?: SortOrder
    emissao?: SortOrder
    norm_codigo?: SortOrder
    data_criacao?: SortOrder
    data_update?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
    notas?: NotasOrderByRelationAggregateInput
    usuario?: UsersOrderByWithRelationInput
    orgaos?: OrgaosOrderByWithRelationInput
    normas_origem?: Normas_ReferenciadasOrderByRelationAggregateInput
    normas_destino?: Normas_ReferenciadasOrderByRelationAggregateInput
    versoes?: Normas_VersoesOrderByRelationAggregateInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasOrderByRelationAggregateInput
    favoritos?: FavoritosOrderByRelationAggregateInput
    categoria?: Norma_CategoriaOrderByRelationAggregateInput
    pedidos?: PedidosdeAlteracaoOrderByRelationAggregateInput
    _relevance?: NormaOrderByRelevanceInput
  }

  export type NormaWhereUniqueInput = Prisma.AtLeast<{
    id_norm?: number
    norm_codigo?: string
    AND?: NormaWhereInput | NormaWhereInput[]
    OR?: NormaWhereInput[]
    NOT?: NormaWhereInput | NormaWhereInput[]
    norm_titulo?: StringFilter<"Norma"> | string
    norm_desc?: StringFilter<"Norma"> | string
    org_criador?: IntFilter<"Norma"> | number
    adm_criador?: IntFilter<"Norma"> | number
    emissao?: DateTimeFilter<"Norma"> | Date | string
    data_criacao?: DateTimeFilter<"Norma"> | Date | string
    data_update?: DateTimeFilter<"Norma"> | Date | string
    pdf_nome_original?: StringFilter<"Norma"> | string
    pdf_caminho?: StringFilter<"Norma"> | string
    notas?: NotasListRelationFilter
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    orgaos?: XOR<OrgaosScalarRelationFilter, OrgaosWhereInput>
    normas_origem?: Normas_ReferenciadasListRelationFilter
    normas_destino?: Normas_ReferenciadasListRelationFilter
    versoes?: Normas_VersoesListRelationFilter
    HistoricoAcessoNormas?: Historico_Acesso_NormasListRelationFilter
    favoritos?: FavoritosListRelationFilter
    categoria?: Norma_CategoriaListRelationFilter
    pedidos?: PedidosdeAlteracaoListRelationFilter
  }, "id_norm" | "norm_codigo">

  export type NormaOrderByWithAggregationInput = {
    id_norm?: SortOrder
    norm_titulo?: SortOrder
    norm_desc?: SortOrder
    org_criador?: SortOrder
    adm_criador?: SortOrder
    emissao?: SortOrder
    norm_codigo?: SortOrder
    data_criacao?: SortOrder
    data_update?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
    _count?: NormaCountOrderByAggregateInput
    _avg?: NormaAvgOrderByAggregateInput
    _max?: NormaMaxOrderByAggregateInput
    _min?: NormaMinOrderByAggregateInput
    _sum?: NormaSumOrderByAggregateInput
  }

  export type NormaScalarWhereWithAggregatesInput = {
    AND?: NormaScalarWhereWithAggregatesInput | NormaScalarWhereWithAggregatesInput[]
    OR?: NormaScalarWhereWithAggregatesInput[]
    NOT?: NormaScalarWhereWithAggregatesInput | NormaScalarWhereWithAggregatesInput[]
    id_norm?: IntWithAggregatesFilter<"Norma"> | number
    norm_titulo?: StringWithAggregatesFilter<"Norma"> | string
    norm_desc?: StringWithAggregatesFilter<"Norma"> | string
    org_criador?: IntWithAggregatesFilter<"Norma"> | number
    adm_criador?: IntWithAggregatesFilter<"Norma"> | number
    emissao?: DateTimeWithAggregatesFilter<"Norma"> | Date | string
    norm_codigo?: StringWithAggregatesFilter<"Norma"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"Norma"> | Date | string
    data_update?: DateTimeWithAggregatesFilter<"Norma"> | Date | string
    pdf_nome_original?: StringWithAggregatesFilter<"Norma"> | string
    pdf_caminho?: StringWithAggregatesFilter<"Norma"> | string
  }

  export type NotasWhereInput = {
    AND?: NotasWhereInput | NotasWhereInput[]
    OR?: NotasWhereInput[]
    NOT?: NotasWhereInput | NotasWhereInput[]
    id_not?: IntFilter<"Notas"> | number
    not_titulo?: StringFilter<"Notas"> | string
    not_IT?: StringFilter<"Notas"> | string
    not_AB?: StringNullableFilter<"Notas"> | string | null
    not_Pa?: StringNullableFilter<"Notas"> | string | null
    norm_criador?: IntFilter<"Notas"> | number
    adm_criador?: IntFilter<"Notas"> | number
    data_criacao?: DateTimeFilter<"Notas"> | Date | string
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    normas?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }

  export type NotasOrderByWithRelationInput = {
    id_not?: SortOrder
    not_titulo?: SortOrder
    not_IT?: SortOrder
    not_AB?: SortOrderInput | SortOrder
    not_Pa?: SortOrderInput | SortOrder
    norm_criador?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
    usuario?: UsersOrderByWithRelationInput
    normas?: NormaOrderByWithRelationInput
    _relevance?: NotasOrderByRelevanceInput
  }

  export type NotasWhereUniqueInput = Prisma.AtLeast<{
    id_not?: number
    AND?: NotasWhereInput | NotasWhereInput[]
    OR?: NotasWhereInput[]
    NOT?: NotasWhereInput | NotasWhereInput[]
    not_titulo?: StringFilter<"Notas"> | string
    not_IT?: StringFilter<"Notas"> | string
    not_AB?: StringNullableFilter<"Notas"> | string | null
    not_Pa?: StringNullableFilter<"Notas"> | string | null
    norm_criador?: IntFilter<"Notas"> | number
    adm_criador?: IntFilter<"Notas"> | number
    data_criacao?: DateTimeFilter<"Notas"> | Date | string
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    normas?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }, "id_not">

  export type NotasOrderByWithAggregationInput = {
    id_not?: SortOrder
    not_titulo?: SortOrder
    not_IT?: SortOrder
    not_AB?: SortOrderInput | SortOrder
    not_Pa?: SortOrderInput | SortOrder
    norm_criador?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
    _count?: NotasCountOrderByAggregateInput
    _avg?: NotasAvgOrderByAggregateInput
    _max?: NotasMaxOrderByAggregateInput
    _min?: NotasMinOrderByAggregateInput
    _sum?: NotasSumOrderByAggregateInput
  }

  export type NotasScalarWhereWithAggregatesInput = {
    AND?: NotasScalarWhereWithAggregatesInput | NotasScalarWhereWithAggregatesInput[]
    OR?: NotasScalarWhereWithAggregatesInput[]
    NOT?: NotasScalarWhereWithAggregatesInput | NotasScalarWhereWithAggregatesInput[]
    id_not?: IntWithAggregatesFilter<"Notas"> | number
    not_titulo?: StringWithAggregatesFilter<"Notas"> | string
    not_IT?: StringWithAggregatesFilter<"Notas"> | string
    not_AB?: StringNullableWithAggregatesFilter<"Notas"> | string | null
    not_Pa?: StringNullableWithAggregatesFilter<"Notas"> | string | null
    norm_criador?: IntWithAggregatesFilter<"Notas"> | number
    adm_criador?: IntWithAggregatesFilter<"Notas"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"Notas"> | Date | string
  }

  export type Norma_CategoriaWhereInput = {
    AND?: Norma_CategoriaWhereInput | Norma_CategoriaWhereInput[]
    OR?: Norma_CategoriaWhereInput[]
    NOT?: Norma_CategoriaWhereInput | Norma_CategoriaWhereInput[]
    id_norma?: IntFilter<"Norma_Categoria"> | number
    id_cat?: IntFilter<"Norma_Categoria"> | number
    cat?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    norma?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }

  export type Norma_CategoriaOrderByWithRelationInput = {
    id_norma?: SortOrder
    id_cat?: SortOrder
    cat?: CategoriaOrderByWithRelationInput
    norma?: NormaOrderByWithRelationInput
  }

  export type Norma_CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id_norma_id_cat?: Norma_CategoriaId_normaId_catCompoundUniqueInput
    AND?: Norma_CategoriaWhereInput | Norma_CategoriaWhereInput[]
    OR?: Norma_CategoriaWhereInput[]
    NOT?: Norma_CategoriaWhereInput | Norma_CategoriaWhereInput[]
    id_norma?: IntFilter<"Norma_Categoria"> | number
    id_cat?: IntFilter<"Norma_Categoria"> | number
    cat?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    norma?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }, "id_norma_id_cat">

  export type Norma_CategoriaOrderByWithAggregationInput = {
    id_norma?: SortOrder
    id_cat?: SortOrder
    _count?: Norma_CategoriaCountOrderByAggregateInput
    _avg?: Norma_CategoriaAvgOrderByAggregateInput
    _max?: Norma_CategoriaMaxOrderByAggregateInput
    _min?: Norma_CategoriaMinOrderByAggregateInput
    _sum?: Norma_CategoriaSumOrderByAggregateInput
  }

  export type Norma_CategoriaScalarWhereWithAggregatesInput = {
    AND?: Norma_CategoriaScalarWhereWithAggregatesInput | Norma_CategoriaScalarWhereWithAggregatesInput[]
    OR?: Norma_CategoriaScalarWhereWithAggregatesInput[]
    NOT?: Norma_CategoriaScalarWhereWithAggregatesInput | Norma_CategoriaScalarWhereWithAggregatesInput[]
    id_norma?: IntWithAggregatesFilter<"Norma_Categoria"> | number
    id_cat?: IntWithAggregatesFilter<"Norma_Categoria"> | number
  }

  export type Normas_ReferenciadasWhereInput = {
    AND?: Normas_ReferenciadasWhereInput | Normas_ReferenciadasWhereInput[]
    OR?: Normas_ReferenciadasWhereInput[]
    NOT?: Normas_ReferenciadasWhereInput | Normas_ReferenciadasWhereInput[]
    norma_origem_id?: IntFilter<"Normas_Referenciadas"> | number
    norma_destino_id?: IntFilter<"Normas_Referenciadas"> | number
    norma_origem?: XOR<NormaScalarRelationFilter, NormaWhereInput>
    norma_destino?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }

  export type Normas_ReferenciadasOrderByWithRelationInput = {
    norma_origem_id?: SortOrder
    norma_destino_id?: SortOrder
    norma_origem?: NormaOrderByWithRelationInput
    norma_destino?: NormaOrderByWithRelationInput
  }

  export type Normas_ReferenciadasWhereUniqueInput = Prisma.AtLeast<{
    norma_origem_id_norma_destino_id?: Normas_ReferenciadasNorma_origem_idNorma_destino_idCompoundUniqueInput
    AND?: Normas_ReferenciadasWhereInput | Normas_ReferenciadasWhereInput[]
    OR?: Normas_ReferenciadasWhereInput[]
    NOT?: Normas_ReferenciadasWhereInput | Normas_ReferenciadasWhereInput[]
    norma_origem_id?: IntFilter<"Normas_Referenciadas"> | number
    norma_destino_id?: IntFilter<"Normas_Referenciadas"> | number
    norma_origem?: XOR<NormaScalarRelationFilter, NormaWhereInput>
    norma_destino?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }, "norma_origem_id_norma_destino_id">

  export type Normas_ReferenciadasOrderByWithAggregationInput = {
    norma_origem_id?: SortOrder
    norma_destino_id?: SortOrder
    _count?: Normas_ReferenciadasCountOrderByAggregateInput
    _avg?: Normas_ReferenciadasAvgOrderByAggregateInput
    _max?: Normas_ReferenciadasMaxOrderByAggregateInput
    _min?: Normas_ReferenciadasMinOrderByAggregateInput
    _sum?: Normas_ReferenciadasSumOrderByAggregateInput
  }

  export type Normas_ReferenciadasScalarWhereWithAggregatesInput = {
    AND?: Normas_ReferenciadasScalarWhereWithAggregatesInput | Normas_ReferenciadasScalarWhereWithAggregatesInput[]
    OR?: Normas_ReferenciadasScalarWhereWithAggregatesInput[]
    NOT?: Normas_ReferenciadasScalarWhereWithAggregatesInput | Normas_ReferenciadasScalarWhereWithAggregatesInput[]
    norma_origem_id?: IntWithAggregatesFilter<"Normas_Referenciadas"> | number
    norma_destino_id?: IntWithAggregatesFilter<"Normas_Referenciadas"> | number
  }

  export type Normas_VersoesWhereInput = {
    AND?: Normas_VersoesWhereInput | Normas_VersoesWhereInput[]
    OR?: Normas_VersoesWhereInput[]
    NOT?: Normas_VersoesWhereInput | Normas_VersoesWhereInput[]
    id_versao?: IntFilter<"Normas_Versoes"> | number
    norma_id?: IntFilter<"Normas_Versoes"> | number
    norma_codigo?: StringFilter<"Normas_Versoes"> | string
    norm_titulo?: StringFilter<"Normas_Versoes"> | string
    norm_dec?: StringFilter<"Normas_Versoes"> | string
    emissao?: DateTimeFilter<"Normas_Versoes"> | Date | string
    criado_em?: DateTimeFilter<"Normas_Versoes"> | Date | string
    criado_em_novo?: DateTimeFilter<"Normas_Versoes"> | Date | string
    pdf_nome_original?: StringFilter<"Normas_Versoes"> | string
    pdf_caminho?: StringFilter<"Normas_Versoes"> | string
    norma?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }

  export type Normas_VersoesOrderByWithRelationInput = {
    id_versao?: SortOrder
    norma_id?: SortOrder
    norma_codigo?: SortOrder
    norm_titulo?: SortOrder
    norm_dec?: SortOrder
    emissao?: SortOrder
    criado_em?: SortOrder
    criado_em_novo?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
    norma?: NormaOrderByWithRelationInput
    _relevance?: Normas_VersoesOrderByRelevanceInput
  }

  export type Normas_VersoesWhereUniqueInput = Prisma.AtLeast<{
    id_versao?: number
    AND?: Normas_VersoesWhereInput | Normas_VersoesWhereInput[]
    OR?: Normas_VersoesWhereInput[]
    NOT?: Normas_VersoesWhereInput | Normas_VersoesWhereInput[]
    norma_id?: IntFilter<"Normas_Versoes"> | number
    norma_codigo?: StringFilter<"Normas_Versoes"> | string
    norm_titulo?: StringFilter<"Normas_Versoes"> | string
    norm_dec?: StringFilter<"Normas_Versoes"> | string
    emissao?: DateTimeFilter<"Normas_Versoes"> | Date | string
    criado_em?: DateTimeFilter<"Normas_Versoes"> | Date | string
    criado_em_novo?: DateTimeFilter<"Normas_Versoes"> | Date | string
    pdf_nome_original?: StringFilter<"Normas_Versoes"> | string
    pdf_caminho?: StringFilter<"Normas_Versoes"> | string
    norma?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }, "id_versao">

  export type Normas_VersoesOrderByWithAggregationInput = {
    id_versao?: SortOrder
    norma_id?: SortOrder
    norma_codigo?: SortOrder
    norm_titulo?: SortOrder
    norm_dec?: SortOrder
    emissao?: SortOrder
    criado_em?: SortOrder
    criado_em_novo?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
    _count?: Normas_VersoesCountOrderByAggregateInput
    _avg?: Normas_VersoesAvgOrderByAggregateInput
    _max?: Normas_VersoesMaxOrderByAggregateInput
    _min?: Normas_VersoesMinOrderByAggregateInput
    _sum?: Normas_VersoesSumOrderByAggregateInput
  }

  export type Normas_VersoesScalarWhereWithAggregatesInput = {
    AND?: Normas_VersoesScalarWhereWithAggregatesInput | Normas_VersoesScalarWhereWithAggregatesInput[]
    OR?: Normas_VersoesScalarWhereWithAggregatesInput[]
    NOT?: Normas_VersoesScalarWhereWithAggregatesInput | Normas_VersoesScalarWhereWithAggregatesInput[]
    id_versao?: IntWithAggregatesFilter<"Normas_Versoes"> | number
    norma_id?: IntWithAggregatesFilter<"Normas_Versoes"> | number
    norma_codigo?: StringWithAggregatesFilter<"Normas_Versoes"> | string
    norm_titulo?: StringWithAggregatesFilter<"Normas_Versoes"> | string
    norm_dec?: StringWithAggregatesFilter<"Normas_Versoes"> | string
    emissao?: DateTimeWithAggregatesFilter<"Normas_Versoes"> | Date | string
    criado_em?: DateTimeWithAggregatesFilter<"Normas_Versoes"> | Date | string
    criado_em_novo?: DateTimeWithAggregatesFilter<"Normas_Versoes"> | Date | string
    pdf_nome_original?: StringWithAggregatesFilter<"Normas_Versoes"> | string
    pdf_caminho?: StringWithAggregatesFilter<"Normas_Versoes"> | string
  }

  export type MfaWhereInput = {
    AND?: MfaWhereInput | MfaWhereInput[]
    OR?: MfaWhereInput[]
    NOT?: MfaWhereInput | MfaWhereInput[]
    id?: IntFilter<"Mfa"> | number
    user_id_FK?: IntFilter<"Mfa"> | number
    cod_mfa?: StringFilter<"Mfa"> | string
    cod_data_cricao?: DateTimeFilter<"Mfa"> | Date | string
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type MfaOrderByWithRelationInput = {
    id?: SortOrder
    user_id_FK?: SortOrder
    cod_mfa?: SortOrder
    cod_data_cricao?: SortOrder
    usuario?: UsersOrderByWithRelationInput
    _relevance?: MfaOrderByRelevanceInput
  }

  export type MfaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MfaWhereInput | MfaWhereInput[]
    OR?: MfaWhereInput[]
    NOT?: MfaWhereInput | MfaWhereInput[]
    user_id_FK?: IntFilter<"Mfa"> | number
    cod_mfa?: StringFilter<"Mfa"> | string
    cod_data_cricao?: DateTimeFilter<"Mfa"> | Date | string
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type MfaOrderByWithAggregationInput = {
    id?: SortOrder
    user_id_FK?: SortOrder
    cod_mfa?: SortOrder
    cod_data_cricao?: SortOrder
    _count?: MfaCountOrderByAggregateInput
    _avg?: MfaAvgOrderByAggregateInput
    _max?: MfaMaxOrderByAggregateInput
    _min?: MfaMinOrderByAggregateInput
    _sum?: MfaSumOrderByAggregateInput
  }

  export type MfaScalarWhereWithAggregatesInput = {
    AND?: MfaScalarWhereWithAggregatesInput | MfaScalarWhereWithAggregatesInput[]
    OR?: MfaScalarWhereWithAggregatesInput[]
    NOT?: MfaScalarWhereWithAggregatesInput | MfaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mfa"> | number
    user_id_FK?: IntWithAggregatesFilter<"Mfa"> | number
    cod_mfa?: StringWithAggregatesFilter<"Mfa"> | string
    cod_data_cricao?: DateTimeWithAggregatesFilter<"Mfa"> | Date | string
  }

  export type Historico_Acesso_NormasWhereInput = {
    AND?: Historico_Acesso_NormasWhereInput | Historico_Acesso_NormasWhereInput[]
    OR?: Historico_Acesso_NormasWhereInput[]
    NOT?: Historico_Acesso_NormasWhereInput | Historico_Acesso_NormasWhereInput[]
    id_user?: IntFilter<"Historico_Acesso_Normas"> | number
    id_norma?: IntFilter<"Historico_Acesso_Normas"> | number
    data_acesso?: DateTimeFilter<"Historico_Acesso_Normas"> | Date | string
    usuarios?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    normas?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }

  export type Historico_Acesso_NormasOrderByWithRelationInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_acesso?: SortOrder
    usuarios?: UsersOrderByWithRelationInput
    normas?: NormaOrderByWithRelationInput
  }

  export type Historico_Acesso_NormasWhereUniqueInput = Prisma.AtLeast<{
    id_norma_id_user?: Historico_Acesso_NormasId_normaId_userCompoundUniqueInput
    AND?: Historico_Acesso_NormasWhereInput | Historico_Acesso_NormasWhereInput[]
    OR?: Historico_Acesso_NormasWhereInput[]
    NOT?: Historico_Acesso_NormasWhereInput | Historico_Acesso_NormasWhereInput[]
    id_user?: IntFilter<"Historico_Acesso_Normas"> | number
    id_norma?: IntFilter<"Historico_Acesso_Normas"> | number
    data_acesso?: DateTimeFilter<"Historico_Acesso_Normas"> | Date | string
    usuarios?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    normas?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }, "id_norma_id_user">

  export type Historico_Acesso_NormasOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_acesso?: SortOrder
    _count?: Historico_Acesso_NormasCountOrderByAggregateInput
    _avg?: Historico_Acesso_NormasAvgOrderByAggregateInput
    _max?: Historico_Acesso_NormasMaxOrderByAggregateInput
    _min?: Historico_Acesso_NormasMinOrderByAggregateInput
    _sum?: Historico_Acesso_NormasSumOrderByAggregateInput
  }

  export type Historico_Acesso_NormasScalarWhereWithAggregatesInput = {
    AND?: Historico_Acesso_NormasScalarWhereWithAggregatesInput | Historico_Acesso_NormasScalarWhereWithAggregatesInput[]
    OR?: Historico_Acesso_NormasScalarWhereWithAggregatesInput[]
    NOT?: Historico_Acesso_NormasScalarWhereWithAggregatesInput | Historico_Acesso_NormasScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"Historico_Acesso_Normas"> | number
    id_norma?: IntWithAggregatesFilter<"Historico_Acesso_Normas"> | number
    data_acesso?: DateTimeWithAggregatesFilter<"Historico_Acesso_Normas"> | Date | string
  }

  export type PedidosdeAlteracaoWhereInput = {
    AND?: PedidosdeAlteracaoWhereInput | PedidosdeAlteracaoWhereInput[]
    OR?: PedidosdeAlteracaoWhereInput[]
    NOT?: PedidosdeAlteracaoWhereInput | PedidosdeAlteracaoWhereInput[]
    id?: IntFilter<"PedidosdeAlteracao"> | number
    id_user?: IntFilter<"PedidosdeAlteracao"> | number
    alteracao?: JsonFilter<"PedidosdeAlteracao">
    acaoDealteracao?: EnumAcaoDeAlteracaoFilter<"PedidosdeAlteracao"> | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFilter<"PedidosdeAlteracao"> | $Enums.NotaOrNorma
    status?: EnumStatusFilter<"PedidosdeAlteracao"> | $Enums.Status
    data_pedido?: DateTimeFilter<"PedidosdeAlteracao"> | Date | string
    id_norma?: IntNullableFilter<"PedidosdeAlteracao"> | number | null
    usuarios?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    normas?: XOR<NormaNullableScalarRelationFilter, NormaWhereInput> | null
  }

  export type PedidosdeAlteracaoOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    alteracao?: SortOrder
    acaoDealteracao?: SortOrder
    notaorNorma?: SortOrder
    status?: SortOrder
    data_pedido?: SortOrder
    id_norma?: SortOrderInput | SortOrder
    usuarios?: UsersOrderByWithRelationInput
    normas?: NormaOrderByWithRelationInput
  }

  export type PedidosdeAlteracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidosdeAlteracaoWhereInput | PedidosdeAlteracaoWhereInput[]
    OR?: PedidosdeAlteracaoWhereInput[]
    NOT?: PedidosdeAlteracaoWhereInput | PedidosdeAlteracaoWhereInput[]
    id_user?: IntFilter<"PedidosdeAlteracao"> | number
    alteracao?: JsonFilter<"PedidosdeAlteracao">
    acaoDealteracao?: EnumAcaoDeAlteracaoFilter<"PedidosdeAlteracao"> | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFilter<"PedidosdeAlteracao"> | $Enums.NotaOrNorma
    status?: EnumStatusFilter<"PedidosdeAlteracao"> | $Enums.Status
    data_pedido?: DateTimeFilter<"PedidosdeAlteracao"> | Date | string
    id_norma?: IntNullableFilter<"PedidosdeAlteracao"> | number | null
    usuarios?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    normas?: XOR<NormaNullableScalarRelationFilter, NormaWhereInput> | null
  }, "id">

  export type PedidosdeAlteracaoOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    alteracao?: SortOrder
    acaoDealteracao?: SortOrder
    notaorNorma?: SortOrder
    status?: SortOrder
    data_pedido?: SortOrder
    id_norma?: SortOrderInput | SortOrder
    _count?: PedidosdeAlteracaoCountOrderByAggregateInput
    _avg?: PedidosdeAlteracaoAvgOrderByAggregateInput
    _max?: PedidosdeAlteracaoMaxOrderByAggregateInput
    _min?: PedidosdeAlteracaoMinOrderByAggregateInput
    _sum?: PedidosdeAlteracaoSumOrderByAggregateInput
  }

  export type PedidosdeAlteracaoScalarWhereWithAggregatesInput = {
    AND?: PedidosdeAlteracaoScalarWhereWithAggregatesInput | PedidosdeAlteracaoScalarWhereWithAggregatesInput[]
    OR?: PedidosdeAlteracaoScalarWhereWithAggregatesInput[]
    NOT?: PedidosdeAlteracaoScalarWhereWithAggregatesInput | PedidosdeAlteracaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidosdeAlteracao"> | number
    id_user?: IntWithAggregatesFilter<"PedidosdeAlteracao"> | number
    alteracao?: JsonWithAggregatesFilter<"PedidosdeAlteracao">
    acaoDealteracao?: EnumAcaoDeAlteracaoWithAggregatesFilter<"PedidosdeAlteracao"> | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaWithAggregatesFilter<"PedidosdeAlteracao"> | $Enums.NotaOrNorma
    status?: EnumStatusWithAggregatesFilter<"PedidosdeAlteracao"> | $Enums.Status
    data_pedido?: DateTimeWithAggregatesFilter<"PedidosdeAlteracao"> | Date | string
    id_norma?: IntNullableWithAggregatesFilter<"PedidosdeAlteracao"> | number | null
  }

  export type FavoritosWhereInput = {
    AND?: FavoritosWhereInput | FavoritosWhereInput[]
    OR?: FavoritosWhereInput[]
    NOT?: FavoritosWhereInput | FavoritosWhereInput[]
    id_user?: IntFilter<"Favoritos"> | number
    id_norma?: IntFilter<"Favoritos"> | number
    data_criacao?: DateTimeFilter<"Favoritos"> | Date | string
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    norma?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }

  export type FavoritosOrderByWithRelationInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_criacao?: SortOrder
    usuario?: UsersOrderByWithRelationInput
    norma?: NormaOrderByWithRelationInput
  }

  export type FavoritosWhereUniqueInput = Prisma.AtLeast<{
    id_user_id_norma?: FavoritosId_userId_normaCompoundUniqueInput
    AND?: FavoritosWhereInput | FavoritosWhereInput[]
    OR?: FavoritosWhereInput[]
    NOT?: FavoritosWhereInput | FavoritosWhereInput[]
    id_user?: IntFilter<"Favoritos"> | number
    id_norma?: IntFilter<"Favoritos"> | number
    data_criacao?: DateTimeFilter<"Favoritos"> | Date | string
    usuario?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    norma?: XOR<NormaScalarRelationFilter, NormaWhereInput>
  }, "id_user_id_norma">

  export type FavoritosOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_criacao?: SortOrder
    _count?: FavoritosCountOrderByAggregateInput
    _avg?: FavoritosAvgOrderByAggregateInput
    _max?: FavoritosMaxOrderByAggregateInput
    _min?: FavoritosMinOrderByAggregateInput
    _sum?: FavoritosSumOrderByAggregateInput
  }

  export type FavoritosScalarWhereWithAggregatesInput = {
    AND?: FavoritosScalarWhereWithAggregatesInput | FavoritosScalarWhereWithAggregatesInput[]
    OR?: FavoritosScalarWhereWithAggregatesInput[]
    NOT?: FavoritosScalarWhereWithAggregatesInput | FavoritosScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"Favoritos"> | number
    id_norma?: IntWithAggregatesFilter<"Favoritos"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"Favoritos"> | Date | string
  }

  export type UsersCreateInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaCreateNestedManyWithoutUsuarioInput
    normas?: NormaCreateNestedManyWithoutUsuarioInput
    notas?: NotasCreateNestedManyWithoutUsuarioInput
    mfa?: MfaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosUncheckedCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    normas?: NormaUncheckedCreateNestedManyWithoutUsuarioInput
    notas?: NotasUncheckedCreateNestedManyWithoutUsuarioInput
    mfa?: MfaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUncheckedUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUncheckedUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersCreateManyInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
  }

  export type UsersUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
  }

  export type UsersUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
  }

  export type OrgaosCreateInput = {
    org_desc: string
    org_sigla: string
    normas?: NormaCreateNestedManyWithoutOrgaosInput
    usuarios?: UsersCreateNestedOneWithoutOrgaosInput
  }

  export type OrgaosUncheckedCreateInput = {
    org_id?: number
    org_desc: string
    org_sigla: string
    adm_criador?: number | null
    normas?: NormaUncheckedCreateNestedManyWithoutOrgaosInput
  }

  export type OrgaosUpdateInput = {
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
    normas?: NormaUpdateManyWithoutOrgaosNestedInput
    usuarios?: UsersUpdateOneWithoutOrgaosNestedInput
  }

  export type OrgaosUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
    adm_criador?: NullableIntFieldUpdateOperationsInput | number | null
    normas?: NormaUncheckedUpdateManyWithoutOrgaosNestedInput
  }

  export type OrgaosCreateManyInput = {
    org_id?: number
    org_desc: string
    org_sigla: string
    adm_criador?: number | null
  }

  export type OrgaosUpdateManyMutationInput = {
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
  }

  export type OrgaosUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
    adm_criador?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriaCreateInput = {
    cat_nome: string
    data_criacao?: Date | string
    norma_cat?: Norma_CategoriaCreateNestedManyWithoutCatInput
    usuario: UsersCreateNestedOneWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    cat_id?: number
    cat_nome: string
    adm_criador: number
    data_criacao?: Date | string
    norma_cat?: Norma_CategoriaUncheckedCreateNestedManyWithoutCatInput
  }

  export type CategoriaUpdateInput = {
    cat_nome?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    norma_cat?: Norma_CategoriaUpdateManyWithoutCatNestedInput
    usuario?: UsersUpdateOneRequiredWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    cat_id?: IntFieldUpdateOperationsInput | number
    cat_nome?: StringFieldUpdateOperationsInput | string
    adm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    norma_cat?: Norma_CategoriaUncheckedUpdateManyWithoutCatNestedInput
  }

  export type CategoriaCreateManyInput = {
    cat_id?: number
    cat_nome: string
    adm_criador: number
    data_criacao?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    cat_nome?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    cat_id?: IntFieldUpdateOperationsInput | number
    cat_nome?: StringFieldUpdateOperationsInput | string
    adm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormaCreateInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaUpdateInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type NormaCreateManyInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
  }

  export type NormaUpdateManyMutationInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type NormaUncheckedUpdateManyInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type NotasCreateInput = {
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    data_criacao?: Date | string
    usuario: UsersCreateNestedOneWithoutNotasInput
    normas: NormaCreateNestedOneWithoutNotasInput
  }

  export type NotasUncheckedCreateInput = {
    id_not?: number
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    norm_criador: number
    adm_criador: number
    data_criacao?: Date | string
  }

  export type NotasUpdateInput = {
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsersUpdateOneRequiredWithoutNotasNestedInput
    normas?: NormaUpdateOneRequiredWithoutNotasNestedInput
  }

  export type NotasUncheckedUpdateInput = {
    id_not?: IntFieldUpdateOperationsInput | number
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    norm_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotasCreateManyInput = {
    id_not?: number
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    norm_criador: number
    adm_criador: number
    data_criacao?: Date | string
  }

  export type NotasUpdateManyMutationInput = {
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotasUncheckedUpdateManyInput = {
    id_not?: IntFieldUpdateOperationsInput | number
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    norm_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Norma_CategoriaCreateInput = {
    cat: CategoriaCreateNestedOneWithoutNorma_catInput
    norma: NormaCreateNestedOneWithoutCategoriaInput
  }

  export type Norma_CategoriaUncheckedCreateInput = {
    id_norma: number
    id_cat: number
  }

  export type Norma_CategoriaUpdateInput = {
    cat?: CategoriaUpdateOneRequiredWithoutNorma_catNestedInput
    norma?: NormaUpdateOneRequiredWithoutCategoriaNestedInput
  }

  export type Norma_CategoriaUncheckedUpdateInput = {
    id_norma?: IntFieldUpdateOperationsInput | number
    id_cat?: IntFieldUpdateOperationsInput | number
  }

  export type Norma_CategoriaCreateManyInput = {
    id_norma: number
    id_cat: number
  }

  export type Norma_CategoriaUpdateManyMutationInput = {

  }

  export type Norma_CategoriaUncheckedUpdateManyInput = {
    id_norma?: IntFieldUpdateOperationsInput | number
    id_cat?: IntFieldUpdateOperationsInput | number
  }

  export type Normas_ReferenciadasCreateInput = {
    norma_origem: NormaCreateNestedOneWithoutNormas_origemInput
    norma_destino: NormaCreateNestedOneWithoutNormas_destinoInput
  }

  export type Normas_ReferenciadasUncheckedCreateInput = {
    norma_origem_id: number
    norma_destino_id: number
  }

  export type Normas_ReferenciadasUpdateInput = {
    norma_origem?: NormaUpdateOneRequiredWithoutNormas_origemNestedInput
    norma_destino?: NormaUpdateOneRequiredWithoutNormas_destinoNestedInput
  }

  export type Normas_ReferenciadasUncheckedUpdateInput = {
    norma_origem_id?: IntFieldUpdateOperationsInput | number
    norma_destino_id?: IntFieldUpdateOperationsInput | number
  }

  export type Normas_ReferenciadasCreateManyInput = {
    norma_origem_id: number
    norma_destino_id: number
  }

  export type Normas_ReferenciadasUpdateManyMutationInput = {

  }

  export type Normas_ReferenciadasUncheckedUpdateManyInput = {
    norma_origem_id?: IntFieldUpdateOperationsInput | number
    norma_destino_id?: IntFieldUpdateOperationsInput | number
  }

  export type Normas_VersoesCreateInput = {
    norma_codigo: string
    norm_titulo: string
    norm_dec: string
    emissao: Date | string
    criado_em: Date | string
    criado_em_novo?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    norma: NormaCreateNestedOneWithoutVersoesInput
  }

  export type Normas_VersoesUncheckedCreateInput = {
    id_versao?: number
    norma_id: number
    norma_codigo: string
    norm_titulo: string
    norm_dec: string
    emissao: Date | string
    criado_em: Date | string
    criado_em_novo?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
  }

  export type Normas_VersoesUpdateInput = {
    norma_codigo?: StringFieldUpdateOperationsInput | string
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_dec?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em_novo?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    norma?: NormaUpdateOneRequiredWithoutVersoesNestedInput
  }

  export type Normas_VersoesUncheckedUpdateInput = {
    id_versao?: IntFieldUpdateOperationsInput | number
    norma_id?: IntFieldUpdateOperationsInput | number
    norma_codigo?: StringFieldUpdateOperationsInput | string
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_dec?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em_novo?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type Normas_VersoesCreateManyInput = {
    id_versao?: number
    norma_id: number
    norma_codigo: string
    norm_titulo: string
    norm_dec: string
    emissao: Date | string
    criado_em: Date | string
    criado_em_novo?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
  }

  export type Normas_VersoesUpdateManyMutationInput = {
    norma_codigo?: StringFieldUpdateOperationsInput | string
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_dec?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em_novo?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type Normas_VersoesUncheckedUpdateManyInput = {
    id_versao?: IntFieldUpdateOperationsInput | number
    norma_id?: IntFieldUpdateOperationsInput | number
    norma_codigo?: StringFieldUpdateOperationsInput | string
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_dec?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em_novo?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type MfaCreateInput = {
    cod_mfa: string
    cod_data_cricao?: Date | string
    usuario: UsersCreateNestedOneWithoutMfaInput
  }

  export type MfaUncheckedCreateInput = {
    id?: number
    user_id_FK: number
    cod_mfa: string
    cod_data_cricao?: Date | string
  }

  export type MfaUpdateInput = {
    cod_mfa?: StringFieldUpdateOperationsInput | string
    cod_data_cricao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsersUpdateOneRequiredWithoutMfaNestedInput
  }

  export type MfaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id_FK?: IntFieldUpdateOperationsInput | number
    cod_mfa?: StringFieldUpdateOperationsInput | string
    cod_data_cricao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaCreateManyInput = {
    id?: number
    user_id_FK: number
    cod_mfa: string
    cod_data_cricao?: Date | string
  }

  export type MfaUpdateManyMutationInput = {
    cod_mfa?: StringFieldUpdateOperationsInput | string
    cod_data_cricao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id_FK?: IntFieldUpdateOperationsInput | number
    cod_mfa?: StringFieldUpdateOperationsInput | string
    cod_data_cricao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_Acesso_NormasCreateInput = {
    data_acesso?: Date | string
    usuarios: UsersCreateNestedOneWithoutHistoricoAcessoNormasInput
    normas: NormaCreateNestedOneWithoutHistoricoAcessoNormasInput
  }

  export type Historico_Acesso_NormasUncheckedCreateInput = {
    id_user: number
    id_norma: number
    data_acesso?: Date | string
  }

  export type Historico_Acesso_NormasUpdateInput = {
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsersUpdateOneRequiredWithoutHistoricoAcessoNormasNestedInput
    normas?: NormaUpdateOneRequiredWithoutHistoricoAcessoNormasNestedInput
  }

  export type Historico_Acesso_NormasUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    id_norma?: IntFieldUpdateOperationsInput | number
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_Acesso_NormasCreateManyInput = {
    id_user: number
    id_norma: number
    data_acesso?: Date | string
  }

  export type Historico_Acesso_NormasUpdateManyMutationInput = {
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_Acesso_NormasUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    id_norma?: IntFieldUpdateOperationsInput | number
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidosdeAlteracaoCreateInput = {
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
    usuarios: UsersCreateNestedOneWithoutPedidosInput
    normas?: NormaCreateNestedOneWithoutPedidosInput
  }

  export type PedidosdeAlteracaoUncheckedCreateInput = {
    id?: number
    id_user: number
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
    id_norma?: number | null
  }

  export type PedidosdeAlteracaoUpdateInput = {
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsersUpdateOneRequiredWithoutPedidosNestedInput
    normas?: NormaUpdateOneWithoutPedidosNestedInput
  }

  export type PedidosdeAlteracaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    id_norma?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidosdeAlteracaoCreateManyInput = {
    id?: number
    id_user: number
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
    id_norma?: number | null
  }

  export type PedidosdeAlteracaoUpdateManyMutationInput = {
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidosdeAlteracaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    id_norma?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoritosCreateInput = {
    data_criacao?: Date | string
    usuario: UsersCreateNestedOneWithoutFavoritosInput
    norma: NormaCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritosUncheckedCreateInput = {
    id_user: number
    id_norma: number
    data_criacao?: Date | string
  }

  export type FavoritosUpdateInput = {
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsersUpdateOneRequiredWithoutFavoritosNestedInput
    norma?: NormaUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritosUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    id_norma?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritosCreateManyInput = {
    id_user: number
    id_norma: number
    data_criacao?: Date | string
  }

  export type FavoritosUpdateManyMutationInput = {
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritosUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    id_norma?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumNivelUserFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelUser | EnumNivelUserFieldRefInput<$PrismaModel>
    in?: $Enums.NivelUser[]
    notIn?: $Enums.NivelUser[]
    not?: NestedEnumNivelUserFilter<$PrismaModel> | $Enums.NivelUser
  }

  export type OrgaosListRelationFilter = {
    every?: OrgaosWhereInput
    some?: OrgaosWhereInput
    none?: OrgaosWhereInput
  }

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type NormaListRelationFilter = {
    every?: NormaWhereInput
    some?: NormaWhereInput
    none?: NormaWhereInput
  }

  export type NotasListRelationFilter = {
    every?: NotasWhereInput
    some?: NotasWhereInput
    none?: NotasWhereInput
  }

  export type MfaListRelationFilter = {
    every?: MfaWhereInput
    some?: MfaWhereInput
    none?: MfaWhereInput
  }

  export type FavoritosListRelationFilter = {
    every?: FavoritosWhereInput
    some?: FavoritosWhereInput
    none?: FavoritosWhereInput
  }

  export type Historico_Acesso_NormasListRelationFilter = {
    every?: Historico_Acesso_NormasWhereInput
    some?: Historico_Acesso_NormasWhereInput
    none?: Historico_Acesso_NormasWhereInput
  }

  export type PedidosdeAlteracaoListRelationFilter = {
    every?: PedidosdeAlteracaoWhereInput
    some?: PedidosdeAlteracaoWhereInput
    none?: PedidosdeAlteracaoWhereInput
  }

  export type OrgaosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NormaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MfaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Historico_Acesso_NormasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidosdeAlteracaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id_user?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    user_senha_hash?: SortOrder
    data_criacao?: SortOrder
    nivel_user?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    user_senha_hash?: SortOrder
    data_criacao?: SortOrder
    nivel_user?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id_user?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    user_senha_hash?: SortOrder
    data_criacao?: SortOrder
    nivel_user?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumNivelUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelUser | EnumNivelUserFieldRefInput<$PrismaModel>
    in?: $Enums.NivelUser[]
    notIn?: $Enums.NivelUser[]
    not?: NestedEnumNivelUserWithAggregatesFilter<$PrismaModel> | $Enums.NivelUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNivelUserFilter<$PrismaModel>
    _max?: NestedEnumNivelUserFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrgaosOrderByRelevanceInput = {
    fields: OrgaosOrderByRelevanceFieldEnum | OrgaosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrgaosCountOrderByAggregateInput = {
    org_id?: SortOrder
    org_desc?: SortOrder
    org_sigla?: SortOrder
    adm_criador?: SortOrder
  }

  export type OrgaosAvgOrderByAggregateInput = {
    org_id?: SortOrder
    adm_criador?: SortOrder
  }

  export type OrgaosMaxOrderByAggregateInput = {
    org_id?: SortOrder
    org_desc?: SortOrder
    org_sigla?: SortOrder
    adm_criador?: SortOrder
  }

  export type OrgaosMinOrderByAggregateInput = {
    org_id?: SortOrder
    org_desc?: SortOrder
    org_sigla?: SortOrder
    adm_criador?: SortOrder
  }

  export type OrgaosSumOrderByAggregateInput = {
    org_id?: SortOrder
    adm_criador?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type Norma_CategoriaListRelationFilter = {
    every?: Norma_CategoriaWhereInput
    some?: Norma_CategoriaWhereInput
    none?: Norma_CategoriaWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type Norma_CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    cat_id?: SortOrder
    cat_nome?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    cat_id?: SortOrder
    adm_criador?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    cat_id?: SortOrder
    cat_nome?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    cat_id?: SortOrder
    cat_nome?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    cat_id?: SortOrder
    adm_criador?: SortOrder
  }

  export type OrgaosScalarRelationFilter = {
    is?: OrgaosWhereInput
    isNot?: OrgaosWhereInput
  }

  export type Normas_ReferenciadasListRelationFilter = {
    every?: Normas_ReferenciadasWhereInput
    some?: Normas_ReferenciadasWhereInput
    none?: Normas_ReferenciadasWhereInput
  }

  export type Normas_VersoesListRelationFilter = {
    every?: Normas_VersoesWhereInput
    some?: Normas_VersoesWhereInput
    none?: Normas_VersoesWhereInput
  }

  export type Normas_ReferenciadasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Normas_VersoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NormaOrderByRelevanceInput = {
    fields: NormaOrderByRelevanceFieldEnum | NormaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NormaCountOrderByAggregateInput = {
    id_norm?: SortOrder
    norm_titulo?: SortOrder
    norm_desc?: SortOrder
    org_criador?: SortOrder
    adm_criador?: SortOrder
    emissao?: SortOrder
    norm_codigo?: SortOrder
    data_criacao?: SortOrder
    data_update?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
  }

  export type NormaAvgOrderByAggregateInput = {
    id_norm?: SortOrder
    org_criador?: SortOrder
    adm_criador?: SortOrder
  }

  export type NormaMaxOrderByAggregateInput = {
    id_norm?: SortOrder
    norm_titulo?: SortOrder
    norm_desc?: SortOrder
    org_criador?: SortOrder
    adm_criador?: SortOrder
    emissao?: SortOrder
    norm_codigo?: SortOrder
    data_criacao?: SortOrder
    data_update?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
  }

  export type NormaMinOrderByAggregateInput = {
    id_norm?: SortOrder
    norm_titulo?: SortOrder
    norm_desc?: SortOrder
    org_criador?: SortOrder
    adm_criador?: SortOrder
    emissao?: SortOrder
    norm_codigo?: SortOrder
    data_criacao?: SortOrder
    data_update?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
  }

  export type NormaSumOrderByAggregateInput = {
    id_norm?: SortOrder
    org_criador?: SortOrder
    adm_criador?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NormaScalarRelationFilter = {
    is?: NormaWhereInput
    isNot?: NormaWhereInput
  }

  export type NotasOrderByRelevanceInput = {
    fields: NotasOrderByRelevanceFieldEnum | NotasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotasCountOrderByAggregateInput = {
    id_not?: SortOrder
    not_titulo?: SortOrder
    not_IT?: SortOrder
    not_AB?: SortOrder
    not_Pa?: SortOrder
    norm_criador?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
  }

  export type NotasAvgOrderByAggregateInput = {
    id_not?: SortOrder
    norm_criador?: SortOrder
    adm_criador?: SortOrder
  }

  export type NotasMaxOrderByAggregateInput = {
    id_not?: SortOrder
    not_titulo?: SortOrder
    not_IT?: SortOrder
    not_AB?: SortOrder
    not_Pa?: SortOrder
    norm_criador?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
  }

  export type NotasMinOrderByAggregateInput = {
    id_not?: SortOrder
    not_titulo?: SortOrder
    not_IT?: SortOrder
    not_AB?: SortOrder
    not_Pa?: SortOrder
    norm_criador?: SortOrder
    adm_criador?: SortOrder
    data_criacao?: SortOrder
  }

  export type NotasSumOrderByAggregateInput = {
    id_not?: SortOrder
    norm_criador?: SortOrder
    adm_criador?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type Norma_CategoriaId_normaId_catCompoundUniqueInput = {
    id_norma: number
    id_cat: number
  }

  export type Norma_CategoriaCountOrderByAggregateInput = {
    id_norma?: SortOrder
    id_cat?: SortOrder
  }

  export type Norma_CategoriaAvgOrderByAggregateInput = {
    id_norma?: SortOrder
    id_cat?: SortOrder
  }

  export type Norma_CategoriaMaxOrderByAggregateInput = {
    id_norma?: SortOrder
    id_cat?: SortOrder
  }

  export type Norma_CategoriaMinOrderByAggregateInput = {
    id_norma?: SortOrder
    id_cat?: SortOrder
  }

  export type Norma_CategoriaSumOrderByAggregateInput = {
    id_norma?: SortOrder
    id_cat?: SortOrder
  }

  export type Normas_ReferenciadasNorma_origem_idNorma_destino_idCompoundUniqueInput = {
    norma_origem_id: number
    norma_destino_id: number
  }

  export type Normas_ReferenciadasCountOrderByAggregateInput = {
    norma_origem_id?: SortOrder
    norma_destino_id?: SortOrder
  }

  export type Normas_ReferenciadasAvgOrderByAggregateInput = {
    norma_origem_id?: SortOrder
    norma_destino_id?: SortOrder
  }

  export type Normas_ReferenciadasMaxOrderByAggregateInput = {
    norma_origem_id?: SortOrder
    norma_destino_id?: SortOrder
  }

  export type Normas_ReferenciadasMinOrderByAggregateInput = {
    norma_origem_id?: SortOrder
    norma_destino_id?: SortOrder
  }

  export type Normas_ReferenciadasSumOrderByAggregateInput = {
    norma_origem_id?: SortOrder
    norma_destino_id?: SortOrder
  }

  export type Normas_VersoesOrderByRelevanceInput = {
    fields: Normas_VersoesOrderByRelevanceFieldEnum | Normas_VersoesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Normas_VersoesCountOrderByAggregateInput = {
    id_versao?: SortOrder
    norma_id?: SortOrder
    norma_codigo?: SortOrder
    norm_titulo?: SortOrder
    norm_dec?: SortOrder
    emissao?: SortOrder
    criado_em?: SortOrder
    criado_em_novo?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
  }

  export type Normas_VersoesAvgOrderByAggregateInput = {
    id_versao?: SortOrder
    norma_id?: SortOrder
  }

  export type Normas_VersoesMaxOrderByAggregateInput = {
    id_versao?: SortOrder
    norma_id?: SortOrder
    norma_codigo?: SortOrder
    norm_titulo?: SortOrder
    norm_dec?: SortOrder
    emissao?: SortOrder
    criado_em?: SortOrder
    criado_em_novo?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
  }

  export type Normas_VersoesMinOrderByAggregateInput = {
    id_versao?: SortOrder
    norma_id?: SortOrder
    norma_codigo?: SortOrder
    norm_titulo?: SortOrder
    norm_dec?: SortOrder
    emissao?: SortOrder
    criado_em?: SortOrder
    criado_em_novo?: SortOrder
    pdf_nome_original?: SortOrder
    pdf_caminho?: SortOrder
  }

  export type Normas_VersoesSumOrderByAggregateInput = {
    id_versao?: SortOrder
    norma_id?: SortOrder
  }

  export type MfaOrderByRelevanceInput = {
    fields: MfaOrderByRelevanceFieldEnum | MfaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MfaCountOrderByAggregateInput = {
    id?: SortOrder
    user_id_FK?: SortOrder
    cod_mfa?: SortOrder
    cod_data_cricao?: SortOrder
  }

  export type MfaAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id_FK?: SortOrder
  }

  export type MfaMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id_FK?: SortOrder
    cod_mfa?: SortOrder
    cod_data_cricao?: SortOrder
  }

  export type MfaMinOrderByAggregateInput = {
    id?: SortOrder
    user_id_FK?: SortOrder
    cod_mfa?: SortOrder
    cod_data_cricao?: SortOrder
  }

  export type MfaSumOrderByAggregateInput = {
    id?: SortOrder
    user_id_FK?: SortOrder
  }

  export type Historico_Acesso_NormasId_normaId_userCompoundUniqueInput = {
    id_norma: number
    id_user: number
  }

  export type Historico_Acesso_NormasCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_acesso?: SortOrder
  }

  export type Historico_Acesso_NormasAvgOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
  }

  export type Historico_Acesso_NormasMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_acesso?: SortOrder
  }

  export type Historico_Acesso_NormasMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_acesso?: SortOrder
  }

  export type Historico_Acesso_NormasSumOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumAcaoDeAlteracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoDeAlteracao | EnumAcaoDeAlteracaoFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoDeAlteracao[]
    notIn?: $Enums.AcaoDeAlteracao[]
    not?: NestedEnumAcaoDeAlteracaoFilter<$PrismaModel> | $Enums.AcaoDeAlteracao
  }

  export type EnumNotaOrNormaFilter<$PrismaModel = never> = {
    equals?: $Enums.NotaOrNorma | EnumNotaOrNormaFieldRefInput<$PrismaModel>
    in?: $Enums.NotaOrNorma[]
    notIn?: $Enums.NotaOrNorma[]
    not?: NestedEnumNotaOrNormaFilter<$PrismaModel> | $Enums.NotaOrNorma
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NormaNullableScalarRelationFilter = {
    is?: NormaWhereInput | null
    isNot?: NormaWhereInput | null
  }

  export type PedidosdeAlteracaoCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    alteracao?: SortOrder
    acaoDealteracao?: SortOrder
    notaorNorma?: SortOrder
    status?: SortOrder
    data_pedido?: SortOrder
    id_norma?: SortOrder
  }

  export type PedidosdeAlteracaoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_norma?: SortOrder
  }

  export type PedidosdeAlteracaoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    acaoDealteracao?: SortOrder
    notaorNorma?: SortOrder
    status?: SortOrder
    data_pedido?: SortOrder
    id_norma?: SortOrder
  }

  export type PedidosdeAlteracaoMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    acaoDealteracao?: SortOrder
    notaorNorma?: SortOrder
    status?: SortOrder
    data_pedido?: SortOrder
    id_norma?: SortOrder
  }

  export type PedidosdeAlteracaoSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_norma?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumAcaoDeAlteracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoDeAlteracao | EnumAcaoDeAlteracaoFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoDeAlteracao[]
    notIn?: $Enums.AcaoDeAlteracao[]
    not?: NestedEnumAcaoDeAlteracaoWithAggregatesFilter<$PrismaModel> | $Enums.AcaoDeAlteracao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcaoDeAlteracaoFilter<$PrismaModel>
    _max?: NestedEnumAcaoDeAlteracaoFilter<$PrismaModel>
  }

  export type EnumNotaOrNormaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotaOrNorma | EnumNotaOrNormaFieldRefInput<$PrismaModel>
    in?: $Enums.NotaOrNorma[]
    notIn?: $Enums.NotaOrNorma[]
    not?: NestedEnumNotaOrNormaWithAggregatesFilter<$PrismaModel> | $Enums.NotaOrNorma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotaOrNormaFilter<$PrismaModel>
    _max?: NestedEnumNotaOrNormaFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type FavoritosId_userId_normaCompoundUniqueInput = {
    id_user: number
    id_norma: number
  }

  export type FavoritosCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_criacao?: SortOrder
  }

  export type FavoritosAvgOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
  }

  export type FavoritosMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_criacao?: SortOrder
  }

  export type FavoritosMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
    data_criacao?: SortOrder
  }

  export type FavoritosSumOrderByAggregateInput = {
    id_user?: SortOrder
    id_norma?: SortOrder
  }

  export type OrgaosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<OrgaosCreateWithoutUsuariosInput, OrgaosUncheckedCreateWithoutUsuariosInput> | OrgaosCreateWithoutUsuariosInput[] | OrgaosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: OrgaosCreateOrConnectWithoutUsuariosInput | OrgaosCreateOrConnectWithoutUsuariosInput[]
    createMany?: OrgaosCreateManyUsuariosInputEnvelope
    connect?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
  }

  export type CategoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput> | CategoriaCreateWithoutUsuarioInput[] | CategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUsuarioInput | CategoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CategoriaCreateManyUsuarioInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type NormaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NormaCreateWithoutUsuarioInput, NormaUncheckedCreateWithoutUsuarioInput> | NormaCreateWithoutUsuarioInput[] | NormaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NormaCreateOrConnectWithoutUsuarioInput | NormaCreateOrConnectWithoutUsuarioInput[]
    createMany?: NormaCreateManyUsuarioInputEnvelope
    connect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
  }

  export type NotasCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotasCreateWithoutUsuarioInput, NotasUncheckedCreateWithoutUsuarioInput> | NotasCreateWithoutUsuarioInput[] | NotasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotasCreateOrConnectWithoutUsuarioInput | NotasCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotasCreateManyUsuarioInputEnvelope
    connect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
  }

  export type MfaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MfaCreateWithoutUsuarioInput, MfaUncheckedCreateWithoutUsuarioInput> | MfaCreateWithoutUsuarioInput[] | MfaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MfaCreateOrConnectWithoutUsuarioInput | MfaCreateOrConnectWithoutUsuarioInput[]
    createMany?: MfaCreateManyUsuarioInputEnvelope
    connect?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
  }

  export type FavoritosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritosCreateWithoutUsuarioInput, FavoritosUncheckedCreateWithoutUsuarioInput> | FavoritosCreateWithoutUsuarioInput[] | FavoritosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritosCreateOrConnectWithoutUsuarioInput | FavoritosCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritosCreateManyUsuarioInputEnvelope
    connect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
  }

  export type Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<Historico_Acesso_NormasCreateWithoutUsuariosInput, Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput> | Historico_Acesso_NormasCreateWithoutUsuariosInput[] | Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput | Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput[]
    createMany?: Historico_Acesso_NormasCreateManyUsuariosInputEnvelope
    connect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
  }

  export type PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<PedidosdeAlteracaoCreateWithoutUsuariosInput, PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput> | PedidosdeAlteracaoCreateWithoutUsuariosInput[] | PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput | PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput[]
    createMany?: PedidosdeAlteracaoCreateManyUsuariosInputEnvelope
    connect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
  }

  export type OrgaosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<OrgaosCreateWithoutUsuariosInput, OrgaosUncheckedCreateWithoutUsuariosInput> | OrgaosCreateWithoutUsuariosInput[] | OrgaosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: OrgaosCreateOrConnectWithoutUsuariosInput | OrgaosCreateOrConnectWithoutUsuariosInput[]
    createMany?: OrgaosCreateManyUsuariosInputEnvelope
    connect?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput> | CategoriaCreateWithoutUsuarioInput[] | CategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUsuarioInput | CategoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CategoriaCreateManyUsuarioInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type NormaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NormaCreateWithoutUsuarioInput, NormaUncheckedCreateWithoutUsuarioInput> | NormaCreateWithoutUsuarioInput[] | NormaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NormaCreateOrConnectWithoutUsuarioInput | NormaCreateOrConnectWithoutUsuarioInput[]
    createMany?: NormaCreateManyUsuarioInputEnvelope
    connect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
  }

  export type NotasUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotasCreateWithoutUsuarioInput, NotasUncheckedCreateWithoutUsuarioInput> | NotasCreateWithoutUsuarioInput[] | NotasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotasCreateOrConnectWithoutUsuarioInput | NotasCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotasCreateManyUsuarioInputEnvelope
    connect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
  }

  export type MfaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MfaCreateWithoutUsuarioInput, MfaUncheckedCreateWithoutUsuarioInput> | MfaCreateWithoutUsuarioInput[] | MfaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MfaCreateOrConnectWithoutUsuarioInput | MfaCreateOrConnectWithoutUsuarioInput[]
    createMany?: MfaCreateManyUsuarioInputEnvelope
    connect?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
  }

  export type FavoritosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritosCreateWithoutUsuarioInput, FavoritosUncheckedCreateWithoutUsuarioInput> | FavoritosCreateWithoutUsuarioInput[] | FavoritosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritosCreateOrConnectWithoutUsuarioInput | FavoritosCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritosCreateManyUsuarioInputEnvelope
    connect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
  }

  export type Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<Historico_Acesso_NormasCreateWithoutUsuariosInput, Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput> | Historico_Acesso_NormasCreateWithoutUsuariosInput[] | Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput | Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput[]
    createMany?: Historico_Acesso_NormasCreateManyUsuariosInputEnvelope
    connect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
  }

  export type PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<PedidosdeAlteracaoCreateWithoutUsuariosInput, PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput> | PedidosdeAlteracaoCreateWithoutUsuariosInput[] | PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput | PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput[]
    createMany?: PedidosdeAlteracaoCreateManyUsuariosInputEnvelope
    connect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumNivelUserFieldUpdateOperationsInput = {
    set?: $Enums.NivelUser
  }

  export type OrgaosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<OrgaosCreateWithoutUsuariosInput, OrgaosUncheckedCreateWithoutUsuariosInput> | OrgaosCreateWithoutUsuariosInput[] | OrgaosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: OrgaosCreateOrConnectWithoutUsuariosInput | OrgaosCreateOrConnectWithoutUsuariosInput[]
    upsert?: OrgaosUpsertWithWhereUniqueWithoutUsuariosInput | OrgaosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: OrgaosCreateManyUsuariosInputEnvelope
    set?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
    disconnect?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
    delete?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
    connect?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
    update?: OrgaosUpdateWithWhereUniqueWithoutUsuariosInput | OrgaosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: OrgaosUpdateManyWithWhereWithoutUsuariosInput | OrgaosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: OrgaosScalarWhereInput | OrgaosScalarWhereInput[]
  }

  export type CategoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput> | CategoriaCreateWithoutUsuarioInput[] | CategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUsuarioInput | CategoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutUsuarioInput | CategoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CategoriaCreateManyUsuarioInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutUsuarioInput | CategoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutUsuarioInput | CategoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type NormaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NormaCreateWithoutUsuarioInput, NormaUncheckedCreateWithoutUsuarioInput> | NormaCreateWithoutUsuarioInput[] | NormaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NormaCreateOrConnectWithoutUsuarioInput | NormaCreateOrConnectWithoutUsuarioInput[]
    upsert?: NormaUpsertWithWhereUniqueWithoutUsuarioInput | NormaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NormaCreateManyUsuarioInputEnvelope
    set?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    disconnect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    delete?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    connect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    update?: NormaUpdateWithWhereUniqueWithoutUsuarioInput | NormaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NormaUpdateManyWithWhereWithoutUsuarioInput | NormaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NormaScalarWhereInput | NormaScalarWhereInput[]
  }

  export type NotasUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotasCreateWithoutUsuarioInput, NotasUncheckedCreateWithoutUsuarioInput> | NotasCreateWithoutUsuarioInput[] | NotasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotasCreateOrConnectWithoutUsuarioInput | NotasCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotasUpsertWithWhereUniqueWithoutUsuarioInput | NotasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotasCreateManyUsuarioInputEnvelope
    set?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    disconnect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    delete?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    connect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    update?: NotasUpdateWithWhereUniqueWithoutUsuarioInput | NotasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotasUpdateManyWithWhereWithoutUsuarioInput | NotasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotasScalarWhereInput | NotasScalarWhereInput[]
  }

  export type MfaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MfaCreateWithoutUsuarioInput, MfaUncheckedCreateWithoutUsuarioInput> | MfaCreateWithoutUsuarioInput[] | MfaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MfaCreateOrConnectWithoutUsuarioInput | MfaCreateOrConnectWithoutUsuarioInput[]
    upsert?: MfaUpsertWithWhereUniqueWithoutUsuarioInput | MfaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MfaCreateManyUsuarioInputEnvelope
    set?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
    disconnect?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
    delete?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
    connect?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
    update?: MfaUpdateWithWhereUniqueWithoutUsuarioInput | MfaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MfaUpdateManyWithWhereWithoutUsuarioInput | MfaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MfaScalarWhereInput | MfaScalarWhereInput[]
  }

  export type FavoritosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritosCreateWithoutUsuarioInput, FavoritosUncheckedCreateWithoutUsuarioInput> | FavoritosCreateWithoutUsuarioInput[] | FavoritosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritosCreateOrConnectWithoutUsuarioInput | FavoritosCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritosUpsertWithWhereUniqueWithoutUsuarioInput | FavoritosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritosCreateManyUsuarioInputEnvelope
    set?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    disconnect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    delete?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    connect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    update?: FavoritosUpdateWithWhereUniqueWithoutUsuarioInput | FavoritosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritosUpdateManyWithWhereWithoutUsuarioInput | FavoritosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritosScalarWhereInput | FavoritosScalarWhereInput[]
  }

  export type Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<Historico_Acesso_NormasCreateWithoutUsuariosInput, Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput> | Historico_Acesso_NormasCreateWithoutUsuariosInput[] | Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput | Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput[]
    upsert?: Historico_Acesso_NormasUpsertWithWhereUniqueWithoutUsuariosInput | Historico_Acesso_NormasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: Historico_Acesso_NormasCreateManyUsuariosInputEnvelope
    set?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    disconnect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    delete?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    connect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    update?: Historico_Acesso_NormasUpdateWithWhereUniqueWithoutUsuariosInput | Historico_Acesso_NormasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: Historico_Acesso_NormasUpdateManyWithWhereWithoutUsuariosInput | Historico_Acesso_NormasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: Historico_Acesso_NormasScalarWhereInput | Historico_Acesso_NormasScalarWhereInput[]
  }

  export type PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<PedidosdeAlteracaoCreateWithoutUsuariosInput, PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput> | PedidosdeAlteracaoCreateWithoutUsuariosInput[] | PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput | PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput[]
    upsert?: PedidosdeAlteracaoUpsertWithWhereUniqueWithoutUsuariosInput | PedidosdeAlteracaoUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: PedidosdeAlteracaoCreateManyUsuariosInputEnvelope
    set?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    disconnect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    delete?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    connect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    update?: PedidosdeAlteracaoUpdateWithWhereUniqueWithoutUsuariosInput | PedidosdeAlteracaoUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: PedidosdeAlteracaoUpdateManyWithWhereWithoutUsuariosInput | PedidosdeAlteracaoUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: PedidosdeAlteracaoScalarWhereInput | PedidosdeAlteracaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<OrgaosCreateWithoutUsuariosInput, OrgaosUncheckedCreateWithoutUsuariosInput> | OrgaosCreateWithoutUsuariosInput[] | OrgaosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: OrgaosCreateOrConnectWithoutUsuariosInput | OrgaosCreateOrConnectWithoutUsuariosInput[]
    upsert?: OrgaosUpsertWithWhereUniqueWithoutUsuariosInput | OrgaosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: OrgaosCreateManyUsuariosInputEnvelope
    set?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
    disconnect?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
    delete?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
    connect?: OrgaosWhereUniqueInput | OrgaosWhereUniqueInput[]
    update?: OrgaosUpdateWithWhereUniqueWithoutUsuariosInput | OrgaosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: OrgaosUpdateManyWithWhereWithoutUsuariosInput | OrgaosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: OrgaosScalarWhereInput | OrgaosScalarWhereInput[]
  }

  export type CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput> | CategoriaCreateWithoutUsuarioInput[] | CategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUsuarioInput | CategoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutUsuarioInput | CategoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CategoriaCreateManyUsuarioInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutUsuarioInput | CategoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutUsuarioInput | CategoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type NormaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NormaCreateWithoutUsuarioInput, NormaUncheckedCreateWithoutUsuarioInput> | NormaCreateWithoutUsuarioInput[] | NormaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NormaCreateOrConnectWithoutUsuarioInput | NormaCreateOrConnectWithoutUsuarioInput[]
    upsert?: NormaUpsertWithWhereUniqueWithoutUsuarioInput | NormaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NormaCreateManyUsuarioInputEnvelope
    set?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    disconnect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    delete?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    connect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    update?: NormaUpdateWithWhereUniqueWithoutUsuarioInput | NormaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NormaUpdateManyWithWhereWithoutUsuarioInput | NormaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NormaScalarWhereInput | NormaScalarWhereInput[]
  }

  export type NotasUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotasCreateWithoutUsuarioInput, NotasUncheckedCreateWithoutUsuarioInput> | NotasCreateWithoutUsuarioInput[] | NotasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotasCreateOrConnectWithoutUsuarioInput | NotasCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotasUpsertWithWhereUniqueWithoutUsuarioInput | NotasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotasCreateManyUsuarioInputEnvelope
    set?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    disconnect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    delete?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    connect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    update?: NotasUpdateWithWhereUniqueWithoutUsuarioInput | NotasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotasUpdateManyWithWhereWithoutUsuarioInput | NotasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotasScalarWhereInput | NotasScalarWhereInput[]
  }

  export type MfaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MfaCreateWithoutUsuarioInput, MfaUncheckedCreateWithoutUsuarioInput> | MfaCreateWithoutUsuarioInput[] | MfaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MfaCreateOrConnectWithoutUsuarioInput | MfaCreateOrConnectWithoutUsuarioInput[]
    upsert?: MfaUpsertWithWhereUniqueWithoutUsuarioInput | MfaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MfaCreateManyUsuarioInputEnvelope
    set?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
    disconnect?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
    delete?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
    connect?: MfaWhereUniqueInput | MfaWhereUniqueInput[]
    update?: MfaUpdateWithWhereUniqueWithoutUsuarioInput | MfaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MfaUpdateManyWithWhereWithoutUsuarioInput | MfaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MfaScalarWhereInput | MfaScalarWhereInput[]
  }

  export type FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritosCreateWithoutUsuarioInput, FavoritosUncheckedCreateWithoutUsuarioInput> | FavoritosCreateWithoutUsuarioInput[] | FavoritosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritosCreateOrConnectWithoutUsuarioInput | FavoritosCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritosUpsertWithWhereUniqueWithoutUsuarioInput | FavoritosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritosCreateManyUsuarioInputEnvelope
    set?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    disconnect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    delete?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    connect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    update?: FavoritosUpdateWithWhereUniqueWithoutUsuarioInput | FavoritosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritosUpdateManyWithWhereWithoutUsuarioInput | FavoritosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritosScalarWhereInput | FavoritosScalarWhereInput[]
  }

  export type Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<Historico_Acesso_NormasCreateWithoutUsuariosInput, Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput> | Historico_Acesso_NormasCreateWithoutUsuariosInput[] | Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput | Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput[]
    upsert?: Historico_Acesso_NormasUpsertWithWhereUniqueWithoutUsuariosInput | Historico_Acesso_NormasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: Historico_Acesso_NormasCreateManyUsuariosInputEnvelope
    set?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    disconnect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    delete?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    connect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    update?: Historico_Acesso_NormasUpdateWithWhereUniqueWithoutUsuariosInput | Historico_Acesso_NormasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: Historico_Acesso_NormasUpdateManyWithWhereWithoutUsuariosInput | Historico_Acesso_NormasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: Historico_Acesso_NormasScalarWhereInput | Historico_Acesso_NormasScalarWhereInput[]
  }

  export type PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<PedidosdeAlteracaoCreateWithoutUsuariosInput, PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput> | PedidosdeAlteracaoCreateWithoutUsuariosInput[] | PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput | PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput[]
    upsert?: PedidosdeAlteracaoUpsertWithWhereUniqueWithoutUsuariosInput | PedidosdeAlteracaoUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: PedidosdeAlteracaoCreateManyUsuariosInputEnvelope
    set?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    disconnect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    delete?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    connect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    update?: PedidosdeAlteracaoUpdateWithWhereUniqueWithoutUsuariosInput | PedidosdeAlteracaoUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: PedidosdeAlteracaoUpdateManyWithWhereWithoutUsuariosInput | PedidosdeAlteracaoUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: PedidosdeAlteracaoScalarWhereInput | PedidosdeAlteracaoScalarWhereInput[]
  }

  export type NormaCreateNestedManyWithoutOrgaosInput = {
    create?: XOR<NormaCreateWithoutOrgaosInput, NormaUncheckedCreateWithoutOrgaosInput> | NormaCreateWithoutOrgaosInput[] | NormaUncheckedCreateWithoutOrgaosInput[]
    connectOrCreate?: NormaCreateOrConnectWithoutOrgaosInput | NormaCreateOrConnectWithoutOrgaosInput[]
    createMany?: NormaCreateManyOrgaosInputEnvelope
    connect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutOrgaosInput = {
    create?: XOR<UsersCreateWithoutOrgaosInput, UsersUncheckedCreateWithoutOrgaosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrgaosInput
    connect?: UsersWhereUniqueInput
  }

  export type NormaUncheckedCreateNestedManyWithoutOrgaosInput = {
    create?: XOR<NormaCreateWithoutOrgaosInput, NormaUncheckedCreateWithoutOrgaosInput> | NormaCreateWithoutOrgaosInput[] | NormaUncheckedCreateWithoutOrgaosInput[]
    connectOrCreate?: NormaCreateOrConnectWithoutOrgaosInput | NormaCreateOrConnectWithoutOrgaosInput[]
    createMany?: NormaCreateManyOrgaosInputEnvelope
    connect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
  }

  export type NormaUpdateManyWithoutOrgaosNestedInput = {
    create?: XOR<NormaCreateWithoutOrgaosInput, NormaUncheckedCreateWithoutOrgaosInput> | NormaCreateWithoutOrgaosInput[] | NormaUncheckedCreateWithoutOrgaosInput[]
    connectOrCreate?: NormaCreateOrConnectWithoutOrgaosInput | NormaCreateOrConnectWithoutOrgaosInput[]
    upsert?: NormaUpsertWithWhereUniqueWithoutOrgaosInput | NormaUpsertWithWhereUniqueWithoutOrgaosInput[]
    createMany?: NormaCreateManyOrgaosInputEnvelope
    set?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    disconnect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    delete?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    connect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    update?: NormaUpdateWithWhereUniqueWithoutOrgaosInput | NormaUpdateWithWhereUniqueWithoutOrgaosInput[]
    updateMany?: NormaUpdateManyWithWhereWithoutOrgaosInput | NormaUpdateManyWithWhereWithoutOrgaosInput[]
    deleteMany?: NormaScalarWhereInput | NormaScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutOrgaosNestedInput = {
    create?: XOR<UsersCreateWithoutOrgaosInput, UsersUncheckedCreateWithoutOrgaosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrgaosInput
    upsert?: UsersUpsertWithoutOrgaosInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrgaosInput, UsersUpdateWithoutOrgaosInput>, UsersUncheckedUpdateWithoutOrgaosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NormaUncheckedUpdateManyWithoutOrgaosNestedInput = {
    create?: XOR<NormaCreateWithoutOrgaosInput, NormaUncheckedCreateWithoutOrgaosInput> | NormaCreateWithoutOrgaosInput[] | NormaUncheckedCreateWithoutOrgaosInput[]
    connectOrCreate?: NormaCreateOrConnectWithoutOrgaosInput | NormaCreateOrConnectWithoutOrgaosInput[]
    upsert?: NormaUpsertWithWhereUniqueWithoutOrgaosInput | NormaUpsertWithWhereUniqueWithoutOrgaosInput[]
    createMany?: NormaCreateManyOrgaosInputEnvelope
    set?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    disconnect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    delete?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    connect?: NormaWhereUniqueInput | NormaWhereUniqueInput[]
    update?: NormaUpdateWithWhereUniqueWithoutOrgaosInput | NormaUpdateWithWhereUniqueWithoutOrgaosInput[]
    updateMany?: NormaUpdateManyWithWhereWithoutOrgaosInput | NormaUpdateManyWithWhereWithoutOrgaosInput[]
    deleteMany?: NormaScalarWhereInput | NormaScalarWhereInput[]
  }

  export type Norma_CategoriaCreateNestedManyWithoutCatInput = {
    create?: XOR<Norma_CategoriaCreateWithoutCatInput, Norma_CategoriaUncheckedCreateWithoutCatInput> | Norma_CategoriaCreateWithoutCatInput[] | Norma_CategoriaUncheckedCreateWithoutCatInput[]
    connectOrCreate?: Norma_CategoriaCreateOrConnectWithoutCatInput | Norma_CategoriaCreateOrConnectWithoutCatInput[]
    createMany?: Norma_CategoriaCreateManyCatInputEnvelope
    connect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutCategoriaInput = {
    create?: XOR<UsersCreateWithoutCategoriaInput, UsersUncheckedCreateWithoutCategoriaInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCategoriaInput
    connect?: UsersWhereUniqueInput
  }

  export type Norma_CategoriaUncheckedCreateNestedManyWithoutCatInput = {
    create?: XOR<Norma_CategoriaCreateWithoutCatInput, Norma_CategoriaUncheckedCreateWithoutCatInput> | Norma_CategoriaCreateWithoutCatInput[] | Norma_CategoriaUncheckedCreateWithoutCatInput[]
    connectOrCreate?: Norma_CategoriaCreateOrConnectWithoutCatInput | Norma_CategoriaCreateOrConnectWithoutCatInput[]
    createMany?: Norma_CategoriaCreateManyCatInputEnvelope
    connect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
  }

  export type Norma_CategoriaUpdateManyWithoutCatNestedInput = {
    create?: XOR<Norma_CategoriaCreateWithoutCatInput, Norma_CategoriaUncheckedCreateWithoutCatInput> | Norma_CategoriaCreateWithoutCatInput[] | Norma_CategoriaUncheckedCreateWithoutCatInput[]
    connectOrCreate?: Norma_CategoriaCreateOrConnectWithoutCatInput | Norma_CategoriaCreateOrConnectWithoutCatInput[]
    upsert?: Norma_CategoriaUpsertWithWhereUniqueWithoutCatInput | Norma_CategoriaUpsertWithWhereUniqueWithoutCatInput[]
    createMany?: Norma_CategoriaCreateManyCatInputEnvelope
    set?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    disconnect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    delete?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    connect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    update?: Norma_CategoriaUpdateWithWhereUniqueWithoutCatInput | Norma_CategoriaUpdateWithWhereUniqueWithoutCatInput[]
    updateMany?: Norma_CategoriaUpdateManyWithWhereWithoutCatInput | Norma_CategoriaUpdateManyWithWhereWithoutCatInput[]
    deleteMany?: Norma_CategoriaScalarWhereInput | Norma_CategoriaScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutCategoriaNestedInput = {
    create?: XOR<UsersCreateWithoutCategoriaInput, UsersUncheckedCreateWithoutCategoriaInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCategoriaInput
    upsert?: UsersUpsertWithoutCategoriaInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCategoriaInput, UsersUpdateWithoutCategoriaInput>, UsersUncheckedUpdateWithoutCategoriaInput>
  }

  export type Norma_CategoriaUncheckedUpdateManyWithoutCatNestedInput = {
    create?: XOR<Norma_CategoriaCreateWithoutCatInput, Norma_CategoriaUncheckedCreateWithoutCatInput> | Norma_CategoriaCreateWithoutCatInput[] | Norma_CategoriaUncheckedCreateWithoutCatInput[]
    connectOrCreate?: Norma_CategoriaCreateOrConnectWithoutCatInput | Norma_CategoriaCreateOrConnectWithoutCatInput[]
    upsert?: Norma_CategoriaUpsertWithWhereUniqueWithoutCatInput | Norma_CategoriaUpsertWithWhereUniqueWithoutCatInput[]
    createMany?: Norma_CategoriaCreateManyCatInputEnvelope
    set?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    disconnect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    delete?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    connect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    update?: Norma_CategoriaUpdateWithWhereUniqueWithoutCatInput | Norma_CategoriaUpdateWithWhereUniqueWithoutCatInput[]
    updateMany?: Norma_CategoriaUpdateManyWithWhereWithoutCatInput | Norma_CategoriaUpdateManyWithWhereWithoutCatInput[]
    deleteMany?: Norma_CategoriaScalarWhereInput | Norma_CategoriaScalarWhereInput[]
  }

  export type NotasCreateNestedManyWithoutNormasInput = {
    create?: XOR<NotasCreateWithoutNormasInput, NotasUncheckedCreateWithoutNormasInput> | NotasCreateWithoutNormasInput[] | NotasUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: NotasCreateOrConnectWithoutNormasInput | NotasCreateOrConnectWithoutNormasInput[]
    createMany?: NotasCreateManyNormasInputEnvelope
    connect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutNormasInput = {
    create?: XOR<UsersCreateWithoutNormasInput, UsersUncheckedCreateWithoutNormasInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNormasInput
    connect?: UsersWhereUniqueInput
  }

  export type OrgaosCreateNestedOneWithoutNormasInput = {
    create?: XOR<OrgaosCreateWithoutNormasInput, OrgaosUncheckedCreateWithoutNormasInput>
    connectOrCreate?: OrgaosCreateOrConnectWithoutNormasInput
    connect?: OrgaosWhereUniqueInput
  }

  export type Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput = {
    create?: XOR<Normas_ReferenciadasCreateWithoutNorma_origemInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput> | Normas_ReferenciadasCreateWithoutNorma_origemInput[] | Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput[]
    connectOrCreate?: Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput | Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput[]
    createMany?: Normas_ReferenciadasCreateManyNorma_origemInputEnvelope
    connect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
  }

  export type Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput = {
    create?: XOR<Normas_ReferenciadasCreateWithoutNorma_destinoInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput> | Normas_ReferenciadasCreateWithoutNorma_destinoInput[] | Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput[]
    connectOrCreate?: Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput | Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput[]
    createMany?: Normas_ReferenciadasCreateManyNorma_destinoInputEnvelope
    connect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
  }

  export type Normas_VersoesCreateNestedManyWithoutNormaInput = {
    create?: XOR<Normas_VersoesCreateWithoutNormaInput, Normas_VersoesUncheckedCreateWithoutNormaInput> | Normas_VersoesCreateWithoutNormaInput[] | Normas_VersoesUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: Normas_VersoesCreateOrConnectWithoutNormaInput | Normas_VersoesCreateOrConnectWithoutNormaInput[]
    createMany?: Normas_VersoesCreateManyNormaInputEnvelope
    connect?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
  }

  export type Historico_Acesso_NormasCreateNestedManyWithoutNormasInput = {
    create?: XOR<Historico_Acesso_NormasCreateWithoutNormasInput, Historico_Acesso_NormasUncheckedCreateWithoutNormasInput> | Historico_Acesso_NormasCreateWithoutNormasInput[] | Historico_Acesso_NormasUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: Historico_Acesso_NormasCreateOrConnectWithoutNormasInput | Historico_Acesso_NormasCreateOrConnectWithoutNormasInput[]
    createMany?: Historico_Acesso_NormasCreateManyNormasInputEnvelope
    connect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
  }

  export type FavoritosCreateNestedManyWithoutNormaInput = {
    create?: XOR<FavoritosCreateWithoutNormaInput, FavoritosUncheckedCreateWithoutNormaInput> | FavoritosCreateWithoutNormaInput[] | FavoritosUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: FavoritosCreateOrConnectWithoutNormaInput | FavoritosCreateOrConnectWithoutNormaInput[]
    createMany?: FavoritosCreateManyNormaInputEnvelope
    connect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
  }

  export type Norma_CategoriaCreateNestedManyWithoutNormaInput = {
    create?: XOR<Norma_CategoriaCreateWithoutNormaInput, Norma_CategoriaUncheckedCreateWithoutNormaInput> | Norma_CategoriaCreateWithoutNormaInput[] | Norma_CategoriaUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: Norma_CategoriaCreateOrConnectWithoutNormaInput | Norma_CategoriaCreateOrConnectWithoutNormaInput[]
    createMany?: Norma_CategoriaCreateManyNormaInputEnvelope
    connect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
  }

  export type PedidosdeAlteracaoCreateNestedManyWithoutNormasInput = {
    create?: XOR<PedidosdeAlteracaoCreateWithoutNormasInput, PedidosdeAlteracaoUncheckedCreateWithoutNormasInput> | PedidosdeAlteracaoCreateWithoutNormasInput[] | PedidosdeAlteracaoUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: PedidosdeAlteracaoCreateOrConnectWithoutNormasInput | PedidosdeAlteracaoCreateOrConnectWithoutNormasInput[]
    createMany?: PedidosdeAlteracaoCreateManyNormasInputEnvelope
    connect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
  }

  export type NotasUncheckedCreateNestedManyWithoutNormasInput = {
    create?: XOR<NotasCreateWithoutNormasInput, NotasUncheckedCreateWithoutNormasInput> | NotasCreateWithoutNormasInput[] | NotasUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: NotasCreateOrConnectWithoutNormasInput | NotasCreateOrConnectWithoutNormasInput[]
    createMany?: NotasCreateManyNormasInputEnvelope
    connect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
  }

  export type Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput = {
    create?: XOR<Normas_ReferenciadasCreateWithoutNorma_origemInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput> | Normas_ReferenciadasCreateWithoutNorma_origemInput[] | Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput[]
    connectOrCreate?: Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput | Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput[]
    createMany?: Normas_ReferenciadasCreateManyNorma_origemInputEnvelope
    connect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
  }

  export type Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput = {
    create?: XOR<Normas_ReferenciadasCreateWithoutNorma_destinoInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput> | Normas_ReferenciadasCreateWithoutNorma_destinoInput[] | Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput[]
    connectOrCreate?: Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput | Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput[]
    createMany?: Normas_ReferenciadasCreateManyNorma_destinoInputEnvelope
    connect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
  }

  export type Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput = {
    create?: XOR<Normas_VersoesCreateWithoutNormaInput, Normas_VersoesUncheckedCreateWithoutNormaInput> | Normas_VersoesCreateWithoutNormaInput[] | Normas_VersoesUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: Normas_VersoesCreateOrConnectWithoutNormaInput | Normas_VersoesCreateOrConnectWithoutNormaInput[]
    createMany?: Normas_VersoesCreateManyNormaInputEnvelope
    connect?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
  }

  export type Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput = {
    create?: XOR<Historico_Acesso_NormasCreateWithoutNormasInput, Historico_Acesso_NormasUncheckedCreateWithoutNormasInput> | Historico_Acesso_NormasCreateWithoutNormasInput[] | Historico_Acesso_NormasUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: Historico_Acesso_NormasCreateOrConnectWithoutNormasInput | Historico_Acesso_NormasCreateOrConnectWithoutNormasInput[]
    createMany?: Historico_Acesso_NormasCreateManyNormasInputEnvelope
    connect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
  }

  export type FavoritosUncheckedCreateNestedManyWithoutNormaInput = {
    create?: XOR<FavoritosCreateWithoutNormaInput, FavoritosUncheckedCreateWithoutNormaInput> | FavoritosCreateWithoutNormaInput[] | FavoritosUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: FavoritosCreateOrConnectWithoutNormaInput | FavoritosCreateOrConnectWithoutNormaInput[]
    createMany?: FavoritosCreateManyNormaInputEnvelope
    connect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
  }

  export type Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput = {
    create?: XOR<Norma_CategoriaCreateWithoutNormaInput, Norma_CategoriaUncheckedCreateWithoutNormaInput> | Norma_CategoriaCreateWithoutNormaInput[] | Norma_CategoriaUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: Norma_CategoriaCreateOrConnectWithoutNormaInput | Norma_CategoriaCreateOrConnectWithoutNormaInput[]
    createMany?: Norma_CategoriaCreateManyNormaInputEnvelope
    connect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
  }

  export type PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput = {
    create?: XOR<PedidosdeAlteracaoCreateWithoutNormasInput, PedidosdeAlteracaoUncheckedCreateWithoutNormasInput> | PedidosdeAlteracaoCreateWithoutNormasInput[] | PedidosdeAlteracaoUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: PedidosdeAlteracaoCreateOrConnectWithoutNormasInput | PedidosdeAlteracaoCreateOrConnectWithoutNormasInput[]
    createMany?: PedidosdeAlteracaoCreateManyNormasInputEnvelope
    connect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
  }

  export type NotasUpdateManyWithoutNormasNestedInput = {
    create?: XOR<NotasCreateWithoutNormasInput, NotasUncheckedCreateWithoutNormasInput> | NotasCreateWithoutNormasInput[] | NotasUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: NotasCreateOrConnectWithoutNormasInput | NotasCreateOrConnectWithoutNormasInput[]
    upsert?: NotasUpsertWithWhereUniqueWithoutNormasInput | NotasUpsertWithWhereUniqueWithoutNormasInput[]
    createMany?: NotasCreateManyNormasInputEnvelope
    set?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    disconnect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    delete?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    connect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    update?: NotasUpdateWithWhereUniqueWithoutNormasInput | NotasUpdateWithWhereUniqueWithoutNormasInput[]
    updateMany?: NotasUpdateManyWithWhereWithoutNormasInput | NotasUpdateManyWithWhereWithoutNormasInput[]
    deleteMany?: NotasScalarWhereInput | NotasScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutNormasNestedInput = {
    create?: XOR<UsersCreateWithoutNormasInput, UsersUncheckedCreateWithoutNormasInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNormasInput
    upsert?: UsersUpsertWithoutNormasInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNormasInput, UsersUpdateWithoutNormasInput>, UsersUncheckedUpdateWithoutNormasInput>
  }

  export type OrgaosUpdateOneRequiredWithoutNormasNestedInput = {
    create?: XOR<OrgaosCreateWithoutNormasInput, OrgaosUncheckedCreateWithoutNormasInput>
    connectOrCreate?: OrgaosCreateOrConnectWithoutNormasInput
    upsert?: OrgaosUpsertWithoutNormasInput
    connect?: OrgaosWhereUniqueInput
    update?: XOR<XOR<OrgaosUpdateToOneWithWhereWithoutNormasInput, OrgaosUpdateWithoutNormasInput>, OrgaosUncheckedUpdateWithoutNormasInput>
  }

  export type Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput = {
    create?: XOR<Normas_ReferenciadasCreateWithoutNorma_origemInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput> | Normas_ReferenciadasCreateWithoutNorma_origemInput[] | Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput[]
    connectOrCreate?: Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput | Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput[]
    upsert?: Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_origemInput | Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_origemInput[]
    createMany?: Normas_ReferenciadasCreateManyNorma_origemInputEnvelope
    set?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    disconnect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    delete?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    connect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    update?: Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_origemInput | Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_origemInput[]
    updateMany?: Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_origemInput | Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_origemInput[]
    deleteMany?: Normas_ReferenciadasScalarWhereInput | Normas_ReferenciadasScalarWhereInput[]
  }

  export type Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput = {
    create?: XOR<Normas_ReferenciadasCreateWithoutNorma_destinoInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput> | Normas_ReferenciadasCreateWithoutNorma_destinoInput[] | Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput[]
    connectOrCreate?: Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput | Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput[]
    upsert?: Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_destinoInput | Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_destinoInput[]
    createMany?: Normas_ReferenciadasCreateManyNorma_destinoInputEnvelope
    set?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    disconnect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    delete?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    connect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    update?: Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_destinoInput | Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_destinoInput[]
    updateMany?: Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_destinoInput | Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_destinoInput[]
    deleteMany?: Normas_ReferenciadasScalarWhereInput | Normas_ReferenciadasScalarWhereInput[]
  }

  export type Normas_VersoesUpdateManyWithoutNormaNestedInput = {
    create?: XOR<Normas_VersoesCreateWithoutNormaInput, Normas_VersoesUncheckedCreateWithoutNormaInput> | Normas_VersoesCreateWithoutNormaInput[] | Normas_VersoesUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: Normas_VersoesCreateOrConnectWithoutNormaInput | Normas_VersoesCreateOrConnectWithoutNormaInput[]
    upsert?: Normas_VersoesUpsertWithWhereUniqueWithoutNormaInput | Normas_VersoesUpsertWithWhereUniqueWithoutNormaInput[]
    createMany?: Normas_VersoesCreateManyNormaInputEnvelope
    set?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
    disconnect?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
    delete?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
    connect?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
    update?: Normas_VersoesUpdateWithWhereUniqueWithoutNormaInput | Normas_VersoesUpdateWithWhereUniqueWithoutNormaInput[]
    updateMany?: Normas_VersoesUpdateManyWithWhereWithoutNormaInput | Normas_VersoesUpdateManyWithWhereWithoutNormaInput[]
    deleteMany?: Normas_VersoesScalarWhereInput | Normas_VersoesScalarWhereInput[]
  }

  export type Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput = {
    create?: XOR<Historico_Acesso_NormasCreateWithoutNormasInput, Historico_Acesso_NormasUncheckedCreateWithoutNormasInput> | Historico_Acesso_NormasCreateWithoutNormasInput[] | Historico_Acesso_NormasUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: Historico_Acesso_NormasCreateOrConnectWithoutNormasInput | Historico_Acesso_NormasCreateOrConnectWithoutNormasInput[]
    upsert?: Historico_Acesso_NormasUpsertWithWhereUniqueWithoutNormasInput | Historico_Acesso_NormasUpsertWithWhereUniqueWithoutNormasInput[]
    createMany?: Historico_Acesso_NormasCreateManyNormasInputEnvelope
    set?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    disconnect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    delete?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    connect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    update?: Historico_Acesso_NormasUpdateWithWhereUniqueWithoutNormasInput | Historico_Acesso_NormasUpdateWithWhereUniqueWithoutNormasInput[]
    updateMany?: Historico_Acesso_NormasUpdateManyWithWhereWithoutNormasInput | Historico_Acesso_NormasUpdateManyWithWhereWithoutNormasInput[]
    deleteMany?: Historico_Acesso_NormasScalarWhereInput | Historico_Acesso_NormasScalarWhereInput[]
  }

  export type FavoritosUpdateManyWithoutNormaNestedInput = {
    create?: XOR<FavoritosCreateWithoutNormaInput, FavoritosUncheckedCreateWithoutNormaInput> | FavoritosCreateWithoutNormaInput[] | FavoritosUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: FavoritosCreateOrConnectWithoutNormaInput | FavoritosCreateOrConnectWithoutNormaInput[]
    upsert?: FavoritosUpsertWithWhereUniqueWithoutNormaInput | FavoritosUpsertWithWhereUniqueWithoutNormaInput[]
    createMany?: FavoritosCreateManyNormaInputEnvelope
    set?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    disconnect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    delete?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    connect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    update?: FavoritosUpdateWithWhereUniqueWithoutNormaInput | FavoritosUpdateWithWhereUniqueWithoutNormaInput[]
    updateMany?: FavoritosUpdateManyWithWhereWithoutNormaInput | FavoritosUpdateManyWithWhereWithoutNormaInput[]
    deleteMany?: FavoritosScalarWhereInput | FavoritosScalarWhereInput[]
  }

  export type Norma_CategoriaUpdateManyWithoutNormaNestedInput = {
    create?: XOR<Norma_CategoriaCreateWithoutNormaInput, Norma_CategoriaUncheckedCreateWithoutNormaInput> | Norma_CategoriaCreateWithoutNormaInput[] | Norma_CategoriaUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: Norma_CategoriaCreateOrConnectWithoutNormaInput | Norma_CategoriaCreateOrConnectWithoutNormaInput[]
    upsert?: Norma_CategoriaUpsertWithWhereUniqueWithoutNormaInput | Norma_CategoriaUpsertWithWhereUniqueWithoutNormaInput[]
    createMany?: Norma_CategoriaCreateManyNormaInputEnvelope
    set?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    disconnect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    delete?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    connect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    update?: Norma_CategoriaUpdateWithWhereUniqueWithoutNormaInput | Norma_CategoriaUpdateWithWhereUniqueWithoutNormaInput[]
    updateMany?: Norma_CategoriaUpdateManyWithWhereWithoutNormaInput | Norma_CategoriaUpdateManyWithWhereWithoutNormaInput[]
    deleteMany?: Norma_CategoriaScalarWhereInput | Norma_CategoriaScalarWhereInput[]
  }

  export type PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput = {
    create?: XOR<PedidosdeAlteracaoCreateWithoutNormasInput, PedidosdeAlteracaoUncheckedCreateWithoutNormasInput> | PedidosdeAlteracaoCreateWithoutNormasInput[] | PedidosdeAlteracaoUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: PedidosdeAlteracaoCreateOrConnectWithoutNormasInput | PedidosdeAlteracaoCreateOrConnectWithoutNormasInput[]
    upsert?: PedidosdeAlteracaoUpsertWithWhereUniqueWithoutNormasInput | PedidosdeAlteracaoUpsertWithWhereUniqueWithoutNormasInput[]
    createMany?: PedidosdeAlteracaoCreateManyNormasInputEnvelope
    set?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    disconnect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    delete?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    connect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    update?: PedidosdeAlteracaoUpdateWithWhereUniqueWithoutNormasInput | PedidosdeAlteracaoUpdateWithWhereUniqueWithoutNormasInput[]
    updateMany?: PedidosdeAlteracaoUpdateManyWithWhereWithoutNormasInput | PedidosdeAlteracaoUpdateManyWithWhereWithoutNormasInput[]
    deleteMany?: PedidosdeAlteracaoScalarWhereInput | PedidosdeAlteracaoScalarWhereInput[]
  }

  export type NotasUncheckedUpdateManyWithoutNormasNestedInput = {
    create?: XOR<NotasCreateWithoutNormasInput, NotasUncheckedCreateWithoutNormasInput> | NotasCreateWithoutNormasInput[] | NotasUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: NotasCreateOrConnectWithoutNormasInput | NotasCreateOrConnectWithoutNormasInput[]
    upsert?: NotasUpsertWithWhereUniqueWithoutNormasInput | NotasUpsertWithWhereUniqueWithoutNormasInput[]
    createMany?: NotasCreateManyNormasInputEnvelope
    set?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    disconnect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    delete?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    connect?: NotasWhereUniqueInput | NotasWhereUniqueInput[]
    update?: NotasUpdateWithWhereUniqueWithoutNormasInput | NotasUpdateWithWhereUniqueWithoutNormasInput[]
    updateMany?: NotasUpdateManyWithWhereWithoutNormasInput | NotasUpdateManyWithWhereWithoutNormasInput[]
    deleteMany?: NotasScalarWhereInput | NotasScalarWhereInput[]
  }

  export type Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput = {
    create?: XOR<Normas_ReferenciadasCreateWithoutNorma_origemInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput> | Normas_ReferenciadasCreateWithoutNorma_origemInput[] | Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput[]
    connectOrCreate?: Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput | Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput[]
    upsert?: Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_origemInput | Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_origemInput[]
    createMany?: Normas_ReferenciadasCreateManyNorma_origemInputEnvelope
    set?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    disconnect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    delete?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    connect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    update?: Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_origemInput | Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_origemInput[]
    updateMany?: Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_origemInput | Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_origemInput[]
    deleteMany?: Normas_ReferenciadasScalarWhereInput | Normas_ReferenciadasScalarWhereInput[]
  }

  export type Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput = {
    create?: XOR<Normas_ReferenciadasCreateWithoutNorma_destinoInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput> | Normas_ReferenciadasCreateWithoutNorma_destinoInput[] | Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput[]
    connectOrCreate?: Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput | Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput[]
    upsert?: Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_destinoInput | Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_destinoInput[]
    createMany?: Normas_ReferenciadasCreateManyNorma_destinoInputEnvelope
    set?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    disconnect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    delete?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    connect?: Normas_ReferenciadasWhereUniqueInput | Normas_ReferenciadasWhereUniqueInput[]
    update?: Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_destinoInput | Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_destinoInput[]
    updateMany?: Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_destinoInput | Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_destinoInput[]
    deleteMany?: Normas_ReferenciadasScalarWhereInput | Normas_ReferenciadasScalarWhereInput[]
  }

  export type Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput = {
    create?: XOR<Normas_VersoesCreateWithoutNormaInput, Normas_VersoesUncheckedCreateWithoutNormaInput> | Normas_VersoesCreateWithoutNormaInput[] | Normas_VersoesUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: Normas_VersoesCreateOrConnectWithoutNormaInput | Normas_VersoesCreateOrConnectWithoutNormaInput[]
    upsert?: Normas_VersoesUpsertWithWhereUniqueWithoutNormaInput | Normas_VersoesUpsertWithWhereUniqueWithoutNormaInput[]
    createMany?: Normas_VersoesCreateManyNormaInputEnvelope
    set?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
    disconnect?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
    delete?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
    connect?: Normas_VersoesWhereUniqueInput | Normas_VersoesWhereUniqueInput[]
    update?: Normas_VersoesUpdateWithWhereUniqueWithoutNormaInput | Normas_VersoesUpdateWithWhereUniqueWithoutNormaInput[]
    updateMany?: Normas_VersoesUpdateManyWithWhereWithoutNormaInput | Normas_VersoesUpdateManyWithWhereWithoutNormaInput[]
    deleteMany?: Normas_VersoesScalarWhereInput | Normas_VersoesScalarWhereInput[]
  }

  export type Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput = {
    create?: XOR<Historico_Acesso_NormasCreateWithoutNormasInput, Historico_Acesso_NormasUncheckedCreateWithoutNormasInput> | Historico_Acesso_NormasCreateWithoutNormasInput[] | Historico_Acesso_NormasUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: Historico_Acesso_NormasCreateOrConnectWithoutNormasInput | Historico_Acesso_NormasCreateOrConnectWithoutNormasInput[]
    upsert?: Historico_Acesso_NormasUpsertWithWhereUniqueWithoutNormasInput | Historico_Acesso_NormasUpsertWithWhereUniqueWithoutNormasInput[]
    createMany?: Historico_Acesso_NormasCreateManyNormasInputEnvelope
    set?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    disconnect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    delete?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    connect?: Historico_Acesso_NormasWhereUniqueInput | Historico_Acesso_NormasWhereUniqueInput[]
    update?: Historico_Acesso_NormasUpdateWithWhereUniqueWithoutNormasInput | Historico_Acesso_NormasUpdateWithWhereUniqueWithoutNormasInput[]
    updateMany?: Historico_Acesso_NormasUpdateManyWithWhereWithoutNormasInput | Historico_Acesso_NormasUpdateManyWithWhereWithoutNormasInput[]
    deleteMany?: Historico_Acesso_NormasScalarWhereInput | Historico_Acesso_NormasScalarWhereInput[]
  }

  export type FavoritosUncheckedUpdateManyWithoutNormaNestedInput = {
    create?: XOR<FavoritosCreateWithoutNormaInput, FavoritosUncheckedCreateWithoutNormaInput> | FavoritosCreateWithoutNormaInput[] | FavoritosUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: FavoritosCreateOrConnectWithoutNormaInput | FavoritosCreateOrConnectWithoutNormaInput[]
    upsert?: FavoritosUpsertWithWhereUniqueWithoutNormaInput | FavoritosUpsertWithWhereUniqueWithoutNormaInput[]
    createMany?: FavoritosCreateManyNormaInputEnvelope
    set?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    disconnect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    delete?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    connect?: FavoritosWhereUniqueInput | FavoritosWhereUniqueInput[]
    update?: FavoritosUpdateWithWhereUniqueWithoutNormaInput | FavoritosUpdateWithWhereUniqueWithoutNormaInput[]
    updateMany?: FavoritosUpdateManyWithWhereWithoutNormaInput | FavoritosUpdateManyWithWhereWithoutNormaInput[]
    deleteMany?: FavoritosScalarWhereInput | FavoritosScalarWhereInput[]
  }

  export type Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput = {
    create?: XOR<Norma_CategoriaCreateWithoutNormaInput, Norma_CategoriaUncheckedCreateWithoutNormaInput> | Norma_CategoriaCreateWithoutNormaInput[] | Norma_CategoriaUncheckedCreateWithoutNormaInput[]
    connectOrCreate?: Norma_CategoriaCreateOrConnectWithoutNormaInput | Norma_CategoriaCreateOrConnectWithoutNormaInput[]
    upsert?: Norma_CategoriaUpsertWithWhereUniqueWithoutNormaInput | Norma_CategoriaUpsertWithWhereUniqueWithoutNormaInput[]
    createMany?: Norma_CategoriaCreateManyNormaInputEnvelope
    set?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    disconnect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    delete?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    connect?: Norma_CategoriaWhereUniqueInput | Norma_CategoriaWhereUniqueInput[]
    update?: Norma_CategoriaUpdateWithWhereUniqueWithoutNormaInput | Norma_CategoriaUpdateWithWhereUniqueWithoutNormaInput[]
    updateMany?: Norma_CategoriaUpdateManyWithWhereWithoutNormaInput | Norma_CategoriaUpdateManyWithWhereWithoutNormaInput[]
    deleteMany?: Norma_CategoriaScalarWhereInput | Norma_CategoriaScalarWhereInput[]
  }

  export type PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput = {
    create?: XOR<PedidosdeAlteracaoCreateWithoutNormasInput, PedidosdeAlteracaoUncheckedCreateWithoutNormasInput> | PedidosdeAlteracaoCreateWithoutNormasInput[] | PedidosdeAlteracaoUncheckedCreateWithoutNormasInput[]
    connectOrCreate?: PedidosdeAlteracaoCreateOrConnectWithoutNormasInput | PedidosdeAlteracaoCreateOrConnectWithoutNormasInput[]
    upsert?: PedidosdeAlteracaoUpsertWithWhereUniqueWithoutNormasInput | PedidosdeAlteracaoUpsertWithWhereUniqueWithoutNormasInput[]
    createMany?: PedidosdeAlteracaoCreateManyNormasInputEnvelope
    set?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    disconnect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    delete?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    connect?: PedidosdeAlteracaoWhereUniqueInput | PedidosdeAlteracaoWhereUniqueInput[]
    update?: PedidosdeAlteracaoUpdateWithWhereUniqueWithoutNormasInput | PedidosdeAlteracaoUpdateWithWhereUniqueWithoutNormasInput[]
    updateMany?: PedidosdeAlteracaoUpdateManyWithWhereWithoutNormasInput | PedidosdeAlteracaoUpdateManyWithWhereWithoutNormasInput[]
    deleteMany?: PedidosdeAlteracaoScalarWhereInput | PedidosdeAlteracaoScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutNotasInput = {
    create?: XOR<UsersCreateWithoutNotasInput, UsersUncheckedCreateWithoutNotasInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotasInput
    connect?: UsersWhereUniqueInput
  }

  export type NormaCreateNestedOneWithoutNotasInput = {
    create?: XOR<NormaCreateWithoutNotasInput, NormaUncheckedCreateWithoutNotasInput>
    connectOrCreate?: NormaCreateOrConnectWithoutNotasInput
    connect?: NormaWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<UsersCreateWithoutNotasInput, UsersUncheckedCreateWithoutNotasInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotasInput
    upsert?: UsersUpsertWithoutNotasInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotasInput, UsersUpdateWithoutNotasInput>, UsersUncheckedUpdateWithoutNotasInput>
  }

  export type NormaUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<NormaCreateWithoutNotasInput, NormaUncheckedCreateWithoutNotasInput>
    connectOrCreate?: NormaCreateOrConnectWithoutNotasInput
    upsert?: NormaUpsertWithoutNotasInput
    connect?: NormaWhereUniqueInput
    update?: XOR<XOR<NormaUpdateToOneWithWhereWithoutNotasInput, NormaUpdateWithoutNotasInput>, NormaUncheckedUpdateWithoutNotasInput>
  }

  export type CategoriaCreateNestedOneWithoutNorma_catInput = {
    create?: XOR<CategoriaCreateWithoutNorma_catInput, CategoriaUncheckedCreateWithoutNorma_catInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutNorma_catInput
    connect?: CategoriaWhereUniqueInput
  }

  export type NormaCreateNestedOneWithoutCategoriaInput = {
    create?: XOR<NormaCreateWithoutCategoriaInput, NormaUncheckedCreateWithoutCategoriaInput>
    connectOrCreate?: NormaCreateOrConnectWithoutCategoriaInput
    connect?: NormaWhereUniqueInput
  }

  export type CategoriaUpdateOneRequiredWithoutNorma_catNestedInput = {
    create?: XOR<CategoriaCreateWithoutNorma_catInput, CategoriaUncheckedCreateWithoutNorma_catInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutNorma_catInput
    upsert?: CategoriaUpsertWithoutNorma_catInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutNorma_catInput, CategoriaUpdateWithoutNorma_catInput>, CategoriaUncheckedUpdateWithoutNorma_catInput>
  }

  export type NormaUpdateOneRequiredWithoutCategoriaNestedInput = {
    create?: XOR<NormaCreateWithoutCategoriaInput, NormaUncheckedCreateWithoutCategoriaInput>
    connectOrCreate?: NormaCreateOrConnectWithoutCategoriaInput
    upsert?: NormaUpsertWithoutCategoriaInput
    connect?: NormaWhereUniqueInput
    update?: XOR<XOR<NormaUpdateToOneWithWhereWithoutCategoriaInput, NormaUpdateWithoutCategoriaInput>, NormaUncheckedUpdateWithoutCategoriaInput>
  }

  export type NormaCreateNestedOneWithoutNormas_origemInput = {
    create?: XOR<NormaCreateWithoutNormas_origemInput, NormaUncheckedCreateWithoutNormas_origemInput>
    connectOrCreate?: NormaCreateOrConnectWithoutNormas_origemInput
    connect?: NormaWhereUniqueInput
  }

  export type NormaCreateNestedOneWithoutNormas_destinoInput = {
    create?: XOR<NormaCreateWithoutNormas_destinoInput, NormaUncheckedCreateWithoutNormas_destinoInput>
    connectOrCreate?: NormaCreateOrConnectWithoutNormas_destinoInput
    connect?: NormaWhereUniqueInput
  }

  export type NormaUpdateOneRequiredWithoutNormas_origemNestedInput = {
    create?: XOR<NormaCreateWithoutNormas_origemInput, NormaUncheckedCreateWithoutNormas_origemInput>
    connectOrCreate?: NormaCreateOrConnectWithoutNormas_origemInput
    upsert?: NormaUpsertWithoutNormas_origemInput
    connect?: NormaWhereUniqueInput
    update?: XOR<XOR<NormaUpdateToOneWithWhereWithoutNormas_origemInput, NormaUpdateWithoutNormas_origemInput>, NormaUncheckedUpdateWithoutNormas_origemInput>
  }

  export type NormaUpdateOneRequiredWithoutNormas_destinoNestedInput = {
    create?: XOR<NormaCreateWithoutNormas_destinoInput, NormaUncheckedCreateWithoutNormas_destinoInput>
    connectOrCreate?: NormaCreateOrConnectWithoutNormas_destinoInput
    upsert?: NormaUpsertWithoutNormas_destinoInput
    connect?: NormaWhereUniqueInput
    update?: XOR<XOR<NormaUpdateToOneWithWhereWithoutNormas_destinoInput, NormaUpdateWithoutNormas_destinoInput>, NormaUncheckedUpdateWithoutNormas_destinoInput>
  }

  export type NormaCreateNestedOneWithoutVersoesInput = {
    create?: XOR<NormaCreateWithoutVersoesInput, NormaUncheckedCreateWithoutVersoesInput>
    connectOrCreate?: NormaCreateOrConnectWithoutVersoesInput
    connect?: NormaWhereUniqueInput
  }

  export type NormaUpdateOneRequiredWithoutVersoesNestedInput = {
    create?: XOR<NormaCreateWithoutVersoesInput, NormaUncheckedCreateWithoutVersoesInput>
    connectOrCreate?: NormaCreateOrConnectWithoutVersoesInput
    upsert?: NormaUpsertWithoutVersoesInput
    connect?: NormaWhereUniqueInput
    update?: XOR<XOR<NormaUpdateToOneWithWhereWithoutVersoesInput, NormaUpdateWithoutVersoesInput>, NormaUncheckedUpdateWithoutVersoesInput>
  }

  export type UsersCreateNestedOneWithoutMfaInput = {
    create?: XOR<UsersCreateWithoutMfaInput, UsersUncheckedCreateWithoutMfaInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMfaInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutMfaNestedInput = {
    create?: XOR<UsersCreateWithoutMfaInput, UsersUncheckedCreateWithoutMfaInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMfaInput
    upsert?: UsersUpsertWithoutMfaInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMfaInput, UsersUpdateWithoutMfaInput>, UsersUncheckedUpdateWithoutMfaInput>
  }

  export type UsersCreateNestedOneWithoutHistoricoAcessoNormasInput = {
    create?: XOR<UsersCreateWithoutHistoricoAcessoNormasInput, UsersUncheckedCreateWithoutHistoricoAcessoNormasInput>
    connectOrCreate?: UsersCreateOrConnectWithoutHistoricoAcessoNormasInput
    connect?: UsersWhereUniqueInput
  }

  export type NormaCreateNestedOneWithoutHistoricoAcessoNormasInput = {
    create?: XOR<NormaCreateWithoutHistoricoAcessoNormasInput, NormaUncheckedCreateWithoutHistoricoAcessoNormasInput>
    connectOrCreate?: NormaCreateOrConnectWithoutHistoricoAcessoNormasInput
    connect?: NormaWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutHistoricoAcessoNormasNestedInput = {
    create?: XOR<UsersCreateWithoutHistoricoAcessoNormasInput, UsersUncheckedCreateWithoutHistoricoAcessoNormasInput>
    connectOrCreate?: UsersCreateOrConnectWithoutHistoricoAcessoNormasInput
    upsert?: UsersUpsertWithoutHistoricoAcessoNormasInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutHistoricoAcessoNormasInput, UsersUpdateWithoutHistoricoAcessoNormasInput>, UsersUncheckedUpdateWithoutHistoricoAcessoNormasInput>
  }

  export type NormaUpdateOneRequiredWithoutHistoricoAcessoNormasNestedInput = {
    create?: XOR<NormaCreateWithoutHistoricoAcessoNormasInput, NormaUncheckedCreateWithoutHistoricoAcessoNormasInput>
    connectOrCreate?: NormaCreateOrConnectWithoutHistoricoAcessoNormasInput
    upsert?: NormaUpsertWithoutHistoricoAcessoNormasInput
    connect?: NormaWhereUniqueInput
    update?: XOR<XOR<NormaUpdateToOneWithWhereWithoutHistoricoAcessoNormasInput, NormaUpdateWithoutHistoricoAcessoNormasInput>, NormaUncheckedUpdateWithoutHistoricoAcessoNormasInput>
  }

  export type UsersCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsersCreateWithoutPedidosInput, UsersUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPedidosInput
    connect?: UsersWhereUniqueInput
  }

  export type NormaCreateNestedOneWithoutPedidosInput = {
    create?: XOR<NormaCreateWithoutPedidosInput, NormaUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: NormaCreateOrConnectWithoutPedidosInput
    connect?: NormaWhereUniqueInput
  }

  export type EnumAcaoDeAlteracaoFieldUpdateOperationsInput = {
    set?: $Enums.AcaoDeAlteracao
  }

  export type EnumNotaOrNormaFieldUpdateOperationsInput = {
    set?: $Enums.NotaOrNorma
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UsersUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsersCreateWithoutPedidosInput, UsersUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPedidosInput
    upsert?: UsersUpsertWithoutPedidosInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPedidosInput, UsersUpdateWithoutPedidosInput>, UsersUncheckedUpdateWithoutPedidosInput>
  }

  export type NormaUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<NormaCreateWithoutPedidosInput, NormaUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: NormaCreateOrConnectWithoutPedidosInput
    upsert?: NormaUpsertWithoutPedidosInput
    disconnect?: NormaWhereInput | boolean
    delete?: NormaWhereInput | boolean
    connect?: NormaWhereUniqueInput
    update?: XOR<XOR<NormaUpdateToOneWithWhereWithoutPedidosInput, NormaUpdateWithoutPedidosInput>, NormaUncheckedUpdateWithoutPedidosInput>
  }

  export type UsersCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<UsersCreateWithoutFavoritosInput, UsersUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFavoritosInput
    connect?: UsersWhereUniqueInput
  }

  export type NormaCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<NormaCreateWithoutFavoritosInput, NormaUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: NormaCreateOrConnectWithoutFavoritosInput
    connect?: NormaWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<UsersCreateWithoutFavoritosInput, UsersUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFavoritosInput
    upsert?: UsersUpsertWithoutFavoritosInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFavoritosInput, UsersUpdateWithoutFavoritosInput>, UsersUncheckedUpdateWithoutFavoritosInput>
  }

  export type NormaUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<NormaCreateWithoutFavoritosInput, NormaUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: NormaCreateOrConnectWithoutFavoritosInput
    upsert?: NormaUpsertWithoutFavoritosInput
    connect?: NormaWhereUniqueInput
    update?: XOR<XOR<NormaUpdateToOneWithWhereWithoutFavoritosInput, NormaUpdateWithoutFavoritosInput>, NormaUncheckedUpdateWithoutFavoritosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumNivelUserFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelUser | EnumNivelUserFieldRefInput<$PrismaModel>
    in?: $Enums.NivelUser[]
    notIn?: $Enums.NivelUser[]
    not?: NestedEnumNivelUserFilter<$PrismaModel> | $Enums.NivelUser
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumNivelUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelUser | EnumNivelUserFieldRefInput<$PrismaModel>
    in?: $Enums.NivelUser[]
    notIn?: $Enums.NivelUser[]
    not?: NestedEnumNivelUserWithAggregatesFilter<$PrismaModel> | $Enums.NivelUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNivelUserFilter<$PrismaModel>
    _max?: NestedEnumNivelUserFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAcaoDeAlteracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoDeAlteracao | EnumAcaoDeAlteracaoFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoDeAlteracao[]
    notIn?: $Enums.AcaoDeAlteracao[]
    not?: NestedEnumAcaoDeAlteracaoFilter<$PrismaModel> | $Enums.AcaoDeAlteracao
  }

  export type NestedEnumNotaOrNormaFilter<$PrismaModel = never> = {
    equals?: $Enums.NotaOrNorma | EnumNotaOrNormaFieldRefInput<$PrismaModel>
    in?: $Enums.NotaOrNorma[]
    notIn?: $Enums.NotaOrNorma[]
    not?: NestedEnumNotaOrNormaFilter<$PrismaModel> | $Enums.NotaOrNorma
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAcaoDeAlteracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcaoDeAlteracao | EnumAcaoDeAlteracaoFieldRefInput<$PrismaModel>
    in?: $Enums.AcaoDeAlteracao[]
    notIn?: $Enums.AcaoDeAlteracao[]
    not?: NestedEnumAcaoDeAlteracaoWithAggregatesFilter<$PrismaModel> | $Enums.AcaoDeAlteracao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcaoDeAlteracaoFilter<$PrismaModel>
    _max?: NestedEnumAcaoDeAlteracaoFilter<$PrismaModel>
  }

  export type NestedEnumNotaOrNormaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotaOrNorma | EnumNotaOrNormaFieldRefInput<$PrismaModel>
    in?: $Enums.NotaOrNorma[]
    notIn?: $Enums.NotaOrNorma[]
    not?: NestedEnumNotaOrNormaWithAggregatesFilter<$PrismaModel> | $Enums.NotaOrNorma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotaOrNormaFilter<$PrismaModel>
    _max?: NestedEnumNotaOrNormaFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type OrgaosCreateWithoutUsuariosInput = {
    org_desc: string
    org_sigla: string
    normas?: NormaCreateNestedManyWithoutOrgaosInput
  }

  export type OrgaosUncheckedCreateWithoutUsuariosInput = {
    org_id?: number
    org_desc: string
    org_sigla: string
    normas?: NormaUncheckedCreateNestedManyWithoutOrgaosInput
  }

  export type OrgaosCreateOrConnectWithoutUsuariosInput = {
    where: OrgaosWhereUniqueInput
    create: XOR<OrgaosCreateWithoutUsuariosInput, OrgaosUncheckedCreateWithoutUsuariosInput>
  }

  export type OrgaosCreateManyUsuariosInputEnvelope = {
    data: OrgaosCreateManyUsuariosInput | OrgaosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaCreateWithoutUsuarioInput = {
    cat_nome: string
    data_criacao?: Date | string
    norma_cat?: Norma_CategoriaCreateNestedManyWithoutCatInput
  }

  export type CategoriaUncheckedCreateWithoutUsuarioInput = {
    cat_id?: number
    cat_nome: string
    data_criacao?: Date | string
    norma_cat?: Norma_CategoriaUncheckedCreateNestedManyWithoutCatInput
  }

  export type CategoriaCreateOrConnectWithoutUsuarioInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type CategoriaCreateManyUsuarioInputEnvelope = {
    data: CategoriaCreateManyUsuarioInput | CategoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type NormaCreateWithoutUsuarioInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutUsuarioInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutUsuarioInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutUsuarioInput, NormaUncheckedCreateWithoutUsuarioInput>
  }

  export type NormaCreateManyUsuarioInputEnvelope = {
    data: NormaCreateManyUsuarioInput | NormaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type NotasCreateWithoutUsuarioInput = {
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    data_criacao?: Date | string
    normas: NormaCreateNestedOneWithoutNotasInput
  }

  export type NotasUncheckedCreateWithoutUsuarioInput = {
    id_not?: number
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    norm_criador: number
    data_criacao?: Date | string
  }

  export type NotasCreateOrConnectWithoutUsuarioInput = {
    where: NotasWhereUniqueInput
    create: XOR<NotasCreateWithoutUsuarioInput, NotasUncheckedCreateWithoutUsuarioInput>
  }

  export type NotasCreateManyUsuarioInputEnvelope = {
    data: NotasCreateManyUsuarioInput | NotasCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MfaCreateWithoutUsuarioInput = {
    cod_mfa: string
    cod_data_cricao?: Date | string
  }

  export type MfaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cod_mfa: string
    cod_data_cricao?: Date | string
  }

  export type MfaCreateOrConnectWithoutUsuarioInput = {
    where: MfaWhereUniqueInput
    create: XOR<MfaCreateWithoutUsuarioInput, MfaUncheckedCreateWithoutUsuarioInput>
  }

  export type MfaCreateManyUsuarioInputEnvelope = {
    data: MfaCreateManyUsuarioInput | MfaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FavoritosCreateWithoutUsuarioInput = {
    data_criacao?: Date | string
    norma: NormaCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritosUncheckedCreateWithoutUsuarioInput = {
    id_norma: number
    data_criacao?: Date | string
  }

  export type FavoritosCreateOrConnectWithoutUsuarioInput = {
    where: FavoritosWhereUniqueInput
    create: XOR<FavoritosCreateWithoutUsuarioInput, FavoritosUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritosCreateManyUsuarioInputEnvelope = {
    data: FavoritosCreateManyUsuarioInput | FavoritosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type Historico_Acesso_NormasCreateWithoutUsuariosInput = {
    data_acesso?: Date | string
    normas: NormaCreateNestedOneWithoutHistoricoAcessoNormasInput
  }

  export type Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput = {
    id_norma: number
    data_acesso?: Date | string
  }

  export type Historico_Acesso_NormasCreateOrConnectWithoutUsuariosInput = {
    where: Historico_Acesso_NormasWhereUniqueInput
    create: XOR<Historico_Acesso_NormasCreateWithoutUsuariosInput, Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput>
  }

  export type Historico_Acesso_NormasCreateManyUsuariosInputEnvelope = {
    data: Historico_Acesso_NormasCreateManyUsuariosInput | Historico_Acesso_NormasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type PedidosdeAlteracaoCreateWithoutUsuariosInput = {
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
    normas?: NormaCreateNestedOneWithoutPedidosInput
  }

  export type PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
    id_norma?: number | null
  }

  export type PedidosdeAlteracaoCreateOrConnectWithoutUsuariosInput = {
    where: PedidosdeAlteracaoWhereUniqueInput
    create: XOR<PedidosdeAlteracaoCreateWithoutUsuariosInput, PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput>
  }

  export type PedidosdeAlteracaoCreateManyUsuariosInputEnvelope = {
    data: PedidosdeAlteracaoCreateManyUsuariosInput | PedidosdeAlteracaoCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type OrgaosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: OrgaosWhereUniqueInput
    update: XOR<OrgaosUpdateWithoutUsuariosInput, OrgaosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<OrgaosCreateWithoutUsuariosInput, OrgaosUncheckedCreateWithoutUsuariosInput>
  }

  export type OrgaosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: OrgaosWhereUniqueInput
    data: XOR<OrgaosUpdateWithoutUsuariosInput, OrgaosUncheckedUpdateWithoutUsuariosInput>
  }

  export type OrgaosUpdateManyWithWhereWithoutUsuariosInput = {
    where: OrgaosScalarWhereInput
    data: XOR<OrgaosUpdateManyMutationInput, OrgaosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type OrgaosScalarWhereInput = {
    AND?: OrgaosScalarWhereInput | OrgaosScalarWhereInput[]
    OR?: OrgaosScalarWhereInput[]
    NOT?: OrgaosScalarWhereInput | OrgaosScalarWhereInput[]
    org_id?: IntFilter<"Orgaos"> | number
    org_desc?: StringFilter<"Orgaos"> | string
    org_sigla?: StringFilter<"Orgaos"> | string
    adm_criador?: IntNullableFilter<"Orgaos"> | number | null
  }

  export type CategoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutUsuarioInput, CategoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutUsuarioInput, CategoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    cat_id?: IntFilter<"Categoria"> | number
    cat_nome?: StringFilter<"Categoria"> | string
    adm_criador?: IntFilter<"Categoria"> | number
    data_criacao?: DateTimeFilter<"Categoria"> | Date | string
  }

  export type NormaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NormaWhereUniqueInput
    update: XOR<NormaUpdateWithoutUsuarioInput, NormaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NormaCreateWithoutUsuarioInput, NormaUncheckedCreateWithoutUsuarioInput>
  }

  export type NormaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NormaWhereUniqueInput
    data: XOR<NormaUpdateWithoutUsuarioInput, NormaUncheckedUpdateWithoutUsuarioInput>
  }

  export type NormaUpdateManyWithWhereWithoutUsuarioInput = {
    where: NormaScalarWhereInput
    data: XOR<NormaUpdateManyMutationInput, NormaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type NormaScalarWhereInput = {
    AND?: NormaScalarWhereInput | NormaScalarWhereInput[]
    OR?: NormaScalarWhereInput[]
    NOT?: NormaScalarWhereInput | NormaScalarWhereInput[]
    id_norm?: IntFilter<"Norma"> | number
    norm_titulo?: StringFilter<"Norma"> | string
    norm_desc?: StringFilter<"Norma"> | string
    org_criador?: IntFilter<"Norma"> | number
    adm_criador?: IntFilter<"Norma"> | number
    emissao?: DateTimeFilter<"Norma"> | Date | string
    norm_codigo?: StringFilter<"Norma"> | string
    data_criacao?: DateTimeFilter<"Norma"> | Date | string
    data_update?: DateTimeFilter<"Norma"> | Date | string
    pdf_nome_original?: StringFilter<"Norma"> | string
    pdf_caminho?: StringFilter<"Norma"> | string
  }

  export type NotasUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NotasWhereUniqueInput
    update: XOR<NotasUpdateWithoutUsuarioInput, NotasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NotasCreateWithoutUsuarioInput, NotasUncheckedCreateWithoutUsuarioInput>
  }

  export type NotasUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NotasWhereUniqueInput
    data: XOR<NotasUpdateWithoutUsuarioInput, NotasUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotasUpdateManyWithWhereWithoutUsuarioInput = {
    where: NotasScalarWhereInput
    data: XOR<NotasUpdateManyMutationInput, NotasUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type NotasScalarWhereInput = {
    AND?: NotasScalarWhereInput | NotasScalarWhereInput[]
    OR?: NotasScalarWhereInput[]
    NOT?: NotasScalarWhereInput | NotasScalarWhereInput[]
    id_not?: IntFilter<"Notas"> | number
    not_titulo?: StringFilter<"Notas"> | string
    not_IT?: StringFilter<"Notas"> | string
    not_AB?: StringNullableFilter<"Notas"> | string | null
    not_Pa?: StringNullableFilter<"Notas"> | string | null
    norm_criador?: IntFilter<"Notas"> | number
    adm_criador?: IntFilter<"Notas"> | number
    data_criacao?: DateTimeFilter<"Notas"> | Date | string
  }

  export type MfaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MfaWhereUniqueInput
    update: XOR<MfaUpdateWithoutUsuarioInput, MfaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MfaCreateWithoutUsuarioInput, MfaUncheckedCreateWithoutUsuarioInput>
  }

  export type MfaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MfaWhereUniqueInput
    data: XOR<MfaUpdateWithoutUsuarioInput, MfaUncheckedUpdateWithoutUsuarioInput>
  }

  export type MfaUpdateManyWithWhereWithoutUsuarioInput = {
    where: MfaScalarWhereInput
    data: XOR<MfaUpdateManyMutationInput, MfaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MfaScalarWhereInput = {
    AND?: MfaScalarWhereInput | MfaScalarWhereInput[]
    OR?: MfaScalarWhereInput[]
    NOT?: MfaScalarWhereInput | MfaScalarWhereInput[]
    id?: IntFilter<"Mfa"> | number
    user_id_FK?: IntFilter<"Mfa"> | number
    cod_mfa?: StringFilter<"Mfa"> | string
    cod_data_cricao?: DateTimeFilter<"Mfa"> | Date | string
  }

  export type FavoritosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritosWhereUniqueInput
    update: XOR<FavoritosUpdateWithoutUsuarioInput, FavoritosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FavoritosCreateWithoutUsuarioInput, FavoritosUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritosWhereUniqueInput
    data: XOR<FavoritosUpdateWithoutUsuarioInput, FavoritosUncheckedUpdateWithoutUsuarioInput>
  }

  export type FavoritosUpdateManyWithWhereWithoutUsuarioInput = {
    where: FavoritosScalarWhereInput
    data: XOR<FavoritosUpdateManyMutationInput, FavoritosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FavoritosScalarWhereInput = {
    AND?: FavoritosScalarWhereInput | FavoritosScalarWhereInput[]
    OR?: FavoritosScalarWhereInput[]
    NOT?: FavoritosScalarWhereInput | FavoritosScalarWhereInput[]
    id_user?: IntFilter<"Favoritos"> | number
    id_norma?: IntFilter<"Favoritos"> | number
    data_criacao?: DateTimeFilter<"Favoritos"> | Date | string
  }

  export type Historico_Acesso_NormasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: Historico_Acesso_NormasWhereUniqueInput
    update: XOR<Historico_Acesso_NormasUpdateWithoutUsuariosInput, Historico_Acesso_NormasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<Historico_Acesso_NormasCreateWithoutUsuariosInput, Historico_Acesso_NormasUncheckedCreateWithoutUsuariosInput>
  }

  export type Historico_Acesso_NormasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: Historico_Acesso_NormasWhereUniqueInput
    data: XOR<Historico_Acesso_NormasUpdateWithoutUsuariosInput, Historico_Acesso_NormasUncheckedUpdateWithoutUsuariosInput>
  }

  export type Historico_Acesso_NormasUpdateManyWithWhereWithoutUsuariosInput = {
    where: Historico_Acesso_NormasScalarWhereInput
    data: XOR<Historico_Acesso_NormasUpdateManyMutationInput, Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type Historico_Acesso_NormasScalarWhereInput = {
    AND?: Historico_Acesso_NormasScalarWhereInput | Historico_Acesso_NormasScalarWhereInput[]
    OR?: Historico_Acesso_NormasScalarWhereInput[]
    NOT?: Historico_Acesso_NormasScalarWhereInput | Historico_Acesso_NormasScalarWhereInput[]
    id_user?: IntFilter<"Historico_Acesso_Normas"> | number
    id_norma?: IntFilter<"Historico_Acesso_Normas"> | number
    data_acesso?: DateTimeFilter<"Historico_Acesso_Normas"> | Date | string
  }

  export type PedidosdeAlteracaoUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: PedidosdeAlteracaoWhereUniqueInput
    update: XOR<PedidosdeAlteracaoUpdateWithoutUsuariosInput, PedidosdeAlteracaoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PedidosdeAlteracaoCreateWithoutUsuariosInput, PedidosdeAlteracaoUncheckedCreateWithoutUsuariosInput>
  }

  export type PedidosdeAlteracaoUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: PedidosdeAlteracaoWhereUniqueInput
    data: XOR<PedidosdeAlteracaoUpdateWithoutUsuariosInput, PedidosdeAlteracaoUncheckedUpdateWithoutUsuariosInput>
  }

  export type PedidosdeAlteracaoUpdateManyWithWhereWithoutUsuariosInput = {
    where: PedidosdeAlteracaoScalarWhereInput
    data: XOR<PedidosdeAlteracaoUpdateManyMutationInput, PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type PedidosdeAlteracaoScalarWhereInput = {
    AND?: PedidosdeAlteracaoScalarWhereInput | PedidosdeAlteracaoScalarWhereInput[]
    OR?: PedidosdeAlteracaoScalarWhereInput[]
    NOT?: PedidosdeAlteracaoScalarWhereInput | PedidosdeAlteracaoScalarWhereInput[]
    id?: IntFilter<"PedidosdeAlteracao"> | number
    id_user?: IntFilter<"PedidosdeAlteracao"> | number
    alteracao?: JsonFilter<"PedidosdeAlteracao">
    acaoDealteracao?: EnumAcaoDeAlteracaoFilter<"PedidosdeAlteracao"> | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFilter<"PedidosdeAlteracao"> | $Enums.NotaOrNorma
    status?: EnumStatusFilter<"PedidosdeAlteracao"> | $Enums.Status
    data_pedido?: DateTimeFilter<"PedidosdeAlteracao"> | Date | string
    id_norma?: IntNullableFilter<"PedidosdeAlteracao"> | number | null
  }

  export type NormaCreateWithoutOrgaosInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutOrgaosInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutOrgaosInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutOrgaosInput, NormaUncheckedCreateWithoutOrgaosInput>
  }

  export type NormaCreateManyOrgaosInputEnvelope = {
    data: NormaCreateManyOrgaosInput | NormaCreateManyOrgaosInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutOrgaosInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    categoria?: CategoriaCreateNestedManyWithoutUsuarioInput
    normas?: NormaCreateNestedManyWithoutUsuarioInput
    notas?: NotasCreateNestedManyWithoutUsuarioInput
    mfa?: MfaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateWithoutOrgaosInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    categoria?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    normas?: NormaUncheckedCreateNestedManyWithoutUsuarioInput
    notas?: NotasUncheckedCreateNestedManyWithoutUsuarioInput
    mfa?: MfaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersCreateOrConnectWithoutOrgaosInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrgaosInput, UsersUncheckedCreateWithoutOrgaosInput>
  }

  export type NormaUpsertWithWhereUniqueWithoutOrgaosInput = {
    where: NormaWhereUniqueInput
    update: XOR<NormaUpdateWithoutOrgaosInput, NormaUncheckedUpdateWithoutOrgaosInput>
    create: XOR<NormaCreateWithoutOrgaosInput, NormaUncheckedCreateWithoutOrgaosInput>
  }

  export type NormaUpdateWithWhereUniqueWithoutOrgaosInput = {
    where: NormaWhereUniqueInput
    data: XOR<NormaUpdateWithoutOrgaosInput, NormaUncheckedUpdateWithoutOrgaosInput>
  }

  export type NormaUpdateManyWithWhereWithoutOrgaosInput = {
    where: NormaScalarWhereInput
    data: XOR<NormaUpdateManyMutationInput, NormaUncheckedUpdateManyWithoutOrgaosInput>
  }

  export type UsersUpsertWithoutOrgaosInput = {
    update: XOR<UsersUpdateWithoutOrgaosInput, UsersUncheckedUpdateWithoutOrgaosInput>
    create: XOR<UsersCreateWithoutOrgaosInput, UsersUncheckedCreateWithoutOrgaosInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrgaosInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrgaosInput, UsersUncheckedUpdateWithoutOrgaosInput>
  }

  export type UsersUpdateWithoutOrgaosInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    categoria?: CategoriaUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrgaosInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    categoria?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUncheckedUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUncheckedUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type Norma_CategoriaCreateWithoutCatInput = {
    norma: NormaCreateNestedOneWithoutCategoriaInput
  }

  export type Norma_CategoriaUncheckedCreateWithoutCatInput = {
    id_norma: number
  }

  export type Norma_CategoriaCreateOrConnectWithoutCatInput = {
    where: Norma_CategoriaWhereUniqueInput
    create: XOR<Norma_CategoriaCreateWithoutCatInput, Norma_CategoriaUncheckedCreateWithoutCatInput>
  }

  export type Norma_CategoriaCreateManyCatInputEnvelope = {
    data: Norma_CategoriaCreateManyCatInput | Norma_CategoriaCreateManyCatInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutCategoriaInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosCreateNestedManyWithoutUsuariosInput
    normas?: NormaCreateNestedManyWithoutUsuarioInput
    notas?: NotasCreateNestedManyWithoutUsuarioInput
    mfa?: MfaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateWithoutCategoriaInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosUncheckedCreateNestedManyWithoutUsuariosInput
    normas?: NormaUncheckedCreateNestedManyWithoutUsuarioInput
    notas?: NotasUncheckedCreateNestedManyWithoutUsuarioInput
    mfa?: MfaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersCreateOrConnectWithoutCategoriaInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCategoriaInput, UsersUncheckedCreateWithoutCategoriaInput>
  }

  export type Norma_CategoriaUpsertWithWhereUniqueWithoutCatInput = {
    where: Norma_CategoriaWhereUniqueInput
    update: XOR<Norma_CategoriaUpdateWithoutCatInput, Norma_CategoriaUncheckedUpdateWithoutCatInput>
    create: XOR<Norma_CategoriaCreateWithoutCatInput, Norma_CategoriaUncheckedCreateWithoutCatInput>
  }

  export type Norma_CategoriaUpdateWithWhereUniqueWithoutCatInput = {
    where: Norma_CategoriaWhereUniqueInput
    data: XOR<Norma_CategoriaUpdateWithoutCatInput, Norma_CategoriaUncheckedUpdateWithoutCatInput>
  }

  export type Norma_CategoriaUpdateManyWithWhereWithoutCatInput = {
    where: Norma_CategoriaScalarWhereInput
    data: XOR<Norma_CategoriaUpdateManyMutationInput, Norma_CategoriaUncheckedUpdateManyWithoutCatInput>
  }

  export type Norma_CategoriaScalarWhereInput = {
    AND?: Norma_CategoriaScalarWhereInput | Norma_CategoriaScalarWhereInput[]
    OR?: Norma_CategoriaScalarWhereInput[]
    NOT?: Norma_CategoriaScalarWhereInput | Norma_CategoriaScalarWhereInput[]
    id_norma?: IntFilter<"Norma_Categoria"> | number
    id_cat?: IntFilter<"Norma_Categoria"> | number
  }

  export type UsersUpsertWithoutCategoriaInput = {
    update: XOR<UsersUpdateWithoutCategoriaInput, UsersUncheckedUpdateWithoutCategoriaInput>
    create: XOR<UsersCreateWithoutCategoriaInput, UsersUncheckedCreateWithoutCategoriaInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCategoriaInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCategoriaInput, UsersUncheckedUpdateWithoutCategoriaInput>
  }

  export type UsersUpdateWithoutCategoriaInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUpdateManyWithoutUsuariosNestedInput
    normas?: NormaUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateWithoutCategoriaInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput
    normas?: NormaUncheckedUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUncheckedUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type NotasCreateWithoutNormasInput = {
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    data_criacao?: Date | string
    usuario: UsersCreateNestedOneWithoutNotasInput
  }

  export type NotasUncheckedCreateWithoutNormasInput = {
    id_not?: number
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    adm_criador: number
    data_criacao?: Date | string
  }

  export type NotasCreateOrConnectWithoutNormasInput = {
    where: NotasWhereUniqueInput
    create: XOR<NotasCreateWithoutNormasInput, NotasUncheckedCreateWithoutNormasInput>
  }

  export type NotasCreateManyNormasInputEnvelope = {
    data: NotasCreateManyNormasInput | NotasCreateManyNormasInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutNormasInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaCreateNestedManyWithoutUsuarioInput
    notas?: NotasCreateNestedManyWithoutUsuarioInput
    mfa?: MfaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateWithoutNormasInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosUncheckedCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    notas?: NotasUncheckedCreateNestedManyWithoutUsuarioInput
    mfa?: MfaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersCreateOrConnectWithoutNormasInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNormasInput, UsersUncheckedCreateWithoutNormasInput>
  }

  export type OrgaosCreateWithoutNormasInput = {
    org_desc: string
    org_sigla: string
    usuarios?: UsersCreateNestedOneWithoutOrgaosInput
  }

  export type OrgaosUncheckedCreateWithoutNormasInput = {
    org_id?: number
    org_desc: string
    org_sigla: string
    adm_criador?: number | null
  }

  export type OrgaosCreateOrConnectWithoutNormasInput = {
    where: OrgaosWhereUniqueInput
    create: XOR<OrgaosCreateWithoutNormasInput, OrgaosUncheckedCreateWithoutNormasInput>
  }

  export type Normas_ReferenciadasCreateWithoutNorma_origemInput = {
    norma_destino: NormaCreateNestedOneWithoutNormas_destinoInput
  }

  export type Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput = {
    norma_destino_id: number
  }

  export type Normas_ReferenciadasCreateOrConnectWithoutNorma_origemInput = {
    where: Normas_ReferenciadasWhereUniqueInput
    create: XOR<Normas_ReferenciadasCreateWithoutNorma_origemInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput>
  }

  export type Normas_ReferenciadasCreateManyNorma_origemInputEnvelope = {
    data: Normas_ReferenciadasCreateManyNorma_origemInput | Normas_ReferenciadasCreateManyNorma_origemInput[]
    skipDuplicates?: boolean
  }

  export type Normas_ReferenciadasCreateWithoutNorma_destinoInput = {
    norma_origem: NormaCreateNestedOneWithoutNormas_origemInput
  }

  export type Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput = {
    norma_origem_id: number
  }

  export type Normas_ReferenciadasCreateOrConnectWithoutNorma_destinoInput = {
    where: Normas_ReferenciadasWhereUniqueInput
    create: XOR<Normas_ReferenciadasCreateWithoutNorma_destinoInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput>
  }

  export type Normas_ReferenciadasCreateManyNorma_destinoInputEnvelope = {
    data: Normas_ReferenciadasCreateManyNorma_destinoInput | Normas_ReferenciadasCreateManyNorma_destinoInput[]
    skipDuplicates?: boolean
  }

  export type Normas_VersoesCreateWithoutNormaInput = {
    norma_codigo: string
    norm_titulo: string
    norm_dec: string
    emissao: Date | string
    criado_em: Date | string
    criado_em_novo?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
  }

  export type Normas_VersoesUncheckedCreateWithoutNormaInput = {
    id_versao?: number
    norma_codigo: string
    norm_titulo: string
    norm_dec: string
    emissao: Date | string
    criado_em: Date | string
    criado_em_novo?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
  }

  export type Normas_VersoesCreateOrConnectWithoutNormaInput = {
    where: Normas_VersoesWhereUniqueInput
    create: XOR<Normas_VersoesCreateWithoutNormaInput, Normas_VersoesUncheckedCreateWithoutNormaInput>
  }

  export type Normas_VersoesCreateManyNormaInputEnvelope = {
    data: Normas_VersoesCreateManyNormaInput | Normas_VersoesCreateManyNormaInput[]
    skipDuplicates?: boolean
  }

  export type Historico_Acesso_NormasCreateWithoutNormasInput = {
    data_acesso?: Date | string
    usuarios: UsersCreateNestedOneWithoutHistoricoAcessoNormasInput
  }

  export type Historico_Acesso_NormasUncheckedCreateWithoutNormasInput = {
    id_user: number
    data_acesso?: Date | string
  }

  export type Historico_Acesso_NormasCreateOrConnectWithoutNormasInput = {
    where: Historico_Acesso_NormasWhereUniqueInput
    create: XOR<Historico_Acesso_NormasCreateWithoutNormasInput, Historico_Acesso_NormasUncheckedCreateWithoutNormasInput>
  }

  export type Historico_Acesso_NormasCreateManyNormasInputEnvelope = {
    data: Historico_Acesso_NormasCreateManyNormasInput | Historico_Acesso_NormasCreateManyNormasInput[]
    skipDuplicates?: boolean
  }

  export type FavoritosCreateWithoutNormaInput = {
    data_criacao?: Date | string
    usuario: UsersCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritosUncheckedCreateWithoutNormaInput = {
    id_user: number
    data_criacao?: Date | string
  }

  export type FavoritosCreateOrConnectWithoutNormaInput = {
    where: FavoritosWhereUniqueInput
    create: XOR<FavoritosCreateWithoutNormaInput, FavoritosUncheckedCreateWithoutNormaInput>
  }

  export type FavoritosCreateManyNormaInputEnvelope = {
    data: FavoritosCreateManyNormaInput | FavoritosCreateManyNormaInput[]
    skipDuplicates?: boolean
  }

  export type Norma_CategoriaCreateWithoutNormaInput = {
    cat: CategoriaCreateNestedOneWithoutNorma_catInput
  }

  export type Norma_CategoriaUncheckedCreateWithoutNormaInput = {
    id_cat: number
  }

  export type Norma_CategoriaCreateOrConnectWithoutNormaInput = {
    where: Norma_CategoriaWhereUniqueInput
    create: XOR<Norma_CategoriaCreateWithoutNormaInput, Norma_CategoriaUncheckedCreateWithoutNormaInput>
  }

  export type Norma_CategoriaCreateManyNormaInputEnvelope = {
    data: Norma_CategoriaCreateManyNormaInput | Norma_CategoriaCreateManyNormaInput[]
    skipDuplicates?: boolean
  }

  export type PedidosdeAlteracaoCreateWithoutNormasInput = {
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
    usuarios: UsersCreateNestedOneWithoutPedidosInput
  }

  export type PedidosdeAlteracaoUncheckedCreateWithoutNormasInput = {
    id?: number
    id_user: number
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
  }

  export type PedidosdeAlteracaoCreateOrConnectWithoutNormasInput = {
    where: PedidosdeAlteracaoWhereUniqueInput
    create: XOR<PedidosdeAlteracaoCreateWithoutNormasInput, PedidosdeAlteracaoUncheckedCreateWithoutNormasInput>
  }

  export type PedidosdeAlteracaoCreateManyNormasInputEnvelope = {
    data: PedidosdeAlteracaoCreateManyNormasInput | PedidosdeAlteracaoCreateManyNormasInput[]
    skipDuplicates?: boolean
  }

  export type NotasUpsertWithWhereUniqueWithoutNormasInput = {
    where: NotasWhereUniqueInput
    update: XOR<NotasUpdateWithoutNormasInput, NotasUncheckedUpdateWithoutNormasInput>
    create: XOR<NotasCreateWithoutNormasInput, NotasUncheckedCreateWithoutNormasInput>
  }

  export type NotasUpdateWithWhereUniqueWithoutNormasInput = {
    where: NotasWhereUniqueInput
    data: XOR<NotasUpdateWithoutNormasInput, NotasUncheckedUpdateWithoutNormasInput>
  }

  export type NotasUpdateManyWithWhereWithoutNormasInput = {
    where: NotasScalarWhereInput
    data: XOR<NotasUpdateManyMutationInput, NotasUncheckedUpdateManyWithoutNormasInput>
  }

  export type UsersUpsertWithoutNormasInput = {
    update: XOR<UsersUpdateWithoutNormasInput, UsersUncheckedUpdateWithoutNormasInput>
    create: XOR<UsersCreateWithoutNormasInput, UsersUncheckedCreateWithoutNormasInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNormasInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNormasInput, UsersUncheckedUpdateWithoutNormasInput>
  }

  export type UsersUpdateWithoutNormasInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateWithoutNormasInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUncheckedUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type OrgaosUpsertWithoutNormasInput = {
    update: XOR<OrgaosUpdateWithoutNormasInput, OrgaosUncheckedUpdateWithoutNormasInput>
    create: XOR<OrgaosCreateWithoutNormasInput, OrgaosUncheckedCreateWithoutNormasInput>
    where?: OrgaosWhereInput
  }

  export type OrgaosUpdateToOneWithWhereWithoutNormasInput = {
    where?: OrgaosWhereInput
    data: XOR<OrgaosUpdateWithoutNormasInput, OrgaosUncheckedUpdateWithoutNormasInput>
  }

  export type OrgaosUpdateWithoutNormasInput = {
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
    usuarios?: UsersUpdateOneWithoutOrgaosNestedInput
  }

  export type OrgaosUncheckedUpdateWithoutNormasInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
    adm_criador?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_origemInput = {
    where: Normas_ReferenciadasWhereUniqueInput
    update: XOR<Normas_ReferenciadasUpdateWithoutNorma_origemInput, Normas_ReferenciadasUncheckedUpdateWithoutNorma_origemInput>
    create: XOR<Normas_ReferenciadasCreateWithoutNorma_origemInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_origemInput>
  }

  export type Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_origemInput = {
    where: Normas_ReferenciadasWhereUniqueInput
    data: XOR<Normas_ReferenciadasUpdateWithoutNorma_origemInput, Normas_ReferenciadasUncheckedUpdateWithoutNorma_origemInput>
  }

  export type Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_origemInput = {
    where: Normas_ReferenciadasScalarWhereInput
    data: XOR<Normas_ReferenciadasUpdateManyMutationInput, Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemInput>
  }

  export type Normas_ReferenciadasScalarWhereInput = {
    AND?: Normas_ReferenciadasScalarWhereInput | Normas_ReferenciadasScalarWhereInput[]
    OR?: Normas_ReferenciadasScalarWhereInput[]
    NOT?: Normas_ReferenciadasScalarWhereInput | Normas_ReferenciadasScalarWhereInput[]
    norma_origem_id?: IntFilter<"Normas_Referenciadas"> | number
    norma_destino_id?: IntFilter<"Normas_Referenciadas"> | number
  }

  export type Normas_ReferenciadasUpsertWithWhereUniqueWithoutNorma_destinoInput = {
    where: Normas_ReferenciadasWhereUniqueInput
    update: XOR<Normas_ReferenciadasUpdateWithoutNorma_destinoInput, Normas_ReferenciadasUncheckedUpdateWithoutNorma_destinoInput>
    create: XOR<Normas_ReferenciadasCreateWithoutNorma_destinoInput, Normas_ReferenciadasUncheckedCreateWithoutNorma_destinoInput>
  }

  export type Normas_ReferenciadasUpdateWithWhereUniqueWithoutNorma_destinoInput = {
    where: Normas_ReferenciadasWhereUniqueInput
    data: XOR<Normas_ReferenciadasUpdateWithoutNorma_destinoInput, Normas_ReferenciadasUncheckedUpdateWithoutNorma_destinoInput>
  }

  export type Normas_ReferenciadasUpdateManyWithWhereWithoutNorma_destinoInput = {
    where: Normas_ReferenciadasScalarWhereInput
    data: XOR<Normas_ReferenciadasUpdateManyMutationInput, Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoInput>
  }

  export type Normas_VersoesUpsertWithWhereUniqueWithoutNormaInput = {
    where: Normas_VersoesWhereUniqueInput
    update: XOR<Normas_VersoesUpdateWithoutNormaInput, Normas_VersoesUncheckedUpdateWithoutNormaInput>
    create: XOR<Normas_VersoesCreateWithoutNormaInput, Normas_VersoesUncheckedCreateWithoutNormaInput>
  }

  export type Normas_VersoesUpdateWithWhereUniqueWithoutNormaInput = {
    where: Normas_VersoesWhereUniqueInput
    data: XOR<Normas_VersoesUpdateWithoutNormaInput, Normas_VersoesUncheckedUpdateWithoutNormaInput>
  }

  export type Normas_VersoesUpdateManyWithWhereWithoutNormaInput = {
    where: Normas_VersoesScalarWhereInput
    data: XOR<Normas_VersoesUpdateManyMutationInput, Normas_VersoesUncheckedUpdateManyWithoutNormaInput>
  }

  export type Normas_VersoesScalarWhereInput = {
    AND?: Normas_VersoesScalarWhereInput | Normas_VersoesScalarWhereInput[]
    OR?: Normas_VersoesScalarWhereInput[]
    NOT?: Normas_VersoesScalarWhereInput | Normas_VersoesScalarWhereInput[]
    id_versao?: IntFilter<"Normas_Versoes"> | number
    norma_id?: IntFilter<"Normas_Versoes"> | number
    norma_codigo?: StringFilter<"Normas_Versoes"> | string
    norm_titulo?: StringFilter<"Normas_Versoes"> | string
    norm_dec?: StringFilter<"Normas_Versoes"> | string
    emissao?: DateTimeFilter<"Normas_Versoes"> | Date | string
    criado_em?: DateTimeFilter<"Normas_Versoes"> | Date | string
    criado_em_novo?: DateTimeFilter<"Normas_Versoes"> | Date | string
    pdf_nome_original?: StringFilter<"Normas_Versoes"> | string
    pdf_caminho?: StringFilter<"Normas_Versoes"> | string
  }

  export type Historico_Acesso_NormasUpsertWithWhereUniqueWithoutNormasInput = {
    where: Historico_Acesso_NormasWhereUniqueInput
    update: XOR<Historico_Acesso_NormasUpdateWithoutNormasInput, Historico_Acesso_NormasUncheckedUpdateWithoutNormasInput>
    create: XOR<Historico_Acesso_NormasCreateWithoutNormasInput, Historico_Acesso_NormasUncheckedCreateWithoutNormasInput>
  }

  export type Historico_Acesso_NormasUpdateWithWhereUniqueWithoutNormasInput = {
    where: Historico_Acesso_NormasWhereUniqueInput
    data: XOR<Historico_Acesso_NormasUpdateWithoutNormasInput, Historico_Acesso_NormasUncheckedUpdateWithoutNormasInput>
  }

  export type Historico_Acesso_NormasUpdateManyWithWhereWithoutNormasInput = {
    where: Historico_Acesso_NormasScalarWhereInput
    data: XOR<Historico_Acesso_NormasUpdateManyMutationInput, Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasInput>
  }

  export type FavoritosUpsertWithWhereUniqueWithoutNormaInput = {
    where: FavoritosWhereUniqueInput
    update: XOR<FavoritosUpdateWithoutNormaInput, FavoritosUncheckedUpdateWithoutNormaInput>
    create: XOR<FavoritosCreateWithoutNormaInput, FavoritosUncheckedCreateWithoutNormaInput>
  }

  export type FavoritosUpdateWithWhereUniqueWithoutNormaInput = {
    where: FavoritosWhereUniqueInput
    data: XOR<FavoritosUpdateWithoutNormaInput, FavoritosUncheckedUpdateWithoutNormaInput>
  }

  export type FavoritosUpdateManyWithWhereWithoutNormaInput = {
    where: FavoritosScalarWhereInput
    data: XOR<FavoritosUpdateManyMutationInput, FavoritosUncheckedUpdateManyWithoutNormaInput>
  }

  export type Norma_CategoriaUpsertWithWhereUniqueWithoutNormaInput = {
    where: Norma_CategoriaWhereUniqueInput
    update: XOR<Norma_CategoriaUpdateWithoutNormaInput, Norma_CategoriaUncheckedUpdateWithoutNormaInput>
    create: XOR<Norma_CategoriaCreateWithoutNormaInput, Norma_CategoriaUncheckedCreateWithoutNormaInput>
  }

  export type Norma_CategoriaUpdateWithWhereUniqueWithoutNormaInput = {
    where: Norma_CategoriaWhereUniqueInput
    data: XOR<Norma_CategoriaUpdateWithoutNormaInput, Norma_CategoriaUncheckedUpdateWithoutNormaInput>
  }

  export type Norma_CategoriaUpdateManyWithWhereWithoutNormaInput = {
    where: Norma_CategoriaScalarWhereInput
    data: XOR<Norma_CategoriaUpdateManyMutationInput, Norma_CategoriaUncheckedUpdateManyWithoutNormaInput>
  }

  export type PedidosdeAlteracaoUpsertWithWhereUniqueWithoutNormasInput = {
    where: PedidosdeAlteracaoWhereUniqueInput
    update: XOR<PedidosdeAlteracaoUpdateWithoutNormasInput, PedidosdeAlteracaoUncheckedUpdateWithoutNormasInput>
    create: XOR<PedidosdeAlteracaoCreateWithoutNormasInput, PedidosdeAlteracaoUncheckedCreateWithoutNormasInput>
  }

  export type PedidosdeAlteracaoUpdateWithWhereUniqueWithoutNormasInput = {
    where: PedidosdeAlteracaoWhereUniqueInput
    data: XOR<PedidosdeAlteracaoUpdateWithoutNormasInput, PedidosdeAlteracaoUncheckedUpdateWithoutNormasInput>
  }

  export type PedidosdeAlteracaoUpdateManyWithWhereWithoutNormasInput = {
    where: PedidosdeAlteracaoScalarWhereInput
    data: XOR<PedidosdeAlteracaoUpdateManyMutationInput, PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasInput>
  }

  export type UsersCreateWithoutNotasInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaCreateNestedManyWithoutUsuarioInput
    normas?: NormaCreateNestedManyWithoutUsuarioInput
    mfa?: MfaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateWithoutNotasInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosUncheckedCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    normas?: NormaUncheckedCreateNestedManyWithoutUsuarioInput
    mfa?: MfaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersCreateOrConnectWithoutNotasInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotasInput, UsersUncheckedCreateWithoutNotasInput>
  }

  export type NormaCreateWithoutNotasInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutNotasInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutNotasInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutNotasInput, NormaUncheckedCreateWithoutNotasInput>
  }

  export type UsersUpsertWithoutNotasInput = {
    update: XOR<UsersUpdateWithoutNotasInput, UsersUncheckedUpdateWithoutNotasInput>
    create: XOR<UsersCreateWithoutNotasInput, UsersUncheckedCreateWithoutNotasInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotasInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotasInput, UsersUncheckedUpdateWithoutNotasInput>
  }

  export type UsersUpdateWithoutNotasInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotasInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUncheckedUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type NormaUpsertWithoutNotasInput = {
    update: XOR<NormaUpdateWithoutNotasInput, NormaUncheckedUpdateWithoutNotasInput>
    create: XOR<NormaCreateWithoutNotasInput, NormaUncheckedCreateWithoutNotasInput>
    where?: NormaWhereInput
  }

  export type NormaUpdateToOneWithWhereWithoutNotasInput = {
    where?: NormaWhereInput
    data: XOR<NormaUpdateWithoutNotasInput, NormaUncheckedUpdateWithoutNotasInput>
  }

  export type NormaUpdateWithoutNotasInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutNotasInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type CategoriaCreateWithoutNorma_catInput = {
    cat_nome: string
    data_criacao?: Date | string
    usuario: UsersCreateNestedOneWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutNorma_catInput = {
    cat_id?: number
    cat_nome: string
    adm_criador: number
    data_criacao?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutNorma_catInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutNorma_catInput, CategoriaUncheckedCreateWithoutNorma_catInput>
  }

  export type NormaCreateWithoutCategoriaInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutCategoriaInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutCategoriaInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutCategoriaInput, NormaUncheckedCreateWithoutCategoriaInput>
  }

  export type CategoriaUpsertWithoutNorma_catInput = {
    update: XOR<CategoriaUpdateWithoutNorma_catInput, CategoriaUncheckedUpdateWithoutNorma_catInput>
    create: XOR<CategoriaCreateWithoutNorma_catInput, CategoriaUncheckedCreateWithoutNorma_catInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutNorma_catInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutNorma_catInput, CategoriaUncheckedUpdateWithoutNorma_catInput>
  }

  export type CategoriaUpdateWithoutNorma_catInput = {
    cat_nome?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsersUpdateOneRequiredWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutNorma_catInput = {
    cat_id?: IntFieldUpdateOperationsInput | number
    cat_nome?: StringFieldUpdateOperationsInput | string
    adm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormaUpsertWithoutCategoriaInput = {
    update: XOR<NormaUpdateWithoutCategoriaInput, NormaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<NormaCreateWithoutCategoriaInput, NormaUncheckedCreateWithoutCategoriaInput>
    where?: NormaWhereInput
  }

  export type NormaUpdateToOneWithWhereWithoutCategoriaInput = {
    where?: NormaWhereInput
    data: XOR<NormaUpdateWithoutCategoriaInput, NormaUncheckedUpdateWithoutCategoriaInput>
  }

  export type NormaUpdateWithoutCategoriaInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutCategoriaInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type NormaCreateWithoutNormas_origemInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutNormas_origemInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutNormas_origemInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutNormas_origemInput, NormaUncheckedCreateWithoutNormas_origemInput>
  }

  export type NormaCreateWithoutNormas_destinoInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutNormas_destinoInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutNormas_destinoInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutNormas_destinoInput, NormaUncheckedCreateWithoutNormas_destinoInput>
  }

  export type NormaUpsertWithoutNormas_origemInput = {
    update: XOR<NormaUpdateWithoutNormas_origemInput, NormaUncheckedUpdateWithoutNormas_origemInput>
    create: XOR<NormaCreateWithoutNormas_origemInput, NormaUncheckedCreateWithoutNormas_origemInput>
    where?: NormaWhereInput
  }

  export type NormaUpdateToOneWithWhereWithoutNormas_origemInput = {
    where?: NormaWhereInput
    data: XOR<NormaUpdateWithoutNormas_origemInput, NormaUncheckedUpdateWithoutNormas_origemInput>
  }

  export type NormaUpdateWithoutNormas_origemInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutNormas_origemInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type NormaUpsertWithoutNormas_destinoInput = {
    update: XOR<NormaUpdateWithoutNormas_destinoInput, NormaUncheckedUpdateWithoutNormas_destinoInput>
    create: XOR<NormaCreateWithoutNormas_destinoInput, NormaUncheckedCreateWithoutNormas_destinoInput>
    where?: NormaWhereInput
  }

  export type NormaUpdateToOneWithWhereWithoutNormas_destinoInput = {
    where?: NormaWhereInput
    data: XOR<NormaUpdateWithoutNormas_destinoInput, NormaUncheckedUpdateWithoutNormas_destinoInput>
  }

  export type NormaUpdateWithoutNormas_destinoInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutNormas_destinoInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type NormaCreateWithoutVersoesInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutVersoesInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutVersoesInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutVersoesInput, NormaUncheckedCreateWithoutVersoesInput>
  }

  export type NormaUpsertWithoutVersoesInput = {
    update: XOR<NormaUpdateWithoutVersoesInput, NormaUncheckedUpdateWithoutVersoesInput>
    create: XOR<NormaCreateWithoutVersoesInput, NormaUncheckedCreateWithoutVersoesInput>
    where?: NormaWhereInput
  }

  export type NormaUpdateToOneWithWhereWithoutVersoesInput = {
    where?: NormaWhereInput
    data: XOR<NormaUpdateWithoutVersoesInput, NormaUncheckedUpdateWithoutVersoesInput>
  }

  export type NormaUpdateWithoutVersoesInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutVersoesInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type UsersCreateWithoutMfaInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaCreateNestedManyWithoutUsuarioInput
    normas?: NormaCreateNestedManyWithoutUsuarioInput
    notas?: NotasCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateWithoutMfaInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosUncheckedCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    normas?: NormaUncheckedCreateNestedManyWithoutUsuarioInput
    notas?: NotasUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersCreateOrConnectWithoutMfaInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMfaInput, UsersUncheckedCreateWithoutMfaInput>
  }

  export type UsersUpsertWithoutMfaInput = {
    update: XOR<UsersUpdateWithoutMfaInput, UsersUncheckedUpdateWithoutMfaInput>
    create: XOR<UsersCreateWithoutMfaInput, UsersUncheckedCreateWithoutMfaInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMfaInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMfaInput, UsersUncheckedUpdateWithoutMfaInput>
  }

  export type UsersUpdateWithoutMfaInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateWithoutMfaInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUncheckedUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersCreateWithoutHistoricoAcessoNormasInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaCreateNestedManyWithoutUsuarioInput
    normas?: NormaCreateNestedManyWithoutUsuarioInput
    notas?: NotasCreateNestedManyWithoutUsuarioInput
    mfa?: MfaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateWithoutHistoricoAcessoNormasInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosUncheckedCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    normas?: NormaUncheckedCreateNestedManyWithoutUsuarioInput
    notas?: NotasUncheckedCreateNestedManyWithoutUsuarioInput
    mfa?: MfaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersCreateOrConnectWithoutHistoricoAcessoNormasInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutHistoricoAcessoNormasInput, UsersUncheckedCreateWithoutHistoricoAcessoNormasInput>
  }

  export type NormaCreateWithoutHistoricoAcessoNormasInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutHistoricoAcessoNormasInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutHistoricoAcessoNormasInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutHistoricoAcessoNormasInput, NormaUncheckedCreateWithoutHistoricoAcessoNormasInput>
  }

  export type UsersUpsertWithoutHistoricoAcessoNormasInput = {
    update: XOR<UsersUpdateWithoutHistoricoAcessoNormasInput, UsersUncheckedUpdateWithoutHistoricoAcessoNormasInput>
    create: XOR<UsersCreateWithoutHistoricoAcessoNormasInput, UsersUncheckedCreateWithoutHistoricoAcessoNormasInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutHistoricoAcessoNormasInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutHistoricoAcessoNormasInput, UsersUncheckedUpdateWithoutHistoricoAcessoNormasInput>
  }

  export type UsersUpdateWithoutHistoricoAcessoNormasInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateWithoutHistoricoAcessoNormasInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUncheckedUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUncheckedUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type NormaUpsertWithoutHistoricoAcessoNormasInput = {
    update: XOR<NormaUpdateWithoutHistoricoAcessoNormasInput, NormaUncheckedUpdateWithoutHistoricoAcessoNormasInput>
    create: XOR<NormaCreateWithoutHistoricoAcessoNormasInput, NormaUncheckedCreateWithoutHistoricoAcessoNormasInput>
    where?: NormaWhereInput
  }

  export type NormaUpdateToOneWithWhereWithoutHistoricoAcessoNormasInput = {
    where?: NormaWhereInput
    data: XOR<NormaUpdateWithoutHistoricoAcessoNormasInput, NormaUncheckedUpdateWithoutHistoricoAcessoNormasInput>
  }

  export type NormaUpdateWithoutHistoricoAcessoNormasInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutHistoricoAcessoNormasInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type UsersCreateWithoutPedidosInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaCreateNestedManyWithoutUsuarioInput
    normas?: NormaCreateNestedManyWithoutUsuarioInput
    notas?: NotasCreateNestedManyWithoutUsuarioInput
    mfa?: MfaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateWithoutPedidosInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosUncheckedCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    normas?: NormaUncheckedCreateNestedManyWithoutUsuarioInput
    notas?: NotasUncheckedCreateNestedManyWithoutUsuarioInput
    mfa?: MfaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersCreateOrConnectWithoutPedidosInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPedidosInput, UsersUncheckedCreateWithoutPedidosInput>
  }

  export type NormaCreateWithoutPedidosInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
  }

  export type NormaUncheckedCreateWithoutPedidosInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    favoritos?: FavoritosUncheckedCreateNestedManyWithoutNormaInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
  }

  export type NormaCreateOrConnectWithoutPedidosInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutPedidosInput, NormaUncheckedCreateWithoutPedidosInput>
  }

  export type UsersUpsertWithoutPedidosInput = {
    update: XOR<UsersUpdateWithoutPedidosInput, UsersUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsersCreateWithoutPedidosInput, UsersUncheckedCreateWithoutPedidosInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPedidosInput, UsersUncheckedUpdateWithoutPedidosInput>
  }

  export type UsersUpdateWithoutPedidosInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateWithoutPedidosInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUncheckedUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUncheckedUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type NormaUpsertWithoutPedidosInput = {
    update: XOR<NormaUpdateWithoutPedidosInput, NormaUncheckedUpdateWithoutPedidosInput>
    create: XOR<NormaCreateWithoutPedidosInput, NormaUncheckedCreateWithoutPedidosInput>
    where?: NormaWhereInput
  }

  export type NormaUpdateToOneWithWhereWithoutPedidosInput = {
    where?: NormaWhereInput
    data: XOR<NormaUpdateWithoutPedidosInput, NormaUncheckedUpdateWithoutPedidosInput>
  }

  export type NormaUpdateWithoutPedidosInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
  }

  export type NormaUncheckedUpdateWithoutPedidosInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
  }

  export type UsersCreateWithoutFavoritosInput = {
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaCreateNestedManyWithoutUsuarioInput
    normas?: NormaCreateNestedManyWithoutUsuarioInput
    notas?: NotasCreateNestedManyWithoutUsuarioInput
    mfa?: MfaCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutUsuariosInput
  }

  export type UsersUncheckedCreateWithoutFavoritosInput = {
    id_user?: number
    user_name: string
    email: string
    user_senha_hash: string
    data_criacao?: Date | string
    nivel_user?: $Enums.NivelUser
    orgaos?: OrgaosUncheckedCreateNestedManyWithoutUsuariosInput
    categoria?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    normas?: NormaUncheckedCreateNestedManyWithoutUsuarioInput
    notas?: NotasUncheckedCreateNestedManyWithoutUsuarioInput
    mfa?: MfaUncheckedCreateNestedManyWithoutUsuarioInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutUsuariosInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsersCreateOrConnectWithoutFavoritosInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFavoritosInput, UsersUncheckedCreateWithoutFavoritosInput>
  }

  export type NormaCreateWithoutFavoritosInput = {
    norm_titulo: string
    norm_desc: string
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasCreateNestedManyWithoutNormasInput
    usuario: UsersCreateNestedOneWithoutNormasInput
    orgaos: OrgaosCreateNestedOneWithoutNormasInput
    normas_origem?: Normas_ReferenciadasCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasCreateNestedManyWithoutNormasInput
    categoria?: Norma_CategoriaCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoCreateNestedManyWithoutNormasInput
  }

  export type NormaUncheckedCreateWithoutFavoritosInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
    notas?: NotasUncheckedCreateNestedManyWithoutNormasInput
    normas_origem?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_origemInput
    normas_destino?: Normas_ReferenciadasUncheckedCreateNestedManyWithoutNorma_destinoInput
    versoes?: Normas_VersoesUncheckedCreateNestedManyWithoutNormaInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedCreateNestedManyWithoutNormasInput
    categoria?: Norma_CategoriaUncheckedCreateNestedManyWithoutNormaInput
    pedidos?: PedidosdeAlteracaoUncheckedCreateNestedManyWithoutNormasInput
  }

  export type NormaCreateOrConnectWithoutFavoritosInput = {
    where: NormaWhereUniqueInput
    create: XOR<NormaCreateWithoutFavoritosInput, NormaUncheckedCreateWithoutFavoritosInput>
  }

  export type UsersUpsertWithoutFavoritosInput = {
    update: XOR<UsersUpdateWithoutFavoritosInput, UsersUncheckedUpdateWithoutFavoritosInput>
    create: XOR<UsersCreateWithoutFavoritosInput, UsersUncheckedCreateWithoutFavoritosInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFavoritosInput, UsersUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsersUpdateWithoutFavoritosInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsersUncheckedUpdateWithoutFavoritosInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_senha_hash?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_user?: EnumNivelUserFieldUpdateOperationsInput | $Enums.NivelUser
    orgaos?: OrgaosUncheckedUpdateManyWithoutUsuariosNestedInput
    categoria?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    normas?: NormaUncheckedUpdateManyWithoutUsuarioNestedInput
    notas?: NotasUncheckedUpdateManyWithoutUsuarioNestedInput
    mfa?: MfaUncheckedUpdateManyWithoutUsuarioNestedInput
    historicoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type NormaUpsertWithoutFavoritosInput = {
    update: XOR<NormaUpdateWithoutFavoritosInput, NormaUncheckedUpdateWithoutFavoritosInput>
    create: XOR<NormaCreateWithoutFavoritosInput, NormaUncheckedCreateWithoutFavoritosInput>
    where?: NormaWhereInput
  }

  export type NormaUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: NormaWhereInput
    data: XOR<NormaUpdateWithoutFavoritosInput, NormaUncheckedUpdateWithoutFavoritosInput>
  }

  export type NormaUpdateWithoutFavoritosInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutFavoritosInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type OrgaosCreateManyUsuariosInput = {
    org_id?: number
    org_desc: string
    org_sigla: string
  }

  export type CategoriaCreateManyUsuarioInput = {
    cat_id?: number
    cat_nome: string
    data_criacao?: Date | string
  }

  export type NormaCreateManyUsuarioInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    org_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
  }

  export type NotasCreateManyUsuarioInput = {
    id_not?: number
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    norm_criador: number
    data_criacao?: Date | string
  }

  export type MfaCreateManyUsuarioInput = {
    id?: number
    cod_mfa: string
    cod_data_cricao?: Date | string
  }

  export type FavoritosCreateManyUsuarioInput = {
    id_norma: number
    data_criacao?: Date | string
  }

  export type Historico_Acesso_NormasCreateManyUsuariosInput = {
    id_norma: number
    data_acesso?: Date | string
  }

  export type PedidosdeAlteracaoCreateManyUsuariosInput = {
    id?: number
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
    id_norma?: number | null
  }

  export type OrgaosUpdateWithoutUsuariosInput = {
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
    normas?: NormaUpdateManyWithoutOrgaosNestedInput
  }

  export type OrgaosUncheckedUpdateWithoutUsuariosInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
    normas?: NormaUncheckedUpdateManyWithoutOrgaosNestedInput
  }

  export type OrgaosUncheckedUpdateManyWithoutUsuariosInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    org_desc?: StringFieldUpdateOperationsInput | string
    org_sigla?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUpdateWithoutUsuarioInput = {
    cat_nome?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    norma_cat?: Norma_CategoriaUpdateManyWithoutCatNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutUsuarioInput = {
    cat_id?: IntFieldUpdateOperationsInput | number
    cat_nome?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    norma_cat?: Norma_CategoriaUncheckedUpdateManyWithoutCatNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutUsuarioInput = {
    cat_id?: IntFieldUpdateOperationsInput | number
    cat_nome?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NormaUpdateWithoutUsuarioInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    orgaos?: OrgaosUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutUsuarioInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateManyWithoutUsuarioInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    org_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type NotasUpdateWithoutUsuarioInput = {
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    normas?: NormaUpdateOneRequiredWithoutNotasNestedInput
  }

  export type NotasUncheckedUpdateWithoutUsuarioInput = {
    id_not?: IntFieldUpdateOperationsInput | number
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    norm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotasUncheckedUpdateManyWithoutUsuarioInput = {
    id_not?: IntFieldUpdateOperationsInput | number
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    norm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaUpdateWithoutUsuarioInput = {
    cod_mfa?: StringFieldUpdateOperationsInput | string
    cod_data_cricao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cod_mfa?: StringFieldUpdateOperationsInput | string
    cod_data_cricao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cod_mfa?: StringFieldUpdateOperationsInput | string
    cod_data_cricao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritosUpdateWithoutUsuarioInput = {
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    norma?: NormaUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritosUncheckedUpdateWithoutUsuarioInput = {
    id_norma?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritosUncheckedUpdateManyWithoutUsuarioInput = {
    id_norma?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_Acesso_NormasUpdateWithoutUsuariosInput = {
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
    normas?: NormaUpdateOneRequiredWithoutHistoricoAcessoNormasNestedInput
  }

  export type Historico_Acesso_NormasUncheckedUpdateWithoutUsuariosInput = {
    id_norma?: IntFieldUpdateOperationsInput | number
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_Acesso_NormasUncheckedUpdateManyWithoutUsuariosInput = {
    id_norma?: IntFieldUpdateOperationsInput | number
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidosdeAlteracaoUpdateWithoutUsuariosInput = {
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    normas?: NormaUpdateOneWithoutPedidosNestedInput
  }

  export type PedidosdeAlteracaoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    id_norma?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidosdeAlteracaoUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    id_norma?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NormaCreateManyOrgaosInput = {
    id_norm?: number
    norm_titulo: string
    norm_desc: string
    adm_criador: number
    emissao: Date | string
    norm_codigo: string
    data_criacao?: Date | string
    data_update?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
  }

  export type NormaUpdateWithoutOrgaosInput = {
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUpdateManyWithoutNormasNestedInput
    usuario?: UsersUpdateOneRequiredWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateWithoutOrgaosInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
    notas?: NotasUncheckedUpdateManyWithoutNormasNestedInput
    normas_origem?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemNestedInput
    normas_destino?: Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoNestedInput
    versoes?: Normas_VersoesUncheckedUpdateManyWithoutNormaNestedInput
    HistoricoAcessoNormas?: Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasNestedInput
    favoritos?: FavoritosUncheckedUpdateManyWithoutNormaNestedInput
    categoria?: Norma_CategoriaUncheckedUpdateManyWithoutNormaNestedInput
    pedidos?: PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasNestedInput
  }

  export type NormaUncheckedUpdateManyWithoutOrgaosInput = {
    id_norm?: IntFieldUpdateOperationsInput | number
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_desc?: StringFieldUpdateOperationsInput | string
    adm_criador?: IntFieldUpdateOperationsInput | number
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    norm_codigo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_update?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type Norma_CategoriaCreateManyCatInput = {
    id_norma: number
  }

  export type Norma_CategoriaUpdateWithoutCatInput = {
    norma?: NormaUpdateOneRequiredWithoutCategoriaNestedInput
  }

  export type Norma_CategoriaUncheckedUpdateWithoutCatInput = {
    id_norma?: IntFieldUpdateOperationsInput | number
  }

  export type Norma_CategoriaUncheckedUpdateManyWithoutCatInput = {
    id_norma?: IntFieldUpdateOperationsInput | number
  }

  export type NotasCreateManyNormasInput = {
    id_not?: number
    not_titulo: string
    not_IT: string
    not_AB?: string | null
    not_Pa?: string | null
    adm_criador: number
    data_criacao?: Date | string
  }

  export type Normas_ReferenciadasCreateManyNorma_origemInput = {
    norma_destino_id: number
  }

  export type Normas_ReferenciadasCreateManyNorma_destinoInput = {
    norma_origem_id: number
  }

  export type Normas_VersoesCreateManyNormaInput = {
    id_versao?: number
    norma_codigo: string
    norm_titulo: string
    norm_dec: string
    emissao: Date | string
    criado_em: Date | string
    criado_em_novo?: Date | string
    pdf_nome_original: string
    pdf_caminho: string
  }

  export type Historico_Acesso_NormasCreateManyNormasInput = {
    id_user: number
    data_acesso?: Date | string
  }

  export type FavoritosCreateManyNormaInput = {
    id_user: number
    data_criacao?: Date | string
  }

  export type Norma_CategoriaCreateManyNormaInput = {
    id_cat: number
  }

  export type PedidosdeAlteracaoCreateManyNormasInput = {
    id?: number
    id_user: number
    alteracao: JsonNullValueInput | InputJsonValue
    acaoDealteracao: $Enums.AcaoDeAlteracao
    notaorNorma: $Enums.NotaOrNorma
    status?: $Enums.Status
    data_pedido?: Date | string
  }

  export type NotasUpdateWithoutNormasInput = {
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsersUpdateOneRequiredWithoutNotasNestedInput
  }

  export type NotasUncheckedUpdateWithoutNormasInput = {
    id_not?: IntFieldUpdateOperationsInput | number
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    adm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotasUncheckedUpdateManyWithoutNormasInput = {
    id_not?: IntFieldUpdateOperationsInput | number
    not_titulo?: StringFieldUpdateOperationsInput | string
    not_IT?: StringFieldUpdateOperationsInput | string
    not_AB?: NullableStringFieldUpdateOperationsInput | string | null
    not_Pa?: NullableStringFieldUpdateOperationsInput | string | null
    adm_criador?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Normas_ReferenciadasUpdateWithoutNorma_origemInput = {
    norma_destino?: NormaUpdateOneRequiredWithoutNormas_destinoNestedInput
  }

  export type Normas_ReferenciadasUncheckedUpdateWithoutNorma_origemInput = {
    norma_destino_id?: IntFieldUpdateOperationsInput | number
  }

  export type Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_origemInput = {
    norma_destino_id?: IntFieldUpdateOperationsInput | number
  }

  export type Normas_ReferenciadasUpdateWithoutNorma_destinoInput = {
    norma_origem?: NormaUpdateOneRequiredWithoutNormas_origemNestedInput
  }

  export type Normas_ReferenciadasUncheckedUpdateWithoutNorma_destinoInput = {
    norma_origem_id?: IntFieldUpdateOperationsInput | number
  }

  export type Normas_ReferenciadasUncheckedUpdateManyWithoutNorma_destinoInput = {
    norma_origem_id?: IntFieldUpdateOperationsInput | number
  }

  export type Normas_VersoesUpdateWithoutNormaInput = {
    norma_codigo?: StringFieldUpdateOperationsInput | string
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_dec?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em_novo?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type Normas_VersoesUncheckedUpdateWithoutNormaInput = {
    id_versao?: IntFieldUpdateOperationsInput | number
    norma_codigo?: StringFieldUpdateOperationsInput | string
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_dec?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em_novo?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type Normas_VersoesUncheckedUpdateManyWithoutNormaInput = {
    id_versao?: IntFieldUpdateOperationsInput | number
    norma_codigo?: StringFieldUpdateOperationsInput | string
    norm_titulo?: StringFieldUpdateOperationsInput | string
    norm_dec?: StringFieldUpdateOperationsInput | string
    emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    criado_em_novo?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_nome_original?: StringFieldUpdateOperationsInput | string
    pdf_caminho?: StringFieldUpdateOperationsInput | string
  }

  export type Historico_Acesso_NormasUpdateWithoutNormasInput = {
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsersUpdateOneRequiredWithoutHistoricoAcessoNormasNestedInput
  }

  export type Historico_Acesso_NormasUncheckedUpdateWithoutNormasInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historico_Acesso_NormasUncheckedUpdateManyWithoutNormasInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    data_acesso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritosUpdateWithoutNormaInput = {
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsersUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritosUncheckedUpdateWithoutNormaInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritosUncheckedUpdateManyWithoutNormaInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Norma_CategoriaUpdateWithoutNormaInput = {
    cat?: CategoriaUpdateOneRequiredWithoutNorma_catNestedInput
  }

  export type Norma_CategoriaUncheckedUpdateWithoutNormaInput = {
    id_cat?: IntFieldUpdateOperationsInput | number
  }

  export type Norma_CategoriaUncheckedUpdateManyWithoutNormaInput = {
    id_cat?: IntFieldUpdateOperationsInput | number
  }

  export type PedidosdeAlteracaoUpdateWithoutNormasInput = {
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsersUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidosdeAlteracaoUncheckedUpdateWithoutNormasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidosdeAlteracaoUncheckedUpdateManyWithoutNormasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    alteracao?: JsonNullValueInput | InputJsonValue
    acaoDealteracao?: EnumAcaoDeAlteracaoFieldUpdateOperationsInput | $Enums.AcaoDeAlteracao
    notaorNorma?: EnumNotaOrNormaFieldUpdateOperationsInput | $Enums.NotaOrNorma
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
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