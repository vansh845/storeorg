import CartButton from './shopping-cart-button'
import { RightSheet } from './right-sheet'
import { prisma } from '../../prisma'
import { CategoriesType } from '@/types';
import ProfilePicture from '@/components/profile-picture';


export default async function Navbar() {

    async function getCategories(): Promise<CategoriesType[]> {
        const res = await prisma.category.findMany()
        return new Promise<CategoriesType[]>((resolve, reject) => resolve(res))
    }

    const categories = await getCategories()
    return (
        <nav className="sticky bg-background z-50 top-0 py-4 px-8 lg:px-16 flex justify-between border-b items-center">
            <div className='flex space-x-2'>
                <div className='flex items-center md:hidden'>
                    <RightSheet categories={categories} />
                </div>
                <h4 className="scroll-m-20 text-xl font-bold tracking-tight">
                    StoreOrg
                </h4>
            </div>

            <div className='hidden md:font-light md:text-sm md:flex md:space-x-3'>
                {categories.map(x => <p key=''>{x.title}</p>)}
            </div>
            <div className='items-center flex justify-center space-x-4'>
                <CartButton />
                <ProfilePicture />
            </div>

        </nav>
    )
}
