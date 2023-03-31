import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';
import { useRef } from 'react';

interface SearchProps { 
  hasError: boolean,
  onSubmit: (text: string) => void,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement  | null>(null)

  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = searchRef.current ? searchRef.current.value : '';

    if (text) {
      onSubmit(text)
      if (searchRef.current) 
        searchRef.current.value = '';
    }
  }

  return (
    <form onSubmit={handleSumbit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input 
          ref={searchRef}
          type="text"
          id="search"
          className={styles.textField}
          name="username"
          placeholder="Search GitHub account..."
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
}
 