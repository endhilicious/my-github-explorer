export interface User {
  login: string;
  id: number;
  avatar_url: string;
  // Tambahkan properti pengguna lainnya sesuai kebutuhan
}

export interface Repository {
  id: number;
  login: string;
  description: string | null;
  owner: {
    login: string;
    avatar_url: string;
  };
  avatar_url: string;
  stargazers_count: number;
}
