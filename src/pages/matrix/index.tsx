import { Matrix } from "@/containers/Matrix/Matrix";
import { MatrixData } from "@/containers/Matrix/Matrix.types";
import React from "react";

const mockData: MatrixData = {
  data: {
    title: "PRODUCT OWNER",
    itemLegend: [
      { id: "a1", description: "Backlog", type: "default" },
      { id: "a2", description: "Wizja", type: "normal" },
      { id: "a3", description: "Wartość", type: "primary" },
      { id: "a4", description: "Wadlidacja", type: "secondary" },
      { id: "a5", description: "Budżet", type: "tertiary" },
      { id: "a6", description: "Tools", type: "quaternary" },
    ],
    tiers: [
      {
        title: "Master/CEO",
        rows: [
          {
            items: [
              {
                id: "1",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
                popupText: "Dowolny text",
              },
              { id: "2", description: "Drugi", type: "normal" },
              { id: "3", description: "Trzeci", type: "primary" },
              { id: "4", description: "Czwarty", type: "primary" },
              {
                id: "5",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "6", description: "Szosty", type: "secondary" },
              { id: "7", description: "Siodmy", type: "tertiary" },
              { id: "8", description: "Szosty", type: "quaternary" },
              { id: "9", description: "Szosty", type: "quaternary" },
              { id: "10", description: "", type: "empty" },
              { id: "11", description: "Szosty", type: "quaternary" },
              { id: "12", description: "Szosty", type: "quaternary" },
            ],
          },
        ],
      },
      {
        title: "Senior",
        rows: [
          {
            items: [
              {
                id: "13",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "14", description: "Drugi", type: "normal" },
              { id: "15", description: "Trzeci", type: "primary" },
              { id: "16", description: "Czwarty", type: "primary" },
              {
                id: "17",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "18", description: "Szosty", type: "secondary" },
              { id: "19", description: "Siodmy", type: "tertiary" },
              { id: "20", description: "", type: "empty" },
              { id: "21", description: "Szosty", type: "quaternary" },
              { id: "22", description: "Szosty", type: "quaternary" },
              { id: "23", description: "", type: "empty" },
              { id: "24", description: "", type: "empty" },
            ],
          },
          {
            items: [
              {
                id: "25",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "26", description: "Drugi", type: "normal" },
              { id: "27", description: "Trzeci", type: "primary" },
              { id: "28", description: "Czwarty", type: "primary" },
              {
                id: "29",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "30", description: "Szosty", type: "secondary" },
              { id: "31", description: "Siodmy", type: "tertiary" },
              { id: "32", description: "Szosty", type: "quaternary" },
              { id: "33", description: "Szosty", type: "quaternary" },
              { id: "34", description: "", type: "empty" },
              { id: "35", description: "Szosty", type: "quaternary" },
              { id: "36", description: "Szosty", type: "quaternary" },
            ],
          },
          {
            items: [
              {
                id: "37",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "38", description: "Drugi", type: "normal" },
              { id: "39", description: "Trzeci", type: "primary" },
              { id: "40", description: "Czwarty", type: "primary" },
              {
                id: "41",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "42", description: "Szosty", type: "secondary" },
              { id: "43", description: "Siodmy", type: "tertiary" },
              { id: "44", description: "Szosty", type: "quaternary" },
              { id: "45", description: "Szosty", type: "quaternary" },
              { id: "46", description: "", type: "empty" },
              { id: "47", description: "Szosty", type: "quaternary" },
              { id: "48", description: "Szosty", type: "quaternary" },
            ],
          },
        ],
      },
      {
        title: "Mid",
        rows: [
          {
            items: [
              {
                id: "49",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "51", description: "Drugi", type: "normal" },
              { id: "52", description: "Trzeci", type: "primary" },
              { id: "53", description: "Czwarty", type: "primary" },
              {
                id: "54",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "55", description: "Szosty", type: "secondary" },
              { id: "56", description: "Siodmy", type: "tertiary" },
              { id: "57", description: "Szosty", type: "quaternary" },
              { id: "58", description: "Szosty", type: "quaternary" },
              { id: "59", description: "", type: "empty" },
              { id: "60", description: "Szosty", type: "quaternary" },
              { id: "61", description: "Szosty", type: "quaternary" },
            ],
          },
          {
            items: [
              {
                id: "62",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "63", description: "Drugi", type: "normal" },
              { id: "64", description: "Trzeci", type: "primary" },
              { id: "65", description: "Czwarty", type: "primary" },
              {
                id: "66",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "67", description: "Szosty", type: "secondary" },
              { id: "68", description: "Siodmy", type: "tertiary" },
              { id: "69", description: "Szosty", type: "quaternary" },
              { id: "71", description: "Szosty", type: "quaternary" },
              { id: "72", description: "", type: "empty" },
              { id: "73", description: "Szosty", type: "quaternary" },
              { id: "74", description: "Szosty", type: "quaternary" },
            ],
          },
          {
            items: [
              {
                id: "75",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "76", description: "Drugi", type: "normal" },
              { id: "77", description: "Trzeci", type: "primary" },
              { id: "78", description: "Czwarty", type: "primary" },
              {
                id: "79",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "80", description: "Szosty", type: "secondary" },
              { id: "81", description: "Siodmy", type: "tertiary" },
              { id: "82", description: "Szosty", type: "quaternary" },
              { id: "83", description: "Szosty", type: "quaternary" },
              { id: "84", description: "", type: "empty" },
              { id: "85", description: "Szosty", type: "quaternary" },
              { id: "86", description: "Szosty", type: "quaternary" },
            ],
          },
        ],
      },
      {
        title: "Junior",
        rows: [
          {
            items: [
              {
                id: "87",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "88", description: "Drugi", type: "normal" },
              { id: "89", description: "Trzeci", type: "primary" },
              { id: "90", description: "Czwarty", type: "primary" },
              {
                id: "91",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "93", description: "Szosty", type: "secondary" },
              { id: "94", description: "Siodmy", type: "tertiary" },
              { id: "95", description: "", type: "empty" },
              { id: "96", description: "Szosty", type: "quaternary" },
              { id: "97", description: "Szosty", type: "quaternary" },
              { id: "98", description: "", type: "empty" },
              { id: "99", description: "", type: "empty" },
            ],
          },
          {
            items: [
              {
                id: "100",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "101", description: "Drugi", type: "normal" },
              { id: "102", description: "Trzeci", type: "primary" },
              { id: "103", description: "Czwarty", type: "primary" },
              {
                id: "104",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "105", description: "Szosty", type: "secondary" },
              { id: "106", description: "Siodmy", type: "tertiary" },
              { id: "107", description: "Szosty", type: "quaternary" },
              { id: "108", description: "Szosty", type: "quaternary" },
              { id: "109", description: "", type: "empty" },
              { id: "110", description: "Szosty", type: "quaternary" },
              { id: "111", description: "Szosty", type: "quaternary" },
            ],
          },
          {
            items: [
              {
                id: "110",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "default",
              },
              { id: "111", description: "Drugi", type: "normal" },
              { id: "112", description: "Trzeci", type: "primary" },
              { id: "113", description: "Czwarty", type: "primary" },
              {
                id: "114",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie massa. Fusce efficitur ex.",
                type: "primary",
              },
              { id: "115", description: "Szosty", type: "secondary" },
              { id: "116", description: "Siodmy", type: "tertiary" },
              { id: "117", description: "Szosty", type: "quaternary" },
              { id: "118", description: "Szosty", type: "quaternary" },
              { id: "119", description: "", type: "empty" },
              { id: "120", description: "Szosty", type: "quaternary" },
              { id: "121", description: "Szosty", type: "quaternary" },
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
