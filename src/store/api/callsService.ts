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
    fetchCallRecord: build.query<unknown, { recordId: string; partnerId: string }>({
      query: ({ recordId, partnerId }) => ({
        url: `/mango/getRecord?record=${recordId}&partnership_id=${partnerId}`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer testtoken',
          'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
          'Content-Transfer-Encoding': 'binary',
          'Content-Disposition': 'filename="record.mp3"',
        },
      }),
    }),
  }),
});
