'use client';
import React from 'react';
import { API } from '@stoplight/elements';

const OpenApi: React.FC = () => {
  return <API apiDescriptionUrl="/yamusic-api.yaml" />;
};

export default OpenApi;
