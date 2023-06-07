import { Matrix } from "@/containers/Matrix/Matrix";
import { MatrixData } from "@/containers/Matrix/Matrix.types";
import React from "react";

const mockData: MatrixData = {
  data: {
    title: "PRODUCT OWNER",
    itemLegend: [
      { description: "Backlog", type: "default" },
      { description: "Wizja", type: "normal" },
      { description: "Wartość", type: "primary" },
      { description: "Wadlidacja", type: "secondary" },
      { description: "Budżet", type: "tertiary" },
      { description: "Tools", type: "quaternary" },
    ],
    tiers: [
      {
        title: "Master/CEO",
        rows: [
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
            ],
          },
        ],
      },
      {
        title: "Senior",
        subTitles: ["Sponsor"],
        rows: [
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "", type: "empty" },
            ],
          },
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
            ],
          },
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
            ],
          },
        ],
      },
      {
        title: "Mid",
        subTitles: ["Business representative"],
        rows: [
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
            ],
          },
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
            ],
          },
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
            ],
          },
        ],
      },
      {
        title: "Junior",
        subTitles: ["Proxy", "Scribe"],
        rows: [
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "", type: "empty" },
            ],
          },
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
            ],
          },
          {
            items: [
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { description: "Drugi", type: "normal" },
              { description: "Trzeci", type: "primary" },
              { description: "Czwarty", type: "primary" },
              {
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { description: "Szosty", type: "secondary" },
              { description: "Siodmy", type: "tertiary" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
              { description: "", type: "empty" },
              { description: "Szosty", type: "quaternary" },
              { description: "Szosty", type: "quaternary" },
            ],
          },
        ],
      },
    ],
  },
};

const MatrixPage = () => {
  return <Matrix data={mockData.data} />;
};

export default MatrixPage;
