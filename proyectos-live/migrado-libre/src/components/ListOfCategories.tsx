"use client";
import type {Category} from "@/types";

import {useState} from "react";

export function ListOfCategories({
  categories,
  parentCategory = null,
}: {
  categories: Category[];
  parentCategory?: string | null;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const categoriesToRender = categories.filter(({parentId}) => parentCategory === parentId);
  const hasSubCategories = categoriesToRender.length > 0;
  const handleClick = () => setExpanded((value) => !value);

  return (
    <ul>
      {categoriesToRender.map((category) => (
        <li key={category.id} className="ml-4">
          {hasSubCategories ? (
            <button type="button" onClick={handleClick}>
              {expanded ? "-" : "+"}
            </button>
          ) : null}
          {category.name}
          {expanded ? (
            <ListOfCategories categories={categories} parentCategory={category.id} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
