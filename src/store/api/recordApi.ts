import axios from 'axios';
import { ApiURL } from '../../service/api';

const instance = axios.create({
  baseURL: ApiURL,
});

export const RecordApi = {
  async getRecord({
    recordId,
    partnerId,
  }: {
    recordId: string;
    partnerId: string;
  }): Promise<MediaSource> {
    const { data } = await instance.post(
      `/mango/getRecord?record=${recordId}&partnership_id=${partnerId}`,
      {},
      {
        headers: {
          Authorization: 'Bearer testtoken',
          'Content-type': 'audio/mpeg; audio/x-mpeg; audio/x-mpeg-3; audio/mpeg3',
          'Content-Transfer-Encoding': 'binary',
          'Content-Disposition': 'filename="record.mp3""',
        },
        responseType: 'blob',
      }
    );
    return data;
  },
};
