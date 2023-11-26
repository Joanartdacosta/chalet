export async function getAllProjects() {
  const response = await fetch(
    "https://roads-blog-default-rtdb.firebaseio.com/chalet/projects.json"
  );
  const data = await response.json();

  const NEW = [];

  for (const key in data) {
    NEW.push({
      id: key,
      ...data[key],
    });
  }
  return NEW;
}

export async function getFeaturedProjects() {
  const all = await getAllProjects();
  return all.filter((item) => item.isFeatured);
}

export async function getByIdProject(id) {
  const all = await getAllProjects();
  return all.find((item) => item.id === id);
}
