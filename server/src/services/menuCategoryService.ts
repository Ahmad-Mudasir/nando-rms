// import { getRepository } from 'typeorm';
// import { MenuCategory } from '../entities/MenuCategory';

// export const getAllMenuCategories = async () => {
//     const categoryRepository = getRepository(MenuCategory);
//     return await categoryRepository.find();
// };

// export const createMenuCategory = async (data: Partial<MenuCategory>) => {
//     const categoryRepository = getRepository(MenuCategory);
//     const newCategory = categoryRepository.create(data);
//     return await categoryRepository.save(newCategory);
// };

// export const updateMenuCategory = async (id: number, data: Partial<MenuCategory>) => {
//     const categoryRepository = getRepository(MenuCategory);
//     const category = await categoryRepository.findOne(id);

//     if (!category) {
//         throw new Error('Category not found');
//     }

//     categoryRepository.merge(category, data);
//     return await categoryRepository.save(category);
// };

// export const deleteMenuCategory = async (id: string) => {
//     const categoryRepository = getRepository(MenuCategory);
//     const result = await categoryRepository.delete(id);

//     if (result.affected === 0) {
//         throw new Error('Category not found');
//     }
// };
