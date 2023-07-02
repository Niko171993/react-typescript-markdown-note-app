import React from 'react';
import { Note, Tag } from './App';
import {
  useParams,
  Outlet,
  Navigate,
  useOutletContext,
} from 'react-router-dom';
type NoteLayoutProps = {
  notes: Note[];
};

type Note2 = {
  id: string;
  title: string;
  markdown: string;
  tags: Tag[];
  tagIds: string[];
};
const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  if (note === null) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};

export function useNote() {
  return useOutletContext<Note2>();
}
export default NoteLayout;
