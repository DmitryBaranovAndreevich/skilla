import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ApiURL } from '../../service/api';
import { TCallItem } from '../../service/mockCallItem';

interface ICalls {
  total_rows: number;
  results: TCallItem[];
}

export const callsAPI = createApi({
  reducerPath: 'callsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: ApiURL }),
  endpoints: (build) => ({
    fetchAllCalls: build.query<ICalls, string>({
      query: (params) => ({
        url: '/mango/getList',
        method: 'POST',
        headers: {
          Authorization: 'Bearer testtoken',
        },
      }),
    }),
  }),
});
