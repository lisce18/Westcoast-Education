import { expect, it, describe } from "vitest";
import { initCourses } from "../lib/gallery.js";
import { JSDOM } from "jsdom";

describe("initCourses function", () => {
  it("should populate the course gallery with the correct courses", async () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="course-gallery"></div>`);
    global.document = dom.window.document;

    const mockHttp = {
      get: () =>
        Promise.resolve([
          { id: 1, name: "Python" },
          { id: 2, name: "JavaScript" },
          { id: 3, name: "React" },
          { id: 4, name: "NodeJs" },
        ]),
    };

    const mockGalleryDom = {
      createCard: (course) => {
        const div = document.createElement("div");
        div.textContent = course.name;
        return div;
      },
    };

    await initCourses(mockHttp, mockGalleryDom);

    const gallery = document.querySelector("#course-gallery");
    expect(gallery.textContent).toContain("Python");
    expect(gallery.textContent).toContain("JavaScript");
    expect(gallery.textContent).toContain("React");
    expect(gallery.textContent).toContain("NodeJs");
  });
});
